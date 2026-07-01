<script setup lang="ts">
import type { ContactLink } from '../data/contact';

defineProps<{
  profileImage: string;
  github?: ContactLink;
  email?: ContactLink;
  blog?: ContactLink;
}>();
</script>

<template>
  <section id="home" class="hero">
    <figure class="hero-profile">
      <img :src="profileImage" alt="김재영 프로필 사진" />
    </figure>
    <div class="hero-content">
      <p class="eyebrow">iOS Developer / Client Engineer</p>
      <h1>김재영 / Jaeyoung Kim</h1>
      <p class="hero-lead">
        실서비스 iOS 앱 출시·운영 경험을 바탕으로, 성능·안정성·사용자 경험을 함께 개선하는
        클라이언트 개발자입니다.
      </p>
      <ul class="hero-contact-list" aria-label="연락처 및 주요 링크">
        <li v-if="github?.href">
          <span>GitHub</span>
          <a :href="github.href" target="_blank" rel="noreferrer">{{ github.value }}</a>
        </li>
        <li v-if="email?.href">
          <span>Email</span>
          <a :href="email.href">{{ email.value }}</a>
        </li>
        <li v-if="blog?.href">
          <span>Blog</span>
          <a :href="blog.href" target="_blank" rel="noreferrer">{{ blog.value }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>