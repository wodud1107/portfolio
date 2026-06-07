<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ImageCarousel from '../components/ImageCarousel.vue';
import { findProjectBySlug } from '../data/projects';
import type { ProjectCodeSnippet } from '../data/projects';

const route = useRoute();
const project = computed(() => findProjectBySlug(String(route.params.slug)));
const activeSnippet = ref<ProjectCodeSnippet | null>(null);
const backLink = computed(() =>
  route.query.from === 'home'
    ? { to: { name: 'home', hash: '#projects' }, label: '← 홈으로 돌아가기' }
    : { to: { name: 'projects' }, label: '← 프로젝트 목록으로 돌아가기' },
);
const productScreenshots = computed(
  () => project.value?.screenshots?.filter((screenshot) => screenshot.group !== 'performance') ?? [],
);
const performanceScreenshots = computed(
  () => project.value?.screenshots?.filter((screenshot) => screenshot.group === 'performance') ?? [],
);

function openSnippet(index: number) {
  const snippet = project.value?.codeSnippets?.[index];
  if (snippet) activeSnippet.value = snippet;
}

function closeSnippet() {
  activeSnippet.value = null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightSwift(line: string) {
  return escapeHtml(line)
    .replace(/(\/\/.*)$/g, '<span class="swift-comment">$1</span>')
    .replace(/(&quot;.*?&quot;)/g, '<span class="swift-string">$1</span>')
    .replace(
      /\b(public|private|func|let|var|if|guard|else|return|for|in|continue|nil|true|false)\b/g,
      '<span class="swift-keyword">$1</span>',
    )
    .replace(/\b([A-Z][A-Za-z0-9_]+)\b/g, '<span class="swift-type">$1</span>');
}

function isCoreSwiftLine(line: string) {
  return /validator\.validate|evaluator\.evaluate|missingCells|extraCells|makePaintedShapeGroups|semanticColorsByPlacement|adjacentConflicts|orthogonalNeighbors|conflicts\.insert/.test(
    line,
  );
}

function highlightedSwiftLines(code: string) {
  return code.split('\n').map((line, index) => ({
    index,
    html: highlightSwift(line),
    core: isCoreSwiftLine(line),
  }));
}
</script>

<template>
  <section v-if="project" class="detail-page">
    <RouterLink class="text-link back-link" :to="backLink.to">{{ backLink.label }}</RouterLink>

    <header class="detail-header">
      <div>
        <p class="eyebrow">{{ project.status }} · {{ project.period }}</p>
        <h1>{{ project.name }}</h1>
        <p>{{ project.summary }}</p>
      </div>
      <dl class="detail-meta">
        <div>
          <dt>Role</dt>
          <dd>{{ project.role }}</dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{{ project.categories.join(' / ') }}</dd>
        </div>
      </dl>
    </header>

    <div class="tag-row detail-tags">
      <span v-for="tag in [...project.tags, ...project.keywords]" :key="tag">{{ tag }}</span>
    </div>

    <p v-if="project.featuredSummary" class="project-featured-summary">
      {{ project.featuredSummary }}
    </p>

    <article class="detail-section">
      <h2>Overview</h2>
      <ul>
        <li v-for="item in project.overview" :key="item">{{ item }}</li>
      </ul>
    </article>

    <article class="detail-section">
      <h2>My Role</h2>
      <div v-if="project.roleBreakdown?.length" class="role-breakdown">
        <section v-for="group in project.roleBreakdown" :key="group.title">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
      <ul v-else>
        <li v-for="item in project.roleDetails" :key="item">{{ item }}</li>
      </ul>
    </article>

    <article class="detail-section">
      <h2>Problem</h2>
      <ul>
        <li v-for="item in project.problem" :key="item">{{ item }}</li>
      </ul>
    </article>

    <article v-if="project.decisionStories?.length" class="detail-section">
      <h2>Decision Stories</h2>
      <div class="decision-story-list">
        <section v-for="story in project.decisionStories" :key="story.title" class="decision-story">
          <h3>{{ story.title }}</h3>
          <dl class="pdr-list">
            <div>
              <dt>Problem</dt>
              <dd>{{ story.problem }}</dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd>{{ story.decision }}</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>{{ story.result }}</dd>
            </div>
          </dl>
          <figure v-if="story.image" class="decision-story-image">
            <img :src="story.image.src" :alt="story.image.alt" loading="lazy" />
            <figcaption v-if="story.image.caption">{{ story.image.caption }}</figcaption>
          </figure>
          <div v-if="story.links?.length" class="section-link-list">
            <a
              v-for="link in story.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
          <div v-if="story.snippetIndexes?.length" class="story-code-block">
            <p>관련 코드</p>
            <div class="code-chip-list story-code-chip-list">
              <template v-for="snippetIndex in story.snippetIndexes" :key="snippetIndex">
                <button
                  v-if="project.codeSnippets?.[snippetIndex]"
                  class="code-chip"
                  type="button"
                  :aria-label="`${project.codeSnippets[snippetIndex].title} 코드 확인하기`"
                  @click="openSnippet(snippetIndex)"
                >
                  <strong>코드 확인하기</strong>
                </button>
              </template>
            </div>
          </div>
        </section>
      </div>
    </article>

    <article v-if="productScreenshots.length" class="detail-section media-section">
      <h2>Screenshots</h2>
      <ImageCarousel :images="productScreenshots" />
    </article>

    <article v-if="performanceScreenshots.length" class="detail-section media-section">
      <h2>Performance Evidence</h2>
      <p>
        Instruments 캡처는 단순 화면 예시가 아니라, 렌더링 병목을 찾고 개선 효과를 확인한
        근거입니다. 개선 전후에 어떤 트랙과 수치를 봤는지 함께 읽히도록 정리했습니다.
      </p>
      <div class="performance-gallery">
        <figure
          v-for="screenshot in performanceScreenshots"
          :key="screenshot.src"
          class="performance-card"
        >
          <img :src="screenshot.src" :alt="screenshot.alt" loading="lazy" />
          <figcaption>
            <strong>{{ screenshot.caption }}</strong>
            <ul v-if="screenshot.notes?.length">
              <li v-for="note in screenshot.notes" :key="note">{{ note }}</li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </article>

    <article
      v-for="section in project.extraSections"
      :key="section.title"
      class="detail-section"
    >
      <h2>{{ section.title }}</h2>
      <ul>
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
      <div v-if="section.links?.length" class="section-link-list">
        <a
          v-for="link in section.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </article>

    <article v-if="project.links.length" class="detail-section">
      <h2>Links</h2>
      <div class="link-list">
        <a
          v-for="link in project.links"
          :key="link.href"
          class="button"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </article>
  </section>

  <section v-else class="page-header">
    <p class="eyebrow">Not Found</p>
    <h1>프로젝트를 찾을 수 없습니다.</h1>
    <RouterLink class="text-link" to="/projects">프로젝트 목록으로 돌아가기</RouterLink>
  </section>

  <Teleport to="body">
    <div
      v-if="activeSnippet"
      class="code-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="`${activeSnippet.title} 코드 보기`"
      tabindex="-1"
      @keydown.esc="closeSnippet"
    >
      <button class="modal-backdrop" type="button" aria-label="코드 닫기" @click="closeSnippet" />
      <section class="code-modal-panel">
        <button class="modal-close" type="button" aria-label="닫기" @click="closeSnippet">×</button>
        <h2>{{ activeSnippet.title }}</h2>
        <p>{{ activeSnippet.description }}</p>
        <pre class="swift-code-block"><code>
          <span
            v-for="line in highlightedSwiftLines(activeSnippet.code)"
            :key="line.index"
            class="swift-code-line"
            :class="{ 'core-line': line.core }"
          ><span class="line-number">{{ line.index + 1 }}</span><span class="line-content" v-html="line.html || ' '"></span></span>
        </code></pre>
      </section>
    </div>
  </Teleport>
</template>
