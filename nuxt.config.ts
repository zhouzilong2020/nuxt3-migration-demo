import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

const r = (...args: string[]) => resolve(__dirname, ...args);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: ["@pinia/nuxt", "unplugin-icons/nuxt"],
  build: {
    transpile: [
      "naive-ui",
      "vueuc",
      "@css-render/vue3-ssr",
      "@juggle/resize-observer",
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ["date-fns-tz/esm/formatInTimeZone"],
    },
    plugins: [
      Components({
        dirs: [r("./pages")],
        resolvers: [IconsResolver({ prefix: "" })],
      }),
      Icons({ autoInstall: true }),
    ],
  },
});
