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
  <section class="section compact-section">
    <div class="section-heading">
      <p class="eyebrow">Credentials</p>
      <h2>자격증 및 수료 자료</h2>
    </div>
    <div class="credential-grid">
      <button
        v-for="credential in credentials"
        :key="credential.title"
        class="credential-card"
        type="button"
        @click="$emit('selectCredential', credential)"
      >
        <img :src="credential.image" :alt="`${credential.title} 미리보기`" loading="lazy" />
        <span>{{ credential.type }}</span>
        <strong>{{ credential.title }}</strong>
      </button>
    </div>
  </section>
</template>