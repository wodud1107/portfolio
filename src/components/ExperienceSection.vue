<script setup lang="ts">
import type { ContactLink } from '../data/contact';
import type { ExperienceItem } from '../data/experience';

defineProps<{
  experiences: ExperienceItem[];
  blog?: ContactLink;
}>();
</script>

<template>
  <section id="experience" class="section">
    <div class="section-heading inline-heading">
      <div>
        <p class="eyebrow">Experience</p>
        <h2>경험과 활동</h2>
      </div>
      <a v-if="blog?.href" class="text-link" :href="blog.href" target="_blank" rel="noreferrer">
        블로그 보기
      </a>
    </div>

    <div class="timeline">
      <article v-for="item in experiences" :key="item.title" class="timeline-item">
        <p class="timeline-period">{{ item.period }}</p>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
          <div class="tag-row">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>