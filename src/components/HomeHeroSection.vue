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
  <section id="home" class="grid gap-8 border-b border-neutral-200 py-12 md:grid-cols-[200px_minmax(0,1fr)] md:items-center md:py-16">
    <figure class="m-0 aspect-square w-40 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 md:w-50">
      <img :src="profileImage" alt="김재영 프로필 사진" />
    </figure>
    <div class="max-w-3xl">
      <p class="mb-3 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Client Developer</p>
      <h1 class="text-4xl leading-tight font-extrabold tracking-tight text-neutral-950 md:text-5xl">김재영 / Jaeyoung Kim</h1>
      <p class="mt-5 max-w-2xl text-base leading-7 text-neutral-700 md:text-lg">
        출시 앱의 상태 지연과 성능 문제를 측정해 개선하고, 개인 제품을 iOS와 Android로 확장해 온
        클라이언트 개발자입니다.
      </p>
      <ul class="mt-6 grid max-w-xl gap-2.5" aria-label="연락처 및 주요 링크">
        <li v-if="github?.href" class="grid grid-cols-[72px_minmax(0,1fr)] gap-3">
          <span class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">GitHub</span>
          <a class="w-fit max-w-full overflow-wrap-anywhere font-bold text-neutral-900 underline decoration-blue-300 underline-offset-4 hover:text-blue-700" :href="github.href" target="_blank" rel="noreferrer">{{ github.value }}</a>
        </li>
        <li v-if="email?.href" class="grid grid-cols-[72px_minmax(0,1fr)] gap-3">
          <span class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">Email</span>
          <a class="w-fit max-w-full overflow-wrap-anywhere font-bold text-neutral-900 underline decoration-blue-300 underline-offset-4 hover:text-blue-700" :href="email.href">{{ email.value }}</a>
        </li>
        <li v-if="blog?.href" class="grid grid-cols-[72px_minmax(0,1fr)] gap-3">
          <span class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">Blog</span>
          <a class="w-fit max-w-full overflow-wrap-anywhere font-bold text-neutral-900 underline decoration-blue-300 underline-offset-4 hover:text-blue-700" :href="blog.href" target="_blank" rel="noreferrer">{{ blog.value }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>
