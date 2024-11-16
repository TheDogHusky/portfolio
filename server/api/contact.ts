import { createTransport } from 'nodemailer';
import { z } from 'zod';

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

export default defineEventHandler((event) => {
    if (event.method !== 'POST') {
        return {
            status: 405,
            body: {
                message: 'Method not allowed'
            }
        }
    }

    return {
        hello: 'world'
    }
})