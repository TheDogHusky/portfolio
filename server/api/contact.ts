import { createTransport } from 'nodemailer';
import { z } from 'zod';
import xss from 'xss';

const config = useRuntimeConfig();

const transporter = createTransport({
    host: 'mail.classydev.fr',
    port: 587,
    secureConnection: true,
    auth: {
        user: config.mailUser,
        pass: config.mailPassword
    }
});

const ContactSchema = z.object({
    name: z.string({ message: 'The name field must be a string' }).min(2, 'The name field must contain at least 2 characters').max(50, 'The name field must contain at most 50 characters'),
    email: z.string({ message: 'The email field must be a string' }).trim().email('The email field must be a valid email address'),
    message: z.string({ message: 'The message field must be a string' }).min(50, 'The message field must contain at least 50 characters').max(1500, 'The message field must contain at most 1500 characters')
});

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') {
        throw createError({
            statusText: 'Method Not Allowed',
            statusCode: 405
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
            address: config.mailUser
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