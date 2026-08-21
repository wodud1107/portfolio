<script setup lang="ts">
import type { OpenSourceContribution } from '../data/openSourceContributions';

defineProps<{
  contributions: OpenSourceContribution[];
}>();
</script>

<template>
  <section id="open-source" class="py-14 md:py-20">
    <div class="mb-6">
      <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Open Source Contribution</p>
      <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">오픈소스 기여</h2>
    </div>

    <article v-for="contribution in contributions" :key="contribution.href" class="rounded-2xl border border-neutral-200 p-5 md:p-6">
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">{{ contribution.project }}</p>
          <h3 class="mt-2 text-lg font-extrabold tracking-tight text-neutral-950">{{ contribution.title }}</h3>
        </div>
        <span class="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700">{{ contribution.status }}</span>
      </div>
      <p class="mt-4 max-w-4xl text-sm leading-7 text-neutral-700">{{ contribution.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        <a class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" :href="contribution.href" target="_blank" rel="noreferrer">
          기여 PR #2550 ↗
        </a>
        <a
          v-if="contribution.mergeHref"
          class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900"
          :href="contribution.mergeHref"
          target="_blank"
          rel="noreferrer"
        >
          최종 병합 #2555 ↗
        </a>
      </div>
    </article>
  </section>
</template>
