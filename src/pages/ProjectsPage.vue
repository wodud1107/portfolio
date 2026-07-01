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
    description="대표 프로젝트와 보조 프로젝트를 역할이 겹치지 않도록 나눠 정리했습니다."
  />

  <section class="section tight-section">
    <div class="filter-row" aria-label="프로젝트 필터">
      <button
        v-for="filter in PROJECT_FILTERS"
        :key="filter"
        class="filter-button"
        :class="{ active: selectedFilter === filter }"
        type="button"
        @click="selectedFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
