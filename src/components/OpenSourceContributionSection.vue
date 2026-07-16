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
      <div class="open-source-links">
        <a class="text-link" :href="contribution.href" target="_blank" rel="noreferrer">
          기여 PR #2550 ↗
        </a>
        <a
          v-if="contribution.mergeHref"
          class="text-link"
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
