<template>
  <div v-if="config">
    <h1>Welcome to {{ config.name }}</h1>
  </div>
  <div v-else>No tenant detected</div>
</template>
<script setup lang="ts">
const config = (await $fetch("/api/config").catch(() => null)) as {
  name: string;
} | null;
</script>
