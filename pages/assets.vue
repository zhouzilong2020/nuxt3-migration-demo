<template>
  <div>
    static
    <img src="@/assets/icon/aws.png" />
    dynamic
    <img :src="_icon" />
  </div>
</template>

<script setup lang="ts">
import aws from "@/assets/icon/aws.png";
const _icon = await icon();
</script>
