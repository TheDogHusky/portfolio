// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image'],
    css: ['~/assets/css/main.css'],
    plugins: [
        { src: '~/plugins/aos.client', mode: 'client' }
    ],
});