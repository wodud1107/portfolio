<script setup lang="ts">
import type { Credential } from '../types/portfolio';

defineProps<{
  credentials: Credential[];
}>();

defineEmits<{
  selectCredential: [credential: Credential];
}>();
</script>

<template>
  <section class="py-14 md:py-20">
    <div class="mb-6">
      <p class="mb-2 text-xs font-extrabold tracking-[0.14em] text-blue-700 uppercase">Credentials</p>
      <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950">자격증 및 수료 자료</h2>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="credential in credentials"
        :key="credential.title"
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        type="button"
        @click="$emit('selectCredential', credential)"
      >
        <img class="block aspect-4/3 w-full bg-neutral-50 object-cover" :src="credential.image" :alt="`${credential.title} 미리보기`" loading="lazy" />
        <span class="mt-4 block px-4 text-xs font-extrabold tracking-wide text-blue-700 uppercase">{{ credential.type }}</span>
        <strong class="mt-1 block px-4 pb-4 text-sm text-neutral-950">{{ credential.title }}</strong>
      </button>
    </div>
  </section>
</template>
