// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', 'nuxt-toastify'],
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
    }
});