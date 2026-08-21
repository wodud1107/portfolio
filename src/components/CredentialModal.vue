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
            class="fixed inset-0 z-50 grid place-items-center p-4"
            role="dialog"
            aria-modal="true"
            :aria-label="`${credential.title} 보기`"
            @keydown.esc="$emit('close')"
        >
            <button
                class="absolute inset-0 bg-black/70"
                type="button"
                aria-label="자격증 자료 닫기"
                @click="$emit('close')"
            />
            <section class="relative z-10 max-h-full w-full max-w-4xl overflow-auto rounded-2xl bg-white p-4 shadow-2xl">
                <button
                    class="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-white text-xl shadow-md"
                    type="button"
                    aria-label="닫기"
                    @click="$emit('close')"    
                >
                    x
                </button>
                <img class="mx-auto block max-h-[75vh] w-full object-contain" :src="credential.image" :alt="`${credential.title} 원본 보기`" />
                <div class="mt-3 flex gap-2 text-sm text-neutral-700">
                    <strong class="font-extrabold text-neutral-950">{{ credential.type }}</strong>
                    <span>{{ credential.title }}</span>
                </div>
            </section>
        </div>
    </Teleport>
</template>
