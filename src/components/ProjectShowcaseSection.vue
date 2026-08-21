<script setup lang="ts">
import type { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard.vue';

defineProps<{
  featuredProjects: Project[];
  secondaryProjects: Project[];
}>();
</script>

<template>
  <section id="projects" class="py-14 md:py-20">
    <div class="mb-7 flex items-end justify-between gap-4">
      <div>
        <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Selected Projects</p>
        <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">대표 프로젝트</h2>
      </div>
      <RouterLink class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" to="/projects">전체 프로젝트 보기</RouterLink>
    </div>
    <div class="grid gap-5 lg:grid-cols-3">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </section>

  <section v-if="secondaryProjects.length" class="pb-14 md:pb-20">
    <div class="mb-6">
      <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Additional Projects</p>
      <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">다른 프로젝트</h2>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <ProjectCard v-for="project in secondaryProjects" :key="project.slug" :project="project" compact />
    </div>
  </section>
</template>
