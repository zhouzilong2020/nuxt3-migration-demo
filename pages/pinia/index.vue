<template>
  <div>
    {{ counterStore.counter }}
    <button
      style="background-color: antiquewhite; margin: 10px"
      @click="() => counterStore.counter++"
    >
      Add One
    </button>
    <nuxt-link to="/">Back To Home and check this page again</nuxt-link>
  </div>
</template>
<script lang="ts">
import useCounterStore from "@/store";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
});
</script>
