import { createTransport } from 'nodemailer';
import { z } from 'zod';
import xss from 'xss';
import { Client } from '@mosparo/api-client';

const config = useRuntimeConfig();

const transporter = createTransport({
    // For some reason, host field gives an error in TypeScript, even though it is the right syntax
    // @ts-ignore
    service: 'gmail',
    auth: {
        user: config.mailUser,
        pass: config.mailPassword
    }
});

const client = new Client(config.public.mosparoUrl, config.public.mosparoPublicKey, config.mosparoPrivateKey, {});

const ContactSchema = z.object({
    name: z.string({ message: 'The name field must be a string' }).min(2, 'The name field must contain at least 2 characters').max(50, 'The name field must contain at most 50 characters'),
    email: z.string({ message: 'The email field must be a string' }).trim().email('The email field must be a valid email address').max(50, 'The email field must contain at most 50 characters'),
    message: z.string({ message: 'The message field must be a string' }).min(50, 'The message field must contain at least 50 characters').max(1500, 'The message field must contain at most 1500 characters')
});

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') {
        throw createError({
            statusText: 'Method Not Allowed',
            statusCode: 405
        });
    }

    const unsafeBody = await readBody(event);
    const mosparoSubmitToken = unsafeBody._mosparo_submitToken;
    const mosparoValidationToken = unsafeBody._mosparo_validationToken;

    const mosparoResult = await client.verifySubmission(unsafeBody, mosparoSubmitToken, mosparoValidationToken);
    if (!mosparoResult.isSubmittable()) {
        throw createError({
            statusText: 'Invalid submission',
            statusCode: 400
        });
    }

    const result = await readValidatedBody(event, body => ContactSchema.safeParse(body));
    if (!result.success) throw createError({
        statusText: result.error.issues.map(issue => issue.message).join(', '),
        statusCode: 400
    });

    const { name, email, message } = result.data;
    const sanitizedMessage = xss(message);

    await transporter.sendMail({
        from: {
            name: email,
            address: 'no-reply@classydev.fr'
        },
        to: 'contact@classydev.fr',
        subject: `[Contact Form] New message from ${name}`,
        text: sanitizedMessage,
        replyTo: email
    });

    return {
        statusCode: 204
    };
});