<script setup lang="ts">
import type { Credential } from '../types/portfolio';

defineProps<{
  credential: Credential;
}>();

defineEmits<{
  close: [];
}>();
</script>

<template>
    <Teleport to="body">
        <div
            class="credential-modal"
            role="dialog"
            aria-modal="true"
            :aria-label="`${credential.title} 보기`"
            @keydown.esc="$emit('close')"
        >
            <button
                class="modal-backdrop"
                type="button"
                aria-label="자격증 자료 닫기"
                @click="$emit('close')"
            />
            <section class="credential-modal-panel">
                <button
                    class="modal-close"
                    type="button"
                    aria-label="닫기"
                    @click="$emit('close')"    
                >
                    x
                </button>
                <img :src="credential.image" :alt="`${credential.title} 원본 보기`" />
                <div class="modal-caption">
                    <strong>{{ credential.type }}</strong>
                    <span>{{ credential.title }}</span>
                </div>
            </section>
        </div>
    </Teleport>
</template>