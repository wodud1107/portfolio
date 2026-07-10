<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import HomeHeroSection from '../components/HomeHeroSection.vue';
import TechStackSection from '../components/TechStackSection.vue';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import CredentialSection from '../components/CredentialSection.vue';
import CredentialModal from '../components/CredentialModal.vue';
import OpenSourceContributionSection from '../components/OpenSourceContributionSection.vue';
import { profileImage } from '../data/profile';
import { useActiveItem } from '../composables/useActiveItem';
import { experiences } from '../data/experience';
import { credentials } from '../data/credentials';
import { findContact } from '../data/contact';
import type { Credential } from '../types/portfolio';
import { featuredProjects, secondaryProjects } from '../data/projects';
import { stackGroups } from '../data/techStack';
import { openSourceContributions } from '../data/openSourceContributions';

const email = findContact('Email')
const github = findContact('GitHub')
const blog = findContact('Blog');
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

  <OpenSourceContributionSection :contributions="openSourceContributions" />

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
