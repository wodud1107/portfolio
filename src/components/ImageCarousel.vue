<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { ProjectScreenshot } from '../data/projects';

const props = defineProps<{
  images: ProjectScreenshot[];
  compact?: boolean;
}>();

const activeIndex = ref(0);
const isModalOpen = ref(false);

watch(
  () => props.images,
  () => {
    activeIndex.value = 0;
  },
);

const activeImage = computed(() => props.images[activeIndex.value]);

function showNext() {
  if (!props.images.length) return;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
}

function showPrevious() {
  if (!props.images.length) return;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
}

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <figure v-if="activeImage" class="relative mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50" :class="{ 'mt-4': compact }">
    <button
      v-if="images.length > 1"
      class="absolute top-1/2 left-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white/90 text-2xl leading-none text-neutral-900 shadow-sm hover:bg-white"
      type="button"
      aria-label="이전 이미지"
      @click="showPrevious"
    >
      ‹
    </button>
    <button
      class="block w-full cursor-zoom-in"
      type="button"
      :aria-label="`${activeImage.caption} 크게 보기`"
      @click="openModal"
    >
      <img class="block aspect-16/10 w-full object-contain" :class="{ 'aspect-video': compact }" :src="activeImage.src" :alt="activeImage.alt" loading="lazy" />
    </button>
    <button
      v-if="images.length > 1"
      class="absolute top-1/2 right-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white/90 text-2xl leading-none text-neutral-900 shadow-sm hover:bg-white"
      type="button"
      aria-label="다음 이미지"
      @click="showNext"
    >
      ›
    </button>
    <figcaption class="flex items-center gap-2 border-t border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-700">
      <span v-if="images.length > 1" class="rounded bg-neutral-100 px-1.5 py-0.5 text-xs font-extrabold text-neutral-500">
        {{ activeIndex + 1 }} / {{ images.length }}
      </span>
      {{ activeImage.caption }}
    </figcaption>
    <div v-if="images.length > 1" class="flex justify-center gap-1.5 px-4 pb-3" aria-hidden="true">
      <span
        v-for="(_, dotIndex) in images"
        :key="dotIndex"
        class="size-1.5 rounded-full bg-neutral-300"
        :class="{ 'bg-blue-600!': dotIndex === activeIndex }"
      />
    </div>
  </figure>

  <Teleport to="body">
    <div
      v-if="isModalOpen && activeImage"
      class="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="`${activeImage.caption} 크게 보기`"
      tabindex="-1"
      @keydown.esc="closeModal"
    >
      <button class="absolute inset-0 bg-black/70" type="button" aria-label="이미지 닫기" @click="closeModal" />
      <div class="relative z-10 max-h-full w-full max-w-5xl overflow-auto rounded-2xl bg-white p-4 shadow-2xl">
        <button class="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-white text-xl shadow-md" type="button" aria-label="닫기" @click="closeModal">×</button>
        <button
          v-if="images.length > 1"
          class="absolute top-1/2 left-5 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow-md"
          type="button"
          aria-label="이전 이미지"
          @click="showPrevious"
        >
          ‹
        </button>
        <img class="mx-auto block max-h-[75vh] w-full object-contain" :src="activeImage.src" :alt="activeImage.alt" />
        <button
          v-if="images.length > 1"
          class="absolute top-1/2 right-5 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl shadow-md"
          type="button"
          aria-label="다음 이미지"
          @click="showNext"
        >
          ›
        </button>
        <div class="mt-3 flex gap-2 text-sm text-neutral-700">
          <strong v-if="images.length > 1" class="font-extrabold text-neutral-950">{{ activeIndex + 1 }} / {{ images.length }}</strong>
          <span>{{ activeImage.caption }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
