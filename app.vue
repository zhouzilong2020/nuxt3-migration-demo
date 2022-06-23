<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { beforeEach } from "./router";
const router = useRouter();
router.beforeEach(beforeEach);
</script>
