<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Project } from '../data/projects';
import { highlightPortfolioText } from '../utils/highlightText';
import ImageCarousel from './ImageCarousel.vue';

const props = defineProps<{
  project: Project;
  compact?: boolean;
}>();

const route = useRoute();
const router = useRouter();
const previewScreenshots = computed(() =>
  props.project.screenshots?.filter((screenshot) => screenshot.group !== 'performance').slice(0, 5) ?? [],
);
const detailRoute = computed(() => ({
  name: 'project-detail',
  params: { slug: props.project.slug },
  query: { from: route.name === 'home' ? 'home' : 'projects' },
}));

function openDetail() {
  router.push(detailRoute.value);
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest('a, button'));
}

function handleCardClick(event: MouseEvent) {
  if (!isInteractiveTarget(event.target)) openDetail();
}

</script>

<template>
  <article
    class="flex h-full cursor-pointer flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    :class="{ 'p-4': compact }"
    @click="handleCardClick"
  >
    <div class="flex items-center justify-between gap-3 text-xs font-extrabold tracking-wide text-neutral-500 uppercase">
      <span class="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">{{ project.status }}</span>
      <span class="text-right">{{ project.period }}</span>
    </div>
    <h3 class="mt-5 text-xl font-extrabold tracking-tight text-neutral-950">{{ project.name }}</h3>
    <p class="mt-2 text-sm leading-6 text-neutral-700" v-html="highlightPortfolioText(project.summary)"></p>
    <ImageCarousel v-if="previewScreenshots.length" :images="previewScreenshots" compact />
    <dl class="mt-5 border-y border-neutral-100 py-3">
      <div class="grid grid-cols-[52px_minmax(0,1fr)] gap-3 text-sm">
        <dt class="font-extrabold text-neutral-500">Role</dt>
        <dd class="font-bold text-neutral-900">{{ project.role }}</dd>
      </div>
    </dl>
    <div v-if="project.highlights?.length" class="mt-5 grid gap-2">
      <div v-for="highlight in project.highlights" :key="highlight.label" class="rounded-xl bg-neutral-50 px-3 py-2.5">
        <p class="text-[11px] font-extrabold tracking-wide text-neutral-500 uppercase">{{ highlight.label }}</p>
        <p class="mt-1 text-sm font-extrabold text-neutral-950">{{ highlight.value }}</p>
      </div>
    </div>
    <div class="mt-5 flex flex-wrap gap-1.5" aria-label="프로젝트 태그">
      <span v-for="keyword in project.keywords.slice(0, compact ? 4 : 5)" :key="keyword" class="rounded-md bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-600">
        {{ keyword }}
      </span>
    </div>
    <div class="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6">
      <RouterLink class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" :to="detailRoute">상세 보기</RouterLink>
      <a
        v-for="link in project.links.slice(0, 2)"
        :key="link.href"
        class="text-sm font-bold text-neutral-600 underline underline-offset-4 hover:text-blue-700"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </article>
</template>
