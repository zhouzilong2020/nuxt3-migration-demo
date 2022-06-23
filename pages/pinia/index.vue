<template>
  <ul>
    <ls>{{ counterStore.counter }}</ls>
    <ls><button @click="() => counterStore.counter++">Add One</button></ls>
    <ls>
      <nuxt-link to="/">Back To Home and check this page again</nuxt-link>
    </ls>
  </ul>
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
