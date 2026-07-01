<script setup lang="ts">
import type { ProjectCodeSnippet } from '../types/portfolio';
import { highlightedSwiftLines } from '../utils/swiftHighlight';

defineProps<{
    snippet: ProjectCodeSnippet;
}>();

defineEmits<{
    close: [];
}>();
</script>

<template>
    <Teleport to="body">
        <div
            class="code-modal"
            role="dialog"
            aria-modal="true"
            :aria-label="`${snippet.title} 코드 보기`"
            tabindex="-1"
            @keydown.esc="$emit('close')"
        >
            <button
                class="modal-backdrop"
                type="button"
                aria-label="코드 닫기"
                @click="$emit('close')"
            />
            <section class="code-modal-panel">
                <button
                    class="modal-close"
                    type="button"
                    aria-label="닫기"
                    @click="$emit('close')"
                >
                    x
                </button>
                <h2>{{ snippet.title }}</h2>
                <p>{{ snippet.description }}</p>
                <pre class="swift-code-block"><code>
                    <span
                        v-for="line in highlightedSwiftLines(snippet.code)"
                        :key="line.index"
                        class="swift-code-line"
                        :class="{ 'core-line': line.core }"
                    ><span class="line-number">{{ line.index + 1 }}</span><span class="line-content" v-html="line.html || ' '"></span></span>
                </code></pre>
            </section>
        </div>
    </Teleport>
</template>