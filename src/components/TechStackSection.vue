<script setup lang="ts">
import type { StackGroup } from '../data/techStack';

defineProps<{
  stackGroups: StackGroup[];
}>();
</script>

<template>
  <section id="tech" class="section">
    <div class="section-heading compact-heading">
      <p class="eyebrow">Tech Stack</p>
      <h2>프로젝트에서 사용한 기술</h2>
    </div>
    <div class="stack-grid">
      <article v-for="group in stackGroups" :key="group.title" class="stack-group">
        <h3>{{ group.title }}</h3>
        <div class="stack-list">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>