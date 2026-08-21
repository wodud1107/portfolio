<script setup lang="ts">
import type { ContactLink } from '../data/contact';
import type { ExperienceItem } from '../data/experience';

defineProps<{
  experiences: ExperienceItem[];
  blog?: ContactLink;
}>();
</script>

<template>
  <section id="experience" class="py-14 md:py-20">
    <div class="mb-7 flex items-end justify-between gap-4">
      <div>
        <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Experience</p>
        <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">경험과 활동</h2>
      </div>
      <a v-if="blog?.href" class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" :href="blog.href" target="_blank" rel="noreferrer">
        블로그 보기
      </a>
    </div>

    <div class="border-t border-neutral-200">
      <article v-for="item in experiences" :key="item.title" class="grid gap-3 border-b border-neutral-200 py-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
        <p class="text-sm font-extrabold text-neutral-500">{{ item.period }}</p>
        <div>
          <h3 class="text-base font-extrabold text-neutral-950">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-neutral-700">{{ item.description }}</p>
          <ul v-if="item.points?.length" class="mt-3 grid gap-1.5 text-sm leading-6 text-neutral-700">
            <li v-for="point in item.points" :key="point" class="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-blue-600">{{ point }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
