<script setup lang="ts">
import { publicAsset } from './data/assets';

const internalNavItems = [
  { label: 'Home', to: { name: 'home', hash: '#home' } },
  { label: 'Tech', to: { name: 'home', hash: '#tech' } },
  { label: 'Projects', to: { name: 'home', hash: '#projects' } },
  { label: 'Experience', to: { name: 'home', hash: '#experience' } },
];

const externalNavItems = [
  { label: 'Blog', href: 'https://thinkartic1107.tistory.com/', external: true },
];

const brandMark = publicAsset('favicon/android-chrome-512x512.png');
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="김재영 포트폴리오 홈">
        <img class="brand-mark" :src="brandMark" alt="" />
        <span>Jaeyoung Kim</span>
      </RouterLink>
      <nav class="site-nav" aria-label="주요 메뉴">
        <RouterLink
          v-for="item in internalNavItems"
          :key="item.label"
          :to="item.to"
        >
          {{ item.label }}
        </RouterLink>
        <a
          v-for="item in externalNavItems"
          :key="item.href"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ item.label }}
        </a>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
