<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import HomeHeroSection from '../components/HomeHeroSection.vue';
import TechStackSection from '../components/TechStackSection.vue';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import CredentialSection from '../components/CredentialSection.vue';
import CredentialModal from '../components/CredentialModal.vue';
import type { Credential } from '../types/portfolio';
import { useActiveItem } from '../composables/useActiveItem';
import { publicAsset } from '../data/assets';
import { contactLinks } from '../data/contact';
import { experiences } from '../data/experience';
import { featuredProjects, secondaryProjects } from '../data/projects';
import { stackGroups } from '../data/techStack';

const credentials: Credential[] = [
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
  <HomeHeroSection
    :profile-image="profileImage"
    :github="github"
    :email="email"
    :blog="blog"
  />

  <TechStackSection :stack-groups="stackGroups" />

  <ProjectShowcaseSection
    :featured-projects="featuredProjects"
    :secondary-projects="secondaryProjects"
  />

  <ExperienceSection :experiences="experiences" :blog="blog" />

  <CredentialSection
    :credentials="credentials"
    @select-credential="openCredential"
  />

  <CredentialModal
    v-if="activeCredential"
    :credential="activeCredential"
    @close="closeCredential"
  />
</template>
