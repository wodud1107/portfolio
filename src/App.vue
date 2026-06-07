<script setup lang="ts">
const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Tech', href: '/#tech' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: 'https://thinkartic1107.tistory.com/', external: true },
];
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="김재영 포트폴리오 홈">
        <span class="brand-mark">JY</span>
        <span>Jaeyoung Kim</span>
      </RouterLink>
      <nav class="site-nav" aria-label="주요 메뉴">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
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
