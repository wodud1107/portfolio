<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CodeSnippetModal from '../components/CodeSnippetModal.vue';
import { useActiveItem } from '../composables/useActiveItem';
import ImageCarousel from '../components/ImageCarousel.vue';
import { findProjectBySlug } from '../data/projects';
import type { ProjectCodeSnippet, ProjectDecisionStory } from '../data/projects';
import { highlightPortfolioText } from '../utils/highlightText';
import {
  getPerformanceScreenshots,
  getProductScreenshots,
  getRoleSectionTitle,
  getSnippetForStory,
} from '../utils/projectDisplay'

const route = useRoute();
const project = computed(() => findProjectBySlug(String(route.params.slug)));
const backLink = computed(() =>
route.query.from === 'home'
? { to: { name: 'home', hash: '#projects' }, label: '← 홈으로 돌아가기' }
: { to: { name: 'projects' }, label: '← 프로젝트 목록으로 돌아가기' },
);
const productScreenshots = computed(() => getProductScreenshots(project.value));
const performanceScreenshots = computed(() => getPerformanceScreenshots(project.value));
const {
  activeItem: activeSnippet,
  openItem: openSnippet,
  closeItem: closeSnippet,
} = useActiveItem<ProjectCodeSnippet>();

function snippetForStory(story: ProjectDecisionStory, fallbackIndex: number) {
  return getSnippetForStory(project.value, story, fallbackIndex);
}

function roleSectionTitle() {
  return project.value ? getRoleSectionTitle(project.value) : 'My Role';
}
</script>

<template>
  <section v-if="project" class="detail-page">
    <RouterLink class="text-link back-link" :to="backLink.to">{{ backLink.label }}</RouterLink>

    <header class="detail-header">
      <div>
        <p class="eyebrow">{{ project.status }} · {{ project.period }}</p>
        <h1>{{ project.name }}</h1>
        <p v-html="highlightPortfolioText(project.summary)"></p>
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

    <article v-if="productScreenshots.length" class="detail-section media-section primary-media-section">
      <h2>Screenshots</h2>
      <ImageCarousel :images="productScreenshots" />
    </article>

    <div class="tag-row detail-tags">
      <span v-for="tag in [...project.tags, ...project.keywords]" :key="tag">{{ tag }}</span>
    </div>

    <p v-if="project.featuredSummary" class="project-featured-summary">
      <span v-html="highlightPortfolioText(project.featuredSummary)"></span>
    </p>

    <article class="detail-section">
      <h2>Overview</h2>
      <ul>
        <li
          v-for="item in project.overview"
          :key="item"
          v-html="highlightPortfolioText(item)"
        ></li>
      </ul>
    </article>

    <article class="detail-section">
      <h2>{{ roleSectionTitle() }}</h2>
      <div v-if="project.roleBreakdown?.length" class="role-breakdown">
        <section v-for="group in project.roleBreakdown" :key="group.title">
          <h3>{{ group.title }}</h3>
          <ul>
            <li
              v-for="item in group.items"
              :key="item"
              v-html="highlightPortfolioText(item)"
            ></li>
          </ul>
        </section>
      </div>
      <ul v-else>
        <li
          v-for="item in project.roleDetails"
          :key="item"
          v-html="highlightPortfolioText(item)"
        ></li>
      </ul>
    </article>

    <article class="detail-section">
      <h2>Problem</h2>
      <ul>
        <li
          v-for="item in project.problem"
          :key="item"
          v-html="highlightPortfolioText(item)"
        ></li>
      </ul>
    </article>

    <article v-if="project.decisionStories?.length" class="detail-section">
      <h2>Decision Stories</h2>
      <div class="decision-story-list">
        <section
          v-for="(story, storyIndex) in project.decisionStories"
          :key="story.title"
          class="decision-story"
        >
          <h3>{{ story.title }}</h3>
          <dl class="pdr-list">
            <div>
              <dt>Problem</dt>
              <dd v-html="highlightPortfolioText(story.problem)"></dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd v-html="highlightPortfolioText(story.decision)"></dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd v-html="highlightPortfolioText(story.result)"></dd>
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
          <div v-if="snippetForStory(story, storyIndex)" class="story-code-block">
            <p>관련 코드</p>
            <div class="code-chip-list story-code-chip-list">
              <button
                class="code-chip"
                type="button"
                :aria-label="`${snippetForStory(story, storyIndex)?.title} 코드 확인하기`"
                @click="openSnippet(snippetForStory(story, storyIndex))"
              >
                <strong>코드 확인하기</strong>
              </button>
            </div>
          </div>
        </section>
      </div>
    </article>

    <article v-if="project.relatedWriting" class="detail-section related-writing-section">
      <h2>Related Writing</h2>
      <h3>{{ project.relatedWriting.title }}</h3>
      <p v-html="highlightPortfolioText(project.relatedWriting.description)"></p>
      <div class="section-link-list">
        <a
          :href="project.relatedWriting.link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ project.relatedWriting.link.label }}
        </a>
      </div>
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
        <li
          v-for="item in section.items"
          :key="item"
          v-html="highlightPortfolioText(item)"
        ></li>
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

  <CodeSnippetModal
    v-if="activeSnippet"
    :snippet="activeSnippet"
    @close="closeSnippet"
  />
</template>
