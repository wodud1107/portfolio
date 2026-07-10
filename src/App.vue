<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { publicAsset } from './data/assets';

const internalNavItems = [
  { id: 'home', label: 'Home', to: { name: 'home', hash: '#home' } },
  { id: 'tech', label: 'Tech', to: { name: 'home', hash: '#tech' } },
  { id: 'projects', label: 'Projects', to: { name: 'home', hash: '#projects' } },
  { id: 'open-source', label: 'Open Source', to: { name: 'home', hash: '#open-source' } },
  { id: 'experience', label: 'Experience', to: { name: 'home', hash: '#experience' } },
];

const externalNavItems = [
  { label: 'Blog', href: 'https://thinkartic1107.tistory.com/', external: true },
];

const brandMark = publicAsset('favicon/android-chrome-512x512.png');
const route = useRoute();
const activeNavId = ref<string | null>('home');

function updateActiveNav() {
  if (route.name !== 'home') {
    activeNavId.value = null;
    return;
  }

  if (window.scrollY < 24) {
    activeNavId.value = 'home';
    return;
  }

  const headerHeight = document.querySelector('.site-header')?.clientHeight ?? 0;
  const activationLine = headerHeight + 24;
  const visibleItems = internalNavItems
    .map((item) => ({ item, section: document.getElementById(item.id) }))
    .filter((entry): entry is { item: (typeof internalNavItems)[number]; section: HTMLElement } =>
      Boolean(entry.section),
    )
    .filter(({ section }) => section.getBoundingClientRect().top <= activationLine);
  const currentItem = visibleItems[visibleItems.length - 1];

  activeNavId.value = currentItem?.item.id ?? 'home';
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveNav);
  window.removeEventListener('resize', updateActiveNav);
});

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    updateActiveNav();
  },
);
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
          :class="{ 'is-active': activeNavId === item.id }"
          :aria-current="activeNavId === item.id ? 'page' : undefined"
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
