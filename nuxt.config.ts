// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', 'nuxt-toastify', '@nuxtjs/i18n', 'nuxt-security'],
    css: ['~/assets/css/main.css'],
    plugins: [
        { src: '~/plugins/aos.client', mode: 'client' }
    ],
    runtimeConfig: {
        mailUser: process.env.NUXT_MAIL_USER ?? '',
        mailPassword: process.env.NUXT_MAIL_PASSWORD ?? '',
        mailHost: process.env.NUXT_MAIL_HOST ?? '',
        mosparoPrivateKey: process.env.NUXT_MOSPARO_PRIVATE_KEY ?? '',
        public: {
            plausibleUrl: process.env.NUXT_PUBLIC_PLAUSIBLE_URL ?? '',
            mosparoUrl: process.env.NUXT_PUBLIC_MOSPARO_URL ?? '',
            mosparoProjectId: process.env.NUXT_PUBLIC_MOSPARO_PROJECT_ID ?? '',
            mosparoPublicKey: process.env.NUXT_PUBLIC_MOSPARO_PUBLIC_KEY ?? ''
        }
    },
    toastify: {
        autoClose: 2000,
        position: 'top-right',
        theme: 'auto',
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json',
                name: "English"
            },
            {
                code: 'fr',
                file: 'fr.json',
                name: "Français"
            },
        ],

        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix',
        vueI18n: './i18n.config.ts'
    },
    security: {
        corsHandler: {
            origin: [
                'http://localhost:3000',
                'http://localhost:15264',
                'https://classydev.fr',
                'https://www.classydev.fr',
                'https://mosparo.classydev.fr',
                'https://plausible.classydev.fr'
            ]
        },
        headers: {
            crossOriginResourcePolicy: 'cross-origin',
            contentSecurityPolicy: {
                'default-src': ["'self'"],
                'script-src': ["'self'", "'unsafe-inline'", 'https://plausible.classydev.fr', 'https://mosparo.classydev.fr'],
                'script-src-attr': ["'self'", "'unsafe-inline'", 'https://plausible.classydev.fr', 'https://mosparo.classydev.fr'],
                'style-src': ["'self'", "'unsafe-inline'", 'https://mosparo.classydev.fr'],
                'img-src': ["'self'", 'https://plausible.classydev.fr', 'https://mosparo.classydev.fr'],
                'connect-src': ["'self'", 'https://plausible.classydev.fr', 'https://mosparo.classydev.fr'],
                'font-src': ["'self'", 'https://fonts.gstatic.com'],
                'frame-src': ['https://plausible.classydev.fr']
            },
        }
    }
});