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
  <figure v-if="activeImage" :class="['image-carousel', { compact }]">
    <button
      v-if="images.length > 1"
      class="carousel-control previous"
      type="button"
      aria-label="이전 이미지"
      @click="showPrevious"
    >
      ‹
    </button>
    <button
      class="carousel-frame"
      type="button"
      :aria-label="`${activeImage.caption} 크게 보기`"
      @click="openModal"
    >
      <img :src="activeImage.src" :alt="activeImage.alt" loading="lazy" />
    </button>
    <button
      v-if="images.length > 1"
      class="carousel-control next"
      type="button"
      aria-label="다음 이미지"
      @click="showNext"
    >
      ›
    </button>
    <figcaption>
      <span v-if="images.length > 1" class="carousel-count">
        {{ activeIndex + 1 }} / {{ images.length }}
      </span>
      {{ activeImage.caption }}
    </figcaption>
    <div v-if="images.length > 1" class="carousel-dots" aria-hidden="true">
      <span
        v-for="(_, dotIndex) in images"
        :key="dotIndex"
        :class="{ active: dotIndex === activeIndex }"
      />
    </div>
  </figure>

  <Teleport to="body">
    <div
      v-if="isModalOpen && activeImage"
      class="carousel-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="`${activeImage.caption} 크게 보기`"
      tabindex="-1"
      @keydown.esc="closeModal"
    >
      <button class="modal-backdrop" type="button" aria-label="이미지 닫기" @click="closeModal" />
      <div class="modal-carousel-panel">
        <button class="modal-close" type="button" aria-label="닫기" @click="closeModal">×</button>
        <button
          v-if="images.length > 1"
          class="modal-control previous"
          type="button"
          aria-label="이전 이미지"
          @click="showPrevious"
        >
          ‹
        </button>
        <img :src="activeImage.src" :alt="activeImage.alt" />
        <button
          v-if="images.length > 1"
          class="modal-control next"
          type="button"
          aria-label="다음 이미지"
          @click="showNext"
        >
          ›
        </button>
        <div class="modal-caption">
          <strong v-if="images.length > 1">{{ activeIndex + 1 }} / {{ images.length }}</strong>
          <span>{{ activeImage.caption }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
