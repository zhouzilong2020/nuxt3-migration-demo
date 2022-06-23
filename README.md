# This is a demo project for migrating from vue3 with vite to nuxt3
## The stack that need to be migrated:

### tailwindCss
[Tutorial](https://www.netlify.com/blog/2021/10/29/pairing-nuxt-3-with-tailwindcss-and-supabase/)

### pinia
[Tutorial](https://codybontecou.com/nuxt3-and-pinia.html#vuex-pinia) 
This is an community solution, and the official document only provides tutorial for Nuxt2

### naive-ui
[Tutorial](https://github.com/07akioni/naive-ui-nuxt-demo) 
This is a demo provided by the author

### vue-router
We use vue-router's interceptor in the old project and use ```/router/index.ts``` to specify our routes.
However, nuxt integrates vue-router by default, and the routing is configured out of a naming [convention](https://v3.nuxtjs.org/guide/directory-structure/pages/).

Nuxt official provides a [solution](nuxtApp) that allows us to configure a middleware to implement the interceptor logic.
What should be emphasized is that Nuxt3 will override the ```routes``` and ```history``` options, and there is no way to control this.

### vite plugin
Vite provides powerful plugins like ```unplugin-icons```. Since nuxt3 uses vite by default, there are should be a way to do the same thing in nuxt3.
Fortunately, [unplugin-icons](https://github.com/antfu/unplugin-icons/issues/114) has added support to nuxt3. There is no big change between using vite and nuxt3, and your just need to copy the config from ```vite.config.ts``` to the relevant part in ```nuxt.config.ts```