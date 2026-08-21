<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ImageCarousel from '../components/ImageCarousel.vue';
import { findProjectBySlug } from '../data/projects';
import { highlightPortfolioText } from '../utils/highlightText';
import { getPerformanceScreenshots, getProductScreenshots } from '../utils/projectDisplay';

const route = useRoute();
const project = computed(() => findProjectBySlug(String(route.params.slug)));
const backLink = computed(() =>
  route.query.from === 'home'
    ? { to: { name: 'home', hash: '#projects' }, label: '← 홈으로 돌아가기' }
    : { to: { name: 'projects' }, label: '← 프로젝트 목록으로 돌아가기' },
);
const productScreenshots = computed(() => getProductScreenshots(project.value));
const performanceScreenshots = computed(() => getPerformanceScreenshots(project.value));
</script>

<template>
  <section v-if="project" class="py-10 md:py-16">
    <RouterLink class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" :to="backLink.to">
      {{ backLink.label }}
    </RouterLink>

    <header class="mt-8 grid gap-8 border-b border-neutral-200 pb-10 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div>
        <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">{{ project.status }} · {{ project.period }}</p>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-neutral-950 md:text-5xl">{{ project.name }}</h1>
        <p class="mt-5 max-w-3xl text-base leading-7 text-neutral-700 md:text-lg" v-html="highlightPortfolioText(project.summary)"></p>
      </div>
      <dl class="grid content-start gap-4 rounded-2xl bg-neutral-50 p-5 text-sm">
        <div>
          <dt class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">Role</dt>
          <dd class="mt-1 font-bold text-neutral-900">{{ project.role }}</dd>
        </div>
        <div>
          <dt class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">Platform</dt>
          <dd class="mt-1 font-bold text-neutral-900">{{ project.categories.join(' / ') }}</dd>
        </div>
      </dl>
    </header>

    <section v-if="project.highlights?.length" class="grid gap-3 border-b border-neutral-200 py-7 sm:grid-cols-2">
      <article v-for="highlight in project.highlights" :key="highlight.label" class="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
        <p class="text-xs font-extrabold tracking-wide text-blue-700 uppercase">{{ highlight.label }}</p>
        <p class="mt-2 text-xl font-extrabold tracking-tight text-neutral-950">{{ highlight.value }}</p>
      </article>
    </section>

    <section class="grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Overview</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-neutral-950">어떤 제품에서 무엇을 맡았는가</h2>
        <ul class="mt-5 grid gap-3 text-sm leading-6 text-neutral-700">
          <li v-for="item in project.overview" :key="item" class="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-blue-600" v-html="highlightPortfolioText(item)"></li>
        </ul>
      </div>
      <aside class="rounded-2xl border border-neutral-200 p-5">
        <p class="text-xs font-extrabold tracking-wide text-neutral-500 uppercase">Core tech</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="keyword in project.keywords" :key="keyword" class="rounded-md bg-neutral-100 px-2.5 py-1.5 text-xs font-bold text-neutral-700">{{ keyword }}</span>
        </div>
      </aside>
    </section>

    <section v-if="productScreenshots.length" class="border-t border-neutral-200 py-10">
      <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Product</p>
      <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-neutral-950">제품 화면</h2>
      <div class="mt-6">
        <ImageCarousel :images="productScreenshots" />
      </div>
    </section>

    <section class="border-t border-neutral-200 py-10">
      <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">My contribution</p>
      <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-neutral-950">담당 범위</h2>
      <ul class="mt-5 grid gap-3 md:grid-cols-3">
        <li v-for="item in project.roleDetails" :key="item" class="rounded-xl border border-neutral-200 p-4 text-sm leading-6 text-neutral-700" v-html="highlightPortfolioText(item)"></li>
      </ul>
    </section>

    <section v-if="project.decisionStories?.length" class="border-t border-neutral-200 py-10">
      <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Technical decisions</p>
      <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-neutral-950">문제 해결 과정</h2>
      <div class="mt-6 grid gap-5">
        <article v-for="story in project.decisionStories" :key="story.title" class="rounded-2xl border border-neutral-200 p-5 md:p-6">
          <h3 class="text-lg font-extrabold tracking-tight text-neutral-950">{{ story.title }}</h3>
          <dl class="mt-5 grid gap-5 md:grid-cols-3">
            <div>
              <dt class="text-xs font-extrabold tracking-wide text-rose-600 uppercase">Problem</dt>
              <dd class="mt-2 text-sm leading-6 text-neutral-700" v-html="highlightPortfolioText(story.problem)"></dd>
            </div>
            <div>
              <dt class="text-xs font-extrabold tracking-wide text-amber-700 uppercase">Decision</dt>
              <dd class="mt-2 text-sm leading-6 text-neutral-700" v-html="highlightPortfolioText(story.decision)"></dd>
            </div>
            <div>
              <dt class="text-xs font-extrabold tracking-wide text-emerald-700 uppercase">Result</dt>
              <dd class="mt-2 text-sm leading-6 font-semibold text-neutral-800" v-html="highlightPortfolioText(story.result)"></dd>
            </div>
          </dl>
          <p v-if="story.collaborationNote" class="mt-5 rounded-xl bg-neutral-50 p-4 text-sm leading-6 text-neutral-700"><span class="font-extrabold text-neutral-950">협업 방식. </span>{{ story.collaborationNote }}</p>
          <figure v-if="story.image" class="mt-5 overflow-hidden rounded-xl border border-neutral-200">
            <img class="block w-full" :src="story.image.src" :alt="story.image.alt" loading="lazy" />
            <figcaption v-if="story.image.caption" class="border-t border-neutral-200 px-4 py-3 text-sm text-neutral-600">{{ story.image.caption }}</figcaption>
          </figure>
          <div v-if="story.links?.length" class="mt-5 flex flex-wrap gap-3">
            <a v-for="link in story.links" :key="link.href" class="text-sm font-extrabold text-blue-700 underline underline-offset-4 hover:text-blue-900" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a>
          </div>
        </article>
      </div>
    </section>

    <section v-if="performanceScreenshots.length" class="border-t border-neutral-200 py-10">
      <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Measured evidence</p>
      <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-neutral-950">성능 계측 근거</h2>
      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <figure v-for="screenshot in performanceScreenshots" :key="screenshot.src" class="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <img class="block w-full" :src="screenshot.src" :alt="screenshot.alt" loading="lazy" />
          <figcaption class="p-4 text-sm font-semibold leading-6 text-neutral-700">{{ screenshot.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section v-if="project.links.length" class="border-t border-neutral-200 py-10">
      <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">Links</h2>
      <div class="mt-5 flex flex-wrap gap-3">
        <a v-for="link in project.links" :key="link.href" class="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-extrabold text-neutral-800 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a>
      </div>
    </section>
  </section>

  <section v-else class="py-16">
    <p class="text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Not Found</p>
    <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-neutral-950">프로젝트를 찾을 수 없습니다.</h1>
    <RouterLink class="mt-6 inline-block text-sm font-extrabold text-blue-700 underline underline-offset-4" to="/projects">프로젝트 목록으로 돌아가기</RouterLink>
  </section>
</template>
