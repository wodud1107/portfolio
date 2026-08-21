import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import PrintPage from './pages/PrintPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 84 };
    }

    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage },
    { path: '/print', name: 'print', component: PrintPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
  ],
});

export default router;
