<script setup lang="ts">
import { computed, ref } from 'vue';
import PageHeader from '../components/PageHeader.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects';
import { PROJECT_FILTERS } from '../types/portfolio';
import type { ProjectFilter } from '../types/portfolio';

const selectedFilter = ref<ProjectFilter>('All');

const filteredProjects = computed(() => {
  const filter = selectedFilter.value;

  if (filter === 'All') {
    return projects;
  }

  return projects.filter((project) => project.categories.includes(filter));
});
</script>

<template>
  <PageHeader
    eyebrow="Projects"
    title="프로젝트 목록"
    description="세 프로젝트에 서로 다른 문제 해결 경험이 드러나도록 정리했습니다."
  />

  <section class="py-8 pb-16 md:py-10 md:pb-20">
    <div class="mb-7 flex flex-wrap gap-2" aria-label="프로젝트 필터">
      <button
        v-for="filter in PROJECT_FILTERS"
        :key="filter"
        class="rounded-full border border-neutral-200 px-3.5 py-2 text-sm font-bold text-neutral-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        :class="{ 'border-blue-600! bg-blue-600! text-white!': selectedFilter === filter }"
        type="button"
        @click="selectedFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
