export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            ACCESS_TOKEN: process.env.ACCESS_TOKEN,
            BASE_DOMAIN: process.env.BASE_DOMAIN,
        },
    },
    devtools: { enabled: true },
    css: ["~/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        dirs: ["./*store.ts"],
    },
    modules: [
        [
            "@pinia/nuxt",
            {
                autoImports: ["defineStore"],
            },
        ],
    ],
})
