<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { contactLinks } from "../data/contact";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import type {
  Project,
  ProjectCodeSnippet,
  ProjectDecisionStory,
  ProjectScreenshot,
} from "../data/projects";
import { stackGroups } from "../data/techStack";

interface PrintSection {
  title: string;
  project?: Project;
  storyTitles?: string[];
  diagram?: {
    title: string;
    src: string;
    alt: string;
    caption?: string;
  };
  includeOverview?: boolean;
  includeRole?: boolean;
  includeProblem?: boolean;
  includeProductImages?: boolean;
  includePerformanceImages?: boolean;
  includeLinks?: boolean;
  includeCode?: boolean;
  codeIntro?: string;
  includeReliabilitySummary?: boolean;
  summaryProjects?: Project[];
}

const route = useRoute();
const variant = computed(() =>
  route.params.variant === "general" ? "general" : "ios",
);

const contactOrder = ["GitHub", "Email", "Blog"];
const contacts = contactOrder
  .map((label) =>
    contactLinks.find((link) => link.label === label && link.href),
  )
  .filter((link): link is NonNullable<typeof link> => Boolean(link));

const printIntroParagraphs = [
  "출시된 iOS 앱에서 사용자가 체감하는 지연, 끊김, 크래시를 줄이는 데 집중해온 개발자입니다. Damago 팀 프로젝트에서 Local-First 상태 동기화, 렌더링 병목 분석, Live Activity 연동, 출시 후 크래시 대응을 경험했습니다.",
  "성능 수치만이 아니라 상태 동기화 리스크, 협업 비용, 유지보수성을 함께 고려해 오래 가져갈 수 있는 구조를 선택하려고 합니다. 문제 상황과 선택 근거를 PR과 문서로 남기며, 팀이 같은 맥락에서 개선을 이어갈 수 있도록 만드는 개발 방식을 지향합니다.",
];

const printStrengths = [
  {
    title: "상태 동기화 설계",
    description:
      "SwiftData 로컬 캐시, 서버 API 응답, AsyncStream으로 연결해 끊김 없는 화면 상태 흐름을 구현했습니다.",
  },
  {
    title: "성능 측정 기반 개선",
    description:
      "Instruments로 Core Animation Commit과 GPU Hitch를 측정하고 수치와 유지보수성을 함께 비교했습니다.",
  },
  {
    title: "출시 후 안정성 대응",
    description:
      "App Store 출시 이후 크래시와 FCM 전송 실패 가능성을 PR 단위로 분석하고 운영 관점에서 보완했습니다.",
  },
];

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

const damago = projectBySlug("damago");
const puzzole = projectBySlug("puzzole-puzzlekit");
const csFlashCards = projectBySlug("cs-flashcards");
const wwdcTranslator = projectBySlug("wwdc-translator");
const gpioRsp = projectBySlug("gpio-rsp");

const coreMessage = computed(() =>
  variant.value === "ios"
    ? "출시된 iOS 앱에서 사용자 체감 문제를 성능, 상태 동기화, 운영 안정성 관점으로 개선한 개발자"
    : "앱 개발을 중심으로 제품 문제를 구조화하고, 클라이언트·서버·시스템 영역까지 확장해본 개발자",
);

const damagoPerformanceRows = [
  { label: "개선 전", commits: "3,175", hitch: "10", status: "기준" },
  { label: "CAAnimation 실험안", commits: "166", hitch: "1", status: "미적용" },
  { label: "최종 적용안", commits: "2,411", hitch: "7", status: "적용" },
];

const damagoReliabilityRows = [
  {
    area: "알림 유실",
    decision: "Cloud Tasks 큐 기반 10초, 60초, 300초 재시도",
    result: "일시적 네트워크 실패가 곧바로 기능 실패로 이어지지 않도록 완충",
  },
  {
    area: "Release 크래시",
    decision: "설정 탭 진입 크래시와 enum 불일치를 PR 단위로 분리 대응",
    result: "운영 환경에서 재현되는 비동기 생명주기 문제의 원인을 좁힘",
  },
  {
    area: "UI 안정성",
    decision: "@MainActor 경계 안으로 UI 상태 변경을 모음",
    result: "서버 응답, 도메인 에러, 화면 상태 사이의 책임을 분리",
  },
];

const printSections = computed<PrintSection[]>(() => {
  if (!damago || !puzzole || !csFlashCards || !wwdcTranslator || !gpioRsp)
    return [];

  if (variant.value === "general") {
    return [
      {
        title: "Damago - 실서비스 출시·운영",
        project: damago,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        includeLinks: true,
      },
      {
        title: "Damago - 성능 개선 / 안정성",
        project: damago,
        storyTitles: [
          "렌더링 병목 개선",
          "FCM 유실 대응 재시도 구조",
          "출시 후 크래시 대응",
        ],
        includePerformanceImages: true,
      },
      {
        title: "Puzzole - 도메인 모델링 / 검증 로직",
        project: puzzole,
        includeOverview: true,
        includeRole: true,
        storyTitles: [
          "자유 드로잉이 아닌 Cell-Based Puzzle Painting",
          "Generator-First 스테이지 설계",
          "Display Color와 Semantic Color 분리",
        ],
        includeCode: true,
      },
      {
        title: "CS FlashCards - Vapor / REST API / DB Migration",
        project: csFlashCards,
        includeOverview: true,
        includeRole: true,
        storyTitles: [
          "iOS 단독 앱이 아닌 API 기반 학습 제품",
          "CSV 데이터 Import와 Migration 분리",
        ],
        includeProductImages: true,
        includeLinks: true,
      },
      {
        title: "GPIO RSP - GPIO / 시스템 프로그래밍",
        project: gpioRsp,
        includeOverview: true,
        includeRole: true,
        storyTitles: ["GPIO 핀 방향 분리", "드라이버/API/앱 계층 분리"],
        includeLinks: true,
      },
      {
        title: "WWDC Translator - 빠른 MVP 검증",
        project: wwdcTranslator,
        includeOverview: true,
        storyTitles: ["Transcript 추출과 영상 싱크 연결"],
        includeProductImages: true,
        includeLinks: true,
      },
    ];
  }

  return [
    {
      title: "Damago Overview",
      project: damago,
      includeOverview: true,
      includeRole: true,
      includeProductImages: true,
      includeLinks: true,
    },
    {
      title: "Damago - Local-First / AsyncStream",
      project: damago,
      storyTitles: ["Local-First 상태 동기화"],
      diagram: {
        title: "Local-First Pipeline",
        src: "/assets/damago/Local First 파이프라인.png",
        alt: "Damago Local-First 상태 동기화 파이프라인",
      },
    },
    {
      title: "Damago - 렌더링 최적화",
      project: damago,
      storyTitles: ["렌더링 병목 개선"],
      includePerformanceImages: true,
    },
    {
      title: "Damago - FCM 재시도 / 크래시 대응",
      project: damago,
      storyTitles: ["FCM 유실 대응 재시도 구조", "출시 후 크래시 대응"],
      includeReliabilitySummary: true,
    },
    {
      title: "Puzzole Overview",
      project: puzzole,
      includeOverview: true,
      includeRole: true,
      includeProductImages: true,
    },
    {
      title: "Puzzole - Generator / Validator",
      project: puzzole,
      storyTitles: [
        "Generator-First 스테이지 설계",
        "자유 드로잉이 아닌 Cell-Based Puzzle Painting",
      ],
      includeCode: true,
      codeIntro:
        "저장소 전체 공개 대신, 퍼즐 엔진의 핵심 판단 로직인 진행 검증, 스테이지 생성, 색상 의미 충돌 검증 코드 일부를 발췌했습니다.",
    },
    {
      title: "Puzzole - Semantic Color / 검증 요약",
      project: puzzole,
      storyTitles: ["Display Color와 Semantic Color 분리"],
      includeCode: true,
    },
    {
      title: "Other Projects",
      summaryProjects: [csFlashCards, wwdcTranslator, gpioRsp],
    },
  ];
});

function printPortfolio() {
  window.print();
}

function screenshotsFor(project: Project, group?: ProjectScreenshot["group"]) {
  return (
    project.screenshots?.filter((screenshot) => screenshot.group === group) ??
    []
  );
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

function printRoleItems(items: string[]) {
  return items.slice(0, 2);
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

function storySnippets(project: Project, story: ProjectDecisionStory) {
  return (
    story.snippetIndexes
      ?.map((index) => project.codeSnippets?.[index])
      .filter((snippet): snippet is NonNullable<typeof snippet> =>
        Boolean(snippet),
      ) ?? []
  );
}

function printStorySnippets(project: Project, story: ProjectDecisionStory) {
  return storySnippets(project, story);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

function printSnippetCode(snippet: ProjectCodeSnippet) {
  return snippet.printCode ?? snippet.code;
}

function highlightedSwiftLines(code: string) {
  return code.split("\n").map((line, index) => ({
    index,
    html: highlightSwift(line),
    core: isCoreSwiftLine(line),
  }));
}
</script>

<template>
  <section class="print-page">
    <div class="print-toolbar no-print">
      <RouterLink class="text-link" to="/">← 홈으로 돌아가기</RouterLink>
      <button class="button primary" type="button" @click="printPortfolio">
        PDF로 저장 / 인쇄
      </button>
    </div>

    <header class="print-hero avoid-break">
      <figure class="print-profile">
        <img src="/assets/profile.jpeg" alt="김재영 프로필 사진" />
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

    <section class="print-intro-section avoid-break">
      <h2>About Me</h2>
      <p v-for="paragraph in printIntroParagraphs" :key="paragraph">
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

    <section class="print-strength-section">
      <h2>Core Strengths</h2>
      <ul class="print-strength-list">
        <li v-for="strength in printStrengths" :key="strength.title">
          <strong>{{ strength.title }}</strong>
          {{ strength.description }}
        </li>
      </ul>
    </section>

    <article
      v-for="section in printSections"
      :key="section.title"
      class="print-project page-break"
    >
      <header class="print-project-header avoid-break">
        <p v-if="section.project" class="eyebrow">
          {{ section.project.status }} · {{ section.project.period }}
        </p>
        <h2>{{ section.title }}</h2>
        <p
          v-if="section.includeOverview && section.project?.featuredSummary"
          class="print-featured-summary"
        >
          {{ section.project.featuredSummary }}
        </p>
        <p v-else-if="section.project">{{ section.project.summary }}</p>
      </header>

      <section
        v-if="section.project && section.includeOverview"
        class="print-section avoid-break"
      >
        <h3>Overview</h3>
        <ul>
          <li v-for="item in section.project.overview" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section
        v-if="section.project && section.includeRole"
        class="print-section avoid-break"
      >
        <h3>My Role</h3>
        <div
          v-if="section.project.roleBreakdown?.length"
          class="print-role-breakdown"
        >
          <article
            v-for="group in section.project.roleBreakdown"
            :key="group.title"
          >
            <h4>{{ group.title }}</h4>
            <ul>
              <li v-for="item in printRoleItems(group.items)" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
        <ul v-else>
          <li v-for="item in section.project.roleDetails" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-if="section.summaryProjects?.length" class="print-section">
        <div class="print-summary-grid">
          <article
            v-for="project in section.summaryProjects"
            :key="project.slug"
            class="print-summary-card"
          >
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
            <ul>
              <li v-for="item in project.overview.slice(0, 2)" :key="item">
                {{ item }}
              </li>
            </ul>
            <div class="print-link-list" v-if="project.links.length">
              <a
                v-for="link in project.links"
                :key="link.href"
                :href="link.href"
                >{{ link.label }}</a
              >
            </div>
          </article>
        </div>
      </section>

      <section
        v-if="section.project && storiesFor(section).length"
        class="print-section"
      >
        <h3>Decision Stories</h3>
        <p v-if="section.codeIntro" class="print-code-intro">
          {{ section.codeIntro }}
        </p>
        <article
          v-for="story in storiesFor(section)"
          :key="story.title"
          class="print-story"
        >
          <h4>{{ story.title }}</h4>
          <dl class="print-pdr-list">
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
          <div v-if="story.links?.length" class="print-link-list">
            <a v-for="link in story.links" :key="link.href" :href="link.href">{{
              link.label
            }}</a>
          </div>
          <div
            v-if="
              section.includeCode &&
              printStorySnippets(section.project, story).length
            "
            class="print-code-list"
          >
            <article
              v-for="snippet in printStorySnippets(section.project, story)"
              :key="snippet.title"
              class="print-code-block"
            >
              <h5>{{ snippet.title }}</h5>
              <p>{{ snippet.description }}</p>
              <pre class="print-swift-code"><code>
                <span
                  v-for="line in highlightedSwiftLines(printSnippetCode(snippet))"
                  :key="line.index"
                  class="swift-code-line"
                  :class="{ 'core-line': line.core }"
                ><span class="line-number">{{ line.index + 1 }}</span><span class="line-content" v-html="line.html || ' '"></span></span>
              </code></pre>
            </article>
          </div>
        </article>
      </section>

      <section v-if="section.includeReliabilitySummary" class="print-section">
        <h3>Operational Reliability Summary</h3>
        <table class="print-performance-table print-reliability-table">
          <thead>
            <tr>
              <th>영역</th>
              <th>대응 결정</th>
              <th>효과</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in damagoReliabilityRows" :key="row.area">
              <th>{{ row.area }}</th>
              <td>{{ row.decision }}</td>
              <td>{{ row.result }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        v-if="section.diagram"
        class="print-section print-diagram-section"
      >
        <h3>{{ section.diagram.title }}</h3>
        <figure class="print-diagram-card">
          <img :src="section.diagram.src" :alt="section.diagram.alt" />
          <figcaption v-if="section.diagram.caption">
            {{ section.diagram.caption }}
          </figcaption>
        </figure>
      </section>

      <section
        v-if="
          section.project &&
          section.includeProductImages &&
          screenshotsFor(section.project, 'product').length
        "
        class="print-section"
      >
        <h3>Screenshots</h3>
        <div
          class="print-image-grid"
          :class="{
            'print-phone-grid': section.project.slug === 'damago',
            'print-puzzole-grid': section.project.slug === 'puzzole-puzzlekit',
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
        v-if="
          section.project &&
          section.includePerformanceImages &&
          screenshotsFor(section.project, 'performance').length
        "
        class="print-section"
      >
        <h3>Performance Evidence</h3>
        <table
          v-if="section.project.slug === 'damago'"
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
          section.project &&
          section.includeLinks &&
          section.project.links.length
        "
        class="print-section avoid-break"
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

    <section class="print-section page-break">
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
