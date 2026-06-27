import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '@progress/kendo-theme-fluent/dist/all.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@progress/kendo-svg-icons',
        '@progress/kendo-vue-buttons',
        '@progress/kendo-vue-editor',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
