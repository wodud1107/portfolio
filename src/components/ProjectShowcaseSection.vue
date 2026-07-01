<script setup lang="ts">
import type { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard.vue';

defineProps<{
  featuredProjects: Project[];
  secondaryProjects: Project[];
}>();
</script>

<template>
  <section id="projects" class="section">
    <div class="section-heading inline-heading">
      <div>
        <p class="eyebrow">Selected Projects</p>
        <h2>대표 프로젝트</h2>
      </div>
      <RouterLink class="text-link" to="/projects">전체 프로젝트 보기</RouterLink>
    </div>
    <div class="project-grid two-column">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </section>

  <section class="section compact-section">
    <div class="section-heading">
      <p class="eyebrow">Additional Projects</p>
      <h2>다른 프로젝트</h2>
    </div>
    <div class="project-grid">
      <ProjectCard
        v-for="project in secondaryProjects"
        :key="project.slug"
        :project="project"
        compact
      />
    </div>
  </section>
</template>