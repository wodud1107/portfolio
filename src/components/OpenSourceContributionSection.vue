<script setup lang="ts">
import type { OpenSourceContribution } from '../data/openSourceContributions';

defineProps<{
  contributions: OpenSourceContribution[];
}>();
</script>

<template>
  <section id="open-source" class="section compact-section">
    <div class="section-heading">
      <p class="eyebrow">Open Source Contribution</p>
      <h2>오픈소스 기여</h2>
    </div>

    <article v-for="contribution in contributions" :key="contribution.href" class="open-source-card">
      <div class="open-source-card-header">
        <div>
          <p class="card-topline">{{ contribution.project }}</p>
          <h3>{{ contribution.title }}</h3>
        </div>
        <span class="status-pill">{{ contribution.status }}</span>
      </div>
      <p>{{ contribution.summary }}</p>
      <a class="text-link" :href="contribution.href" target="_blank" rel="noreferrer">
        PR #2550 보기 ↗
      </a>
    </article>
  </section>
</template>
