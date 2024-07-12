// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/app.css'],
    plugins: ['~/plugins/vue-writer.js'],
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        options: {
            theme: {
                preset: Aura,
            },
            unstyled: false,
        },
    },
    runtimeConfig: {
        public: {
            GITHUB_URL: process.env.GITHUB_URL,
        }
    }
})