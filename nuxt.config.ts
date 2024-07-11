// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/app.css'],
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: 'Shadcn',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/shadcn'
    }
})