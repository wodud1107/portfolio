<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import CredentialModal from '../components/CredentialModal.vue';
import { useActiveItem } from '../composables/useActiveItem';
import ProjectCard from '../components/ProjectCard.vue';
import { publicAsset } from '../data/assets';
import { contactLinks } from '../data/contact';
import { experiences } from '../data/experience';
import { featuredProjects, secondaryProjects } from '../data/projects';
import { stackGroups } from '../data/techStack';

const credentials = [
  {
    title: 'Naver Boostcamp Web·Mobile 10기 iOS 과정',
    type: '수료증',
    image: publicAsset('assets/experience/previews/boostcamp.jpg'),
  },
  {
    title: 'SQLD',
    type: '자격증',
    image: publicAsset('assets/experience/previews/sqld.jpg'),
  },
];

type Credential = (typeof credentials)[number];

const email = contactLinks.find((link) => link.label === 'Email');
const github = contactLinks.find((link) => link.label === 'GitHub');
const blog = contactLinks.find((link) => link.label === 'Blog');
const profileImage = publicAsset('assets/profile.jpeg');
const {
  activeItem: activeCredential,
  openItem: openCredential,
  closeItem: closeCredential,
} = useActiveItem<Credential>();

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeCredential();
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <section id="home" class="hero">
    <figure class="hero-profile">
      <img :src="profileImage" alt="김재영 프로필 사진" />
    </figure>
    <div class="hero-content">
      <p class="eyebrow">iOS Developer / Client Engineer</p>
      <h1>김재영 / Jaeyoung Kim</h1>
      <p class="hero-lead">
        실서비스 iOS 앱 출시·운영 경험을 바탕으로, 성능·안정성·사용자 경험을 함께 개선하는
        클라이언트 개발자입니다.
      </p>
      <ul class="hero-contact-list" aria-label="연락처 및 주요 링크">
        <li v-if="github?.href">
          <span>GitHub</span>
          <a :href="github.href" target="_blank" rel="noreferrer">{{ github.value }}</a>
        </li>
        <li v-if="email?.href">
          <span>Email</span>
          <a :href="email.href">{{ email.value }}</a>
        </li>
        <li v-if="blog?.href">
          <span>Blog</span>
          <a :href="blog.href" target="_blank" rel="noreferrer">{{ blog.value }}</a>
        </li>
      </ul>
    </div>
  </section>

  <section id="tech" class="section">
    <div class="section-heading compact-heading">
      <p class="eyebrow">Tech Stack</p>
      <h2>프로젝트에서 사용한 기술</h2>
    </div>
    <div class="stack-grid">
      <article v-for="group in stackGroups" :key="group.title" class="stack-group">
        <h3>{{ group.title }}</h3>
        <div class="stack-list">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>

  <section id="projects" class="section">
    <div class="section-heading inline-heading">
      <div>
        <p class="eyebrow">Selected Projects</p>
        <h2>대표 프로젝트</h2>
      </div>
      <RouterLink class="text-link" to="/projects">전체 프로젝트 보기</RouterLink>
    </div>
    <div class="project-grid two-column">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </section>

  <section class="section compact-section">
    <div class="section-heading">
      <p class="eyebrow">Additional Projects</p>
      <h2>다른 프로젝트</h2>
    </div>
    <div class="project-grid">
      <ProjectCard
        v-for="project in secondaryProjects"
        :key="project.slug"
        :project="project"
        compact
      />
    </div>
  </section>

  <section id="experience" class="section">
    <div class="section-heading inline-heading">
      <div>
        <p class="eyebrow">Experience</p>
        <h2>경험과 활동</h2>
      </div>
      <a v-if="blog?.href" class="text-link" :href="blog.href" target="_blank" rel="noreferrer">
        블로그 보기
      </a>
    </div>

    <div class="timeline">
      <article v-for="item in experiences" :key="item.title" class="timeline-item">
        <p class="timeline-period">{{ item.period }}</p>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
          <div class="tag-row">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>

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
        @click="openCredential(credential)"
      >
        <img :src="credential.image" :alt="`${credential.title} 미리보기`" loading="lazy" />
        <span>{{ credential.type }}</span>
        <strong>{{ credential.title }}</strong>
      </button>
    </div>
  </section>

  <CredentialModal
    v-if="activeCredential"
    :credential="activeCredential"
    @close="closeCredential"
  />
</template>
