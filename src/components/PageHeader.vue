<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <section class="border-b border-neutral-200 py-12 md:py-16">
    <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">{{ eyebrow }}</p>
    <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-neutral-950 md:text-5xl">{{ title }}</h1>
    <p class="mt-4 max-w-2xl text-base leading-7 text-neutral-700">{{ description }}</p>
  </section>
</template>
