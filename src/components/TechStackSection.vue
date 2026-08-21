<script setup lang="ts">
import type { StackGroup } from '../data/techStack';

defineProps<{
  stackGroups: StackGroup[];
}>();
</script>

<template>
  <section id="tech" class="py-14 md:py-20">
    <div class="mb-6">
      <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Tech Stack</p>
      <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">프로젝트에서 사용한 기술</h2>
    </div>
    <div class="border-t border-neutral-200">
      <article v-for="group in stackGroups" :key="group.title" class="grid gap-4 border-b border-neutral-200 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
        <h3 class="text-sm font-extrabold tracking-wide text-neutral-500 uppercase">{{ group.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in group.items" :key="item" class="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-semibold text-neutral-800">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
