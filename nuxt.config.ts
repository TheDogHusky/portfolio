// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', 'nuxt-toastify', '@nuxtjs/i18n'],
    css: ['~/assets/css/main.css'],
    plugins: [
        { src: '~/plugins/aos.client', mode: 'client' }
    ],
    runtimeConfig: {
        mailUser: process.env.NUXT_MAIL_USER ?? '',
        mailPassword: process.env.NUXT_MAIL_PASSWORD ?? ''
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
});