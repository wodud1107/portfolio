<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Project } from '../data/projects';
import ImageCarousel from './ImageCarousel.vue';

const props = defineProps<{
  project: Project;
  compact?: boolean;
}>();

const route = useRoute();
const previewScreenshots = computed(() =>
  props.project.screenshots?.filter((screenshot) => screenshot.group !== 'performance').slice(0, 4) ?? [],
);
const flow = computed(() => {
  const story = props.project.decisionStories?.[0];

  return {
    problem: story?.problem ?? props.project.problem[0] ?? props.project.summary,
    decision: story?.decision ?? props.project.overview[0] ?? props.project.summary,
    result: story?.result ?? props.project.roleDetails[0] ?? props.project.summary,
  };
});
const detailRoute = computed(() => ({
  name: 'project-detail',
  params: { slug: props.project.slug },
  query: { from: route.name === 'home' ? 'home' : 'projects' },
}));
</script>

<template>
  <article class="project-card" :class="{ compact }">
    <div class="card-topline">
      <span class="status-pill">{{ project.status }}</span>
      <span>{{ project.period }}</span>
    </div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.summary }}</p>
    <ImageCarousel v-if="previewScreenshots.length" :images="previewScreenshots" compact />
    <dl class="meta-list">
      <div>
        <dt>Role</dt>
        <dd>{{ project.role }}</dd>
      </div>
    </dl>
    <div class="project-flow">
      <section>
        <span>Problem</span>
        <p>{{ flow.problem }}</p>
      </section>
      <section>
        <span>Decision</span>
        <p>{{ flow.decision }}</p>
      </section>
      <section>
        <span>Result</span>
        <p>{{ flow.result }}</p>
      </section>
    </div>
    <div class="tag-row" aria-label="프로젝트 태그">
      <span v-for="keyword in project.keywords.slice(0, compact ? 4 : 5)" :key="keyword">
        {{ keyword }}
      </span>
    </div>
    <div class="card-actions">
      <RouterLink class="text-link" :to="detailRoute">상세 보기</RouterLink>
      <a
        v-for="link in project.links.slice(0, 2)"
        :key="link.href"
        class="text-link muted"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </article>
</template>
