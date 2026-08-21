<script setup lang="ts">
import { publicAsset } from "../data/assets";
import { contactLinks } from "../data/contact";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import type {
  Project,
  ProjectDecisionStory,
  ProjectScreenshot,
} from "../data/projects";
import { stackGroups } from "../data/techStack";
import { openSourceContributions } from "../data/openSourceContributions";
import { highlightPortfolioText } from "../utils/highlightText";

interface PrintSection {
  title: string;
  project: Project;
  storyTitles?: string[];
  includeOverview?: boolean;
  includeRole?: boolean;
  includeProductImages?: boolean;
  includePerformanceImages?: boolean;
  includeLinks?: boolean;
  summary?: string;
}

interface PrintCopy {
  introParagraphs: string[];
  strengths: {
    title: string;
    description: string;
  }[];
}

const contactOrder = ["GitHub", "Email", "Blog"];
const contacts = contactOrder
  .map((label) =>
    contactLinks.find((link) => link.label === label && link.href),
  )
  .filter((link): link is NonNullable<typeof link> => Boolean(link));

const profileImage = publicAsset("assets/profile.jpeg");

const currentPrintCopy: PrintCopy = {
  introParagraphs: [
    "앱 개발을 출발점으로 사용자 흐름, 데이터 흐름, 배포 환경을 함께 보며 제품 문제를 좁혀가는 개발자입니다. Damago의 iOS 출시 및 운영, Puzzole의 제품 설계·안드로이드 출시, Tikkle의 풀스택 협업을 통해 기술 경계를 제품 흐름에 맞춰 설계해왔습니다.",
    "빠르게 만드는 것과 오래 가져가는 것 사이의 균형을 중요하게 봅니다. MVP에서는 먼저 닫아야 할 흐름과 이후로 미룰 확장 범위를 구분하고, 문제 해결 과정이 드러나는 기록을 남기고 팀과 함께 성장할 수 있는 구조를 설계합니다.",
  ],
  strengths: [
    {
      title: "제품 문제 구조화",
      description:
        "사용자 흐름, 운영 리스크, 구현 비용을 함께 보고 현재 단계에서 먼저 풀 문제와 나중에 확장할 문제를 분리했습니다.",
    },
    {
      title: "제품 흐름 설계",
      description:
        "정답 유일성 검증, 힌트·완료 판정, 로컬 진행 저장처럼 제품 신뢰성을 만드는 기준을 먼저 정리했습니다.",
    },
    {
      title: "플랫폼·배포 경계 확장",
      description:
        "Puzzole의 핵심 규칙과 스테이지 데이터를 Android까지 확장하고 Google Play 배포 흐름을 경험했습니다.",
    },
  ],
};

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

const damago = projectBySlug("damago");
const puzzole = projectBySlug("puzzole");
const tikkle = projectBySlug("tikkle");

const coreMessage = "앱 개발을 출발점으로 제품 흐름과 기술 경계를 함께 구조화해온 개발자";

const damagoPerformanceRows = [
  { label: "개선 전", commits: "3,175", hitch: "10", status: "기준" },
  { label: "CAAnimation 실험안", commits: "166", hitch: "1", status: "미적용" },
  { label: "최종 적용안", commits: "2,411", hitch: "7", status: "적용" },
];

const printSections: PrintSection[] =
  damago && puzzole && tikkle
    ? [
        {
          title: "Damago - 실서비스 iOS 앱",
          project: damago,
          includeOverview: true,
          includeRole: true,
          storyTitles: [
            "반복 조회를 위한 Local-First 상태 동기화",
            "Live Activity의 원격 상태 흐름",
            "측정값과 유지보수성 사이의 렌더링 선택",
          ],
          includeProductImages: true,
          includePerformanceImages: true,
          includeLinks: true,
        },
        {
          title: "Puzzole - 출시 퍼즐 제품",
          project: puzzole,
          summary:
            "정답 유일성이 검증된 퍼즐 규칙과 진행 흐름을 구현하고, Android 버전을 Google Play에 출시했습니다.",
          includeOverview: true,
          includeRole: true,
          includeProductImages: true,
          storyTitles: [
            "정답이 하나인 스테이지 카탈로그",
            "v1 범위와 보드 입력 경계",
            "전면 포팅 대신 Android Vertical Slice",
          ],
          includeLinks: true,
        },
        {
          title: "Tikkle - 진행 중인 풀스택 협업 프로젝트",
          project: tikkle,
          includeOverview: true,
          includeRole: true,
          storyTitles: [
            "필터 상태를 URL의 계약으로 관리",
            "토큰 재발급과 로그아웃의 인증 경계",
            "콘서트 도메인을 조회 API로 연결",
          ],
          includeLinks: true,
        },
      ]
    : [];

function printPortfolio() {
  window.print();
}

function screenshotsFor(project: Project, group?: ProjectScreenshot['group']) {
  return project.screenshots?.filter((screenshot) => screenshot.group === group) ?? [];
}

function performanceScreenshotsForPrint(project: Project) {
  const screenshots = screenshotsFor(project, "performance");
  if (project.slug !== "damago") return screenshots;

  return screenshots.filter((screenshot) =>
    [
      "Damago 렌더링 성능 개선 전 Instruments 화면",
      "Damago 선언형 UI 최종안 Instruments 화면",
    ].includes(screenshot.alt),
  );
}

function overviewItemsForPrint(project: Project) {
  if (project.slug === "puzzole") {
    return [
      "셀을 칠해 반복 도형 해답을 완성하는 출시 퍼즐 제품입니다.",
      "정답 유일성 검증, 힌트·완료 판정, 로컬 진행 저장을 공통 규칙으로 두고 Android 버전을 Google Play에 출시했습니다.",
    ];
  }

  return project.overview;
}

function roleItemsForPrint(project: Project) {
  return project.roleDetails;
}

function roleSectionTitle(project: Project) {
  return project.slug === "puzzole" ? "Implementation Scope" : "My Role";
}

function storiesFor(section: PrintSection) {
  if (!section.project?.decisionStories) return [];
  if (!section.storyTitles?.length) return [];
  return section.storyTitles
    .map((title) =>
      section.project?.decisionStories?.find((story) => story.title === title),
    )
    .filter((story): story is ProjectDecisionStory => Boolean(story));
}

function projectStatusLabel(project: Project) {
  return project.status;
}
</script>

<template>
  <section class="print-page">
    <div class="print-toolbar">
      <RouterLink class="print-text-link" to="/">← 홈으로 돌아가기</RouterLink>
      <button class="print-button" type="button" @click="printPortfolio">
        PDF로 저장 / 인쇄
      </button>
    </div>

    <header class="print-hero print-avoid-break">
      <figure class="print-profile">
        <img :src="profileImage" alt="김재영 프로필 사진" />
      </figure>
      <div class="print-hero-body">
        <div>
          <h1>김재영 / Jaeyoung Kim</h1>
          <p class="print-core-message">{{ coreMessage }}</p>
        </div>
        <ul class="print-contact-list" aria-label="연락처 및 주요 링크">
          <li v-for="contact in contacts" :key="contact.label">
            <span>{{ contact.label }}</span>
            <a :href="contact.href">{{ contact.value }}</a>
          </li>
        </ul>
      </div>
    </header>

    <section class="print-intro-section print-avoid-break">
      <h2>About Me</h2>
      <p v-for="paragraph in currentPrintCopy.introParagraphs" :key="paragraph">
        {{ paragraph }}
      </p>
    </section>

    <section class="print-section print-stack-section">
      <h2>Tech Stack</h2>
      <div class="print-stack-grid">
        <article
          v-for="group in stackGroups"
          :key="group.title"
          class="print-stack-group"
        >
          <h3>{{ group.title }}</h3>
          <div class="print-stack-list">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="print-open-source-section print-avoid-break">
      <article
        v-for="contribution in openSourceContributions"
        :key="contribution.href"
        class="print-open-source-card"
      >
        <div>
          <p class="print-eyebrow">
            Open Source Contribution · {{ contribution.project }} · {{ contribution.status }}
          </p>
          <div class="print-open-source-title-row">
            <h3>{{ contribution.title }}</h3>
            <a :href="contribution.href">원본 PR ↗</a>
            <a v-if="contribution.mergeHref" :href="contribution.mergeHref">병합 PR ↗</a>
          </div>
          <p>{{ contribution.printSummary }}</p>
        </div>
      </article>
    </section>

    <section class="print-strength-section">
      <h2>Core Strengths</h2>
      <ul class="print-strength-list">
        <li v-for="strength in currentPrintCopy.strengths" :key="strength.title">
          <strong>{{ strength.title }}</strong>
          {{ strength.description }}
        </li>
      </ul>
    </section>

    <article
      v-for="section in printSections"
      :key="section.title"
      class="print-project print-page-break"
      :data-project="section.project.slug"
    >
      <header class="print-project-header print-avoid-break">
        <p class="print-eyebrow">
          {{ projectStatusLabel(section.project) }} · {{ section.project.period }}
        </p>
        <h2>{{ section.title }}</h2>
        <p
          v-if="section.summary"
          class="print-featured-summary"
          v-html="highlightPortfolioText(section.summary)"
        ></p>
        <p
          v-else-if="section.project.featuredSummary"
          class="print-featured-summary"
          v-html="highlightPortfolioText(section.project.featuredSummary)"
        ></p>
        <p
          v-html="highlightPortfolioText(section.project.summary)"
        ></p>
      </header>

      <section
        v-if="
          section.includeProductImages &&
          screenshotsFor(section.project, 'product').length
        "
        class="print-section print-screenshot-section"
      >
        <h3>Screenshots</h3>
        <div
          class="print-image-grid"
          :class="{
            'print-phone-grid': section.project.slug === 'damago',
            'print-puzzole-grid': section.project.slug === 'puzzole',
          }"
        >
          <figure
            v-for="screenshot in screenshotsFor(section.project, 'product')"
            :key="screenshot.src"
            class="print-media-card"
          >
            <img :src="screenshot.src" :alt="screenshot.alt" />
            <figcaption>{{ screenshot.caption }}</figcaption>
          </figure>
        </div>
      </section>

      <section
        v-if="section.includeOverview"
        class="print-section print-avoid-break"
      >
        <h3>Overview</h3>
        <ul>
          <li
            v-for="item in overviewItemsForPrint(section.project)"
            :key="item"
            v-html="highlightPortfolioText(item)"
          ></li>
        </ul>
      </section>

      <section
        v-if="section.includeRole"
        class="print-section"
      >
        <h3>{{ roleSectionTitle(section.project) }}</h3>
        <ul>
          <li
            v-for="item in roleItemsForPrint(section.project)"
            :key="item"
            v-html="highlightPortfolioText(item)"
          ></li>
        </ul>
        <table
          v-if="section.includePerformanceImages && section.project.slug === 'damago'"
          class="print-performance-table"
        >
          <thead>
            <tr>
              <th>구분</th>
              <th>Core Animation Commits</th>
              <th>GPU Hitch</th>
              <th>적용 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in damagoPerformanceRows" :key="row.label">
              <th>{{ row.label }}</th>
              <td>{{ row.commits }}</td>
              <td>{{ row.hitch }}</td>
              <td>{{ row.status }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        v-if="storiesFor(section).length"
        class="print-section"
      >
        <h3>Decision Stories</h3>
        <article
          v-for="story in storiesFor(section)"
          :key="story.title"
          class="print-story"
        >
          <h4>{{ story.title }}</h4>
          <dl class="print-pdr-list">
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
            <div v-if="story.collaborationNote" class="print-collaboration-note-row">
              <dt>Collaboration Note</dt>
              <dd v-html="highlightPortfolioText(story.collaborationNote)"></dd>
            </div>
          </dl>
          <div v-if="story.links?.length" class="print-link-list">
            <a v-for="link in story.links" :key="link.href" :href="link.href">{{
              link.label
            }}</a>
          </div>
        </article>
      </section>

      <section
        v-if="
          section.includePerformanceImages &&
          performanceScreenshotsForPrint(section.project).length
        "
        class="print-section"
      >
        <h3>Performance Evidence</h3>
        <div class="print-image-grid print-performance-grid">
          <figure
            v-for="screenshot in performanceScreenshotsForPrint(
              section.project,
            )"
            :key="screenshot.src"
            class="print-media-card"
          >
            <img :src="screenshot.src" :alt="screenshot.alt" />
            <figcaption>
              <strong>{{ screenshot.caption }}</strong>
              <ul v-if="screenshot.notes?.length">
                <li v-for="note in screenshot.notes" :key="note">{{ note }}</li>
              </ul>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        v-if="
          section.includeLinks &&
          section.project.links.length
        "
        class="print-section print-avoid-break"
      >
        <h3>Links</h3>
        <div class="print-link-list">
          <a
            v-for="link in section.project.links"
            :key="link.href"
            :href="link.href"
            >{{ link.label }}</a
          >
        </div>
      </section>
    </article>

    <section class="print-section print-page-break">
      <h2>Experience</h2>
      <div class="print-timeline">
        <article
          v-for="item in experiences"
          :key="item.title"
          class="print-timeline-item"
        >
          <p>{{ item.period }}</p>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul>
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
