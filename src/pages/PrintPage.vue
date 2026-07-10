<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { publicAsset } from "../data/assets";
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
import { openSourceContributions } from "../data/openSourceContributions";
import { highlightPortfolioText } from "../utils/highlightText";
import {
  getRoleSectionTitle,
  getScreenshotsByGroup,
  getStorySnippets,
} from '../utils/projectDisplay';

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
  printSummary?: string;
  codeIntro?: string;
  includeReliabilitySummary?: boolean;
  summaryProjects?: Project[];
}

interface PrintCopy {
  introParagraphs: string[];
  strengths: {
    title: string;
    description: string;
  }[];
}

type PrintVariant = "ios" | "general" | "android";

const route = useRoute();
const variant = computed<PrintVariant>(() => {
  if (route.params.variant === "general") return "general";
  if (route.params.variant === "android") return "android";
  return "ios";
});

const contactOrder = ["GitHub", "Email", "Blog"];
const contacts = contactOrder
  .map((label) =>
    contactLinks.find((link) => link.label === label && link.href),
  )
  .filter((link): link is NonNullable<typeof link> => Boolean(link));

const profileImage = publicAsset("assets/profile.jpeg");

const printCopies: Record<PrintVariant, PrintCopy> = {
  ios: {
    introParagraphs: [
      "iOS 앱에서 사용자가 직접 마주치는 상태 지연, 화면 끊김, 알림 신뢰성 문제를 줄이는 데 집중해온 개발자입니다. Damago에서는 출시 앱의 상태 동기화, 렌더링 성능, 운영 안정성을 다뤘고, Puzzole에서는 개인 프로젝트로 앱 흐름과 퍼즐 규칙, 입력 경계를 설계했습니다.",
      "좋은 구현은 좋은 문제 정의에서 시작한다고 생각합니다. 측정 가능한 근거와 유지보수 가능한 경계를 함께 보고, 선택한 이유가 다음 개발자에게도 이어지도록 PR과 문서에 의사결정 과정을 남기는 방식을 지향합니다.",
    ],
    strengths: [
      {
        title: "상태 동기화 설계",
        description:
          "SwiftData 로컬 캐시, 서버 API 응답, AsyncStream을 연결해 화면 진입 시 로컬 상태를 먼저 제공하는 흐름을 구현했습니다.",
      },
      {
        title: "성능 측정 기반 개선",
        description:
          "Instruments로 Core Animation Commit과 GPU Hitch를 측정하고, 성능 개선 폭과 유지보수성을 함께 비교했습니다.",
      },
      {
        title: "출시 후 안정성 대응",
        description:
          "App Store 출시 이후 크래시와 FCM 전송 실패 가능성을 PR 단위로 분석하고 운영 관점에서 보완했습니다.",
      },
    ],
  },
  general: {
    introParagraphs: [
      "앱 개발을 출발점으로 사용자 흐름, 데이터 흐름, 배포 환경을 함께 보며 제품 문제를 좁혀가는 개발자입니다. iOS 실서비스 경험을 기반으로 Android MVP 확장, Vapor API, DB migration, Vue SPA 배포까지 직접 연결해보며 기술 경계가 바뀔 때 책임을 어떻게 나눌지 고민해왔습니다.",
      "빠르게 만드는 것과 오래 가져가는 것 사이의 균형을 중요하게 봅니다. MVP에서는 먼저 닫아야 할 흐름과 이후로 미룰 확장 범위를 구분하고, 문제-선택-결과가 드러나는 기록을 남겨 다음 개선이 같은 맥락에서 이어질 수 있도록 합니다.",
    ],
    strengths: [
      {
        title: "제품 문제 구조화",
        description:
          "사용자 흐름, 운영 리스크, 구현 비용을 함께 보고 현재 단계에서 먼저 풀 문제와 나중에 확장할 문제를 분리했습니다.",
      },
      {
        title: "클라이언트·서버 연결",
        description:
          "iOS 앱뿐 아니라 Vapor REST API, DB migration, CSV import처럼 데이터가 제품 화면까지 이어지는 흐름을 직접 구성했습니다.",
      },
      {
        title: "플랫폼·배포 경계 확장",
        description:
          "iOS 제품 구조를 Android MVP로 확장하고, Vue SPA의 GitHub Pages 배포 구조를 정리하며 기술 환경이 달라질 때 책임을 나누는 방식을 검증했습니다.",
      },
    ],
  },
  android: {
    introParagraphs: [
      "iOS 앱 개발 경험을 바탕으로, 기존 제품의 핵심 규칙과 데이터를 Android 환경에서 다시 검증해본 개발자입니다. Puzzole Android MVP에서는 Kotlin과 Jetpack Compose로 작은 기능 흐름을 먼저 닫고, 이후 ViewModel/StateFlow, suspend Repository, Canvas 입력 구조를 단계적으로 보강했습니다.",
      "낯선 플랫폼을 빠르게 따라 하기보다, 기능을 작게 나누고 각 단계의 책임과 검증 기준을 먼저 세우는 방식을 선호합니다. 이번 Android 확장에서는 화면 구현보다 규칙, 데이터 로딩, 상태 관리, 입력 처리의 경계를 분리하는 데 집중했습니다.",
    ],
    strengths: [
      {
        title: "플랫폼 확장 설계",
        description:
          "iOS Puzzole의 핵심 규칙과 스테이지 데이터를 Kotlin/Compose 환경에서 다시 검증하며, 플랫폼별로 달라지는 책임과 유지할 수 있는 규칙을 나눴습니다.",
      },
      {
        title: "상태 관리와 데이터 로딩 경계",
        description:
          "ViewModel/StateFlow와 suspend Repository를 적용해 화면 상태와 데이터 로딩 책임을 분리했습니다.",
      },
      {
        title: "테스트 가능한 입력 구조",
        description:
          "Canvas 기반 보드 입력과 좌표 변환을 분리해, 화면 좌표가 퍼즐 칸으로 해석되는 과정을 JVM 테스트 가능한 구조로 정리했습니다.",
      },
    ],
  },
};

const currentPrintCopy = computed(() => printCopies[variant.value]);

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

const damago = projectBySlug("damago");
const puzzole = projectBySlug("puzzole");
const puzzoleAndroid = projectBySlug("puzzole-android");
const csFlashCards = projectBySlug("cs-flashcards");
const portfolio = projectBySlug("portfolio");
const wwdcTranslator = projectBySlug("wwdc-translator");

const coreMessage = computed(() =>
  variant.value === "ios"
    ? "출시 iOS 앱에서 상태 지연, 화면 끊김, 운영 불안정성을 개선해온 개발자"
    : variant.value === "android"
      ? "iOS 앱 설계 경험을 Android로 확장하며, Kotlin/Compose 기반 기능 흐름을 구조화해 검증한 개발자"
      : "앱 개발을 출발점으로 제품 흐름과 기술 경계를 함께 구조화해온 개발자",
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

const puzzolePrintOverview = [
  "Puzzole은 서버 없이도 1000개 스테이지를 로컬에서 제공하고, 스테이지 선택·플레이·힌트·진행 저장을 하나의 iOS 앱 흐름으로 연결한 개인 프로젝트입니다.",
  "출력물에서는 퍼즐 데이터 검증, 힌트 기준, 로컬 진행 저장, 큰 보드 조작 경험처럼 면접에서 설명할 핵심 결정만 요약합니다.",
];

const puzzolePrintRoleDetails = [
  "스테이지 생성 도구와 검증 로직으로 정답이 하나인 퍼즐 1000개를 만들고, 앱에서는 카탈로그 로딩부터 플레이·힌트·해금 저장까지 구현했습니다.",
  "SwiftUI 화면과 UIKit 보드 뷰의 역할을 나눠 한 손가락 칠하기, 두 손가락 이동/확대, 미니맵 탐색이 충돌하지 않도록 구성했습니다.",
  "광고·구매·진행 저장이 서로의 흐름을 흔들지 않도록 경계를 분리하고, 서버 확장은 v1 이후 계획으로 남겼습니다.",
];

const puzzoleAndroidPrintOverview = [
  "Puzzole Android MVP는 iOS Puzzole의 핵심 규칙과 스테이지 데이터를 Android 환경에서 다시 검증한 확장 프로젝트입니다.",
  "전면 포팅보다 load → play → validate → complete로 이어지는 작은 기능 흐름을 먼저 닫는 데 집중했습니다.",
  "출력물에서는 상태 관리, 비동기 데이터 로딩, 보드 입력 검증처럼 Android 지원에서 설명할 핵심 근거만 요약합니다.",
];

const puzzoleAndroidPrintRoleDetails = [
  "Kotlin/Compose 기반으로 규칙, 데이터 로딩, 플레이 상태, 화면의 책임을 나눴습니다.",
  "ViewModel/StateFlow와 suspend Repository로 화면 상태와 데이터 로딩의 경계를 정리했습니다.",
  "Canvas 기반 보드 입력과 좌표 변환을 분리해 테스트 가능한 구조를 확인했습니다.",
];

const puzzolePrintStoryCopy: Record<
  string,
  {
    title: string;
    problem: string;
    decision: string;
    result: string;
  }
> = {
  "정답이 하나인 스테이지 카탈로그": {
    title: "정답이 하나인 스테이지 카탈로그",
    problem:
      "힌트와 완료 판정이 신뢰되려면 같은 보드를 여러 방식으로 풀 수 있으면 안 됐습니다. 초기 샘플은 검증 시간이 길고 정답이 하나인 비율도 낮았습니다.",
    decision:
      "스테이지를 만든 뒤 별도 검증 단계에서 다른 풀이 가능성을 탐색하고, 통과한 스테이지 1000개만 앱 번들에 담았습니다.",
    result:
      "앱은 서버 없이도 검증된 스테이지를 빠르게 로드하고, 힌트와 완료 판정의 기준을 일관되게 유지할 수 있게 됐습니다.",
  },
  "힌트와 완료 판정 기준 통합": {
    title: "힌트와 완료 판정 기준 통합",
    problem:
      "플레이어가 어떤 방식으로든 비슷한 모양을 만들면 정답으로 인정하는 규칙은 힌트가 가리킬 기준을 흐리게 만들었습니다.",
    decision:
      "스테이지를 만들 때 정한 목표 배치를 완료 판정과 힌트의 공통 기준으로 삼고, 아직 칠하지 않은 셀만 힌트로 보여주도록 했습니다.",
    result:
      "색상 선택의 자유는 유지하면서도, 힌트와 완료 판정은 같은 기준으로 동작하게 됐습니다.",
  },
  "서버 없이 동작하는 v1": {
    title: "서버 없이 동작하는 v1",
    problem:
      "첫 버전에 서버 동기화와 계정을 넣으면 네트워크 실패, 개인정보 처리, 심사 리스크가 퍼즐 경험보다 먼저 커질 수 있었습니다.",
    decision:
      "v1은 앱에 포함된 스테이지와 로컬 진행 저장으로 완성하고, 스테이지 팩·진행 동기화·구매 검증은 후속 서버 확장으로 분리했습니다.",
    result:
      "오프라인에서도 플레이 가능한 MVP를 먼저 만들고, 출시 이후 필요한 범위만 서버로 확장할 수 있는 여지를 남겼습니다.",
  },
  "완료 저장과 광고/구매 경계 분리": {
    title: "완료 저장과 광고/구매 경계 분리",
    problem:
      "광고 로딩 실패나 구매 상태 확인이 스테이지 완료 저장과 섞이면, 퍼즐을 끝낸 경험 자체가 흔들릴 수 있었습니다.",
    decision:
      "스테이지 완료와 해금은 먼저 저장하고, 광고와 구매 상태는 별도 객체가 처리하도록 흐름을 나눴습니다.",
    result:
      "광고가 실패해도 완료 흐름은 유지되고, 수익화 기능이 핵심 플레이 경험을 깨지 않도록 만들었습니다.",
  },
  "큰 보드 조작 경험": {
    title: "큰 보드 조작 경험",
    problem:
      "큰 보드를 한 화면에 모두 맞추면 셀이 작아지고, 한 손가락 스크롤은 칠하기 조작과 충돌했습니다.",
    decision:
      "한 손가락은 칠하기에 쓰고, 두 손가락 이동과 확대/축소는 보드 카메라가 처리하도록 나눴습니다. 보드가 화면 밖으로 잘릴 때는 미니맵을 보여줬습니다.",
    result:
      "작은 보드는 단순하게, 큰 보드는 탐색 가능한 방식으로 다뤄 셀 크기와 조작성을 함께 확보했습니다.",
  },
};

const puzzolePrintScreenshotCaptions: Record<string, string> = {};

const puzzolePrintSnippetCopy: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "정답이 하나인 스테이지 카탈로그": {
    title: "정답 검증 로직",
    description:
      "만든 퍼즐이 다른 방식으로도 풀리는지 확인해, 정답이 하나인 스테이지만 저장합니다.",
  },
  "힌트와 완료 판정 기준 통합": {
    title: "현재 풀이 기준 힌트 선택",
    description:
      "이미 칠한 셀과 덜 겹치는 남은 셀을 골라 힌트로 보여줍니다.",
  },
  "서버 없이 동작하는 v1": {
    title: "로컬 진행 저장",
    description:
      "서버 없이도 완료한 스테이지와 해금 상태를 기기에 안정적으로 저장합니다.",
  },
  "완료 저장과 광고/구매 경계 분리": {
    title: "완료 저장 이후 광고/구매 처리",
    description:
      "스테이지 완료 저장을 먼저 확정하고, 광고와 구매 상태 확인은 별도 흐름에서 처리합니다.",
  },
  "큰 보드 조작 경험": {
    title: "큰 보드 이동과 미니맵",
    description:
      "칠하기, 화면 이동, 확대/축소, 미니맵 선택이 서로 충돌하지 않도록 입력 흐름을 나눕니다.",
  },
};

const puzzolePrintRelatedWritingDescription =
  "Puzzole의 큰 보드 입력을 구현하며 iOS 터치 전달 흐름을 정리한 글입니다. 칠하기, 화면 이동/확대, 미니맵 선택이 서로 충돌하지 않도록 입력 경계를 나누는 판단에 참고했습니다.";

const printSections = computed<PrintSection[]>(() => {
  if (
    !damago ||
    !puzzole ||
    !puzzoleAndroid ||
    !csFlashCards ||
    !portfolio ||
    !wwdcTranslator
  )
    return [];

  if (variant.value === "general") {
    return [
      {
        title: "Damago - 실서비스 iOS 앱",
        project: damago,
        includeOverview: true,
        includeRole: true,
        storyTitles: [
          "Local-First 상태 동기화",
          "렌더링 병목 개선",
          "FCM 유실 대응 재시도 구조",
          "출시 후 크래시 대응",
        ],
        includeProductImages: true,
        includePerformanceImages: true,
        includeLinks: true,
      },
      {
        title: "Puzzole - 개인 앱 프로덕트 설계",
        project: puzzole,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        storyTitles: [
          "정답이 하나인 스테이지 카탈로그",
          "힌트와 완료 판정 기준 통합",
          "서버 없이 동작하는 v1",
        ],
        includeCode: true,
      },
      {
        title: "Puzzole Android MVP - 플랫폼 확장",
        project: puzzoleAndroid,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        storyTitles: [
          "전면 포팅이 아닌 작은 기능 흐름",
          "퍼즐 규칙과 JSON 경계 분리",
          "ViewModel과 StateFlow 승격",
          "suspend Repository 경계",
          "Canvas 기반 보드 입력 실험",
        ],
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
        title: "Portfolio - Vue / SPA 배포 구조",
        project: portfolio,
        includeOverview: true,
        includeRole: true,
        storyTitles: [
          "콘텐츠와 화면 컴포넌트 분리",
          "GitHub Pages SPA 경로 대응",
        ],
        includeLinks: true,
      },
    ];
  }

  if (variant.value === "android") {
    return [
      {
        title: "Puzzole Android MVP - Android 확장 검증",
        project: puzzoleAndroid,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        storyTitles: [
          "전면 포팅이 아닌 작은 기능 흐름",
          "퍼즐 규칙과 JSON 경계 분리",
          "ViewModel과 StateFlow 승격",
          "suspend Repository 경계",
          "Canvas 기반 보드 입력 실험",
        ],
        printSummary:
          "iOS Puzzole의 핵심 규칙과 스테이지 데이터를 Android 환경에서 재검증하고, ViewModel/StateFlow·suspend Repository·Canvas 입력을 적용해 load → play → validate → complete 흐름을 단계적으로 보강했습니다.",
      },
      {
        title: "Puzzole - 원본 iOS 제품 설계",
        project: puzzole,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        storyTitles: [
          "정답이 하나인 스테이지 카탈로그",
          "힌트와 완료 판정 기준 통합",
          "서버 없이 동작하는 v1",
        ],
      },
      {
        title: "Damago - 출시 iOS 앱",
        project: damago,
        includeOverview: true,
        includeRole: true,
        includeProductImages: true,
        storyTitles: [
          "Local-First 상태 동기화",
          "렌더링 병목 개선",
          "출시 후 크래시 대응",
        ],
        includePerformanceImages: true,
      },
      {
        title: "Other Projects",
        summaryProjects: [csFlashCards, portfolio],
      },
    ];
  }

  return [
    {
      title: "Damago - 출시 iOS 앱",
      project: damago,
      includeOverview: true,
      includeRole: true,
      includeProductImages: true,
      storyTitles: [
        "Local-First 상태 동기화",
        "렌더링 병목 개선",
        "FCM 유실 대응 재시도 구조",
        "출시 후 크래시 대응",
      ],
      diagram: {
        title: "Local-First Pipeline",
        src: publicAsset("assets/damago/Local First 파이프라인.png"),
        alt: "Damago Local-First 상태 동기화 파이프라인",
      },
      includePerformanceImages: true,
      includeReliabilitySummary: true,
      includeLinks: true,
    },
    {
      title: "Puzzole - 개인 iOS 앱 설계",
      project: puzzole,
      includeOverview: true,
      includeRole: true,
      includeProductImages: true,
      storyTitles: [
        "정답이 하나인 스테이지 카탈로그",
        "힌트와 완료 판정 기준 통합",
        "서버 없이 동작하는 v1",
      ],
      includeCode: true,
      codeIntro:
        "스테이지 검증, 힌트 선택, 로컬 진행 저장 경계를 보여주는 핵심 코드 일부를 발췌했습니다.",
    },
    {
      title: "Other Projects",
      summaryProjects: [csFlashCards, portfolio, wwdcTranslator],
    },
  ];
});

function printPortfolio() {
  window.print();
}

function screenshotsFor(project: Project, group?: ProjectScreenshot['group']) {
  return getScreenshotsByGroup(project, group);
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

function printScreenshotCaption(
  project: Project,
  screenshot: ProjectScreenshot,
) {
  if (project.slug === "puzzole") {
    return puzzolePrintScreenshotCaptions[screenshot.caption] ?? screenshot.caption;
  }

  return screenshot.caption;
}

function printRoleItems(items: string[]) {
  return items.slice(0, 2);
}

function overviewItemsForPrint(project: Project) {
  if (project.slug === "puzzole") return puzzolePrintOverview;
  if (project.slug === "puzzole-android") return puzzoleAndroidPrintOverview;
  return project.overview;
}

function roleItemsForPrint(project: Project) {
  if (project.slug === "puzzole") return puzzolePrintRoleDetails;
  if (project.slug === "puzzole-android") return puzzoleAndroidPrintRoleDetails;
  return project.roleDetails;
}

function roleSectionTitle(project: Project) {
  return getRoleSectionTitle(project);
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
  return getStorySnippets(project, story);
}

function printStorySnippets(project: Project, story: ProjectDecisionStory) {
  return storySnippets(project, story);
}

function printStoryTitle(project: Project, story: ProjectDecisionStory) {
  return puzzolePrintStoryCopy[story.title]?.title ?? story.title;
}

function printStoryProblem(project: Project, story: ProjectDecisionStory) {
  if (project.slug === "puzzole") {
    return puzzolePrintStoryCopy[story.title]?.problem ?? story.problem;
  }

  return story.problem;
}

function printStoryDecision(project: Project, story: ProjectDecisionStory) {
  if (project.slug === "puzzole") {
    return puzzolePrintStoryCopy[story.title]?.decision ?? story.decision;
  }

  return story.decision;
}

function printStoryResult(project: Project, story: ProjectDecisionStory) {
  if (project.slug === "puzzole") {
    return puzzolePrintStoryCopy[story.title]?.result ?? story.result;
  }

  return story.result;
}

function printSnippetTitle(project: Project, snippet: ProjectCodeSnippet) {
  if (project.slug === "puzzole" && snippet.storyTitle) {
    return puzzolePrintSnippetCopy[snippet.storyTitle]?.title ?? snippet.title;
  }

  return snippet.title;
}

function printSnippetDescription(project: Project, snippet: ProjectCodeSnippet) {
  if (project.slug === "puzzole" && snippet.storyTitle) {
    return (
      puzzolePrintSnippetCopy[snippet.storyTitle]?.description ??
      snippet.description
    );
  }

  return snippet.description;
}

function printRelatedWritingDescription(project: Project) {
  if (project.slug === "puzzole") return puzzolePrintRelatedWritingDescription;
  return project.relatedWriting?.description ?? "";
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
  return /StageUniquenessAnalyzer|makeExactCoverModel|searchAlternativeSolution|hiddenCandidateIndices|hasAlternative|didReachSearchLimit|StageHintProvider|nextHint|overlapCount|cellsToApply|StageProgressStore|unlockedStageOrder|completedStageIDs|markCompleted|markStageCompleted|AdCoordinator|AdRemovalStore|InterstitialAdProvider|RewardedAdProvider|presentPostCompletionInterstitial|refreshEntitlements|hasRemovedAds|ToolPickerHost|BoardView|BoardViewportUIView|BKRenderer|scrollView|miniMapView|focusBoard|isCameraNeeded|isBoardClipped|minimumNumberOfTouches|onBoardPointSelected|onProgressValidated|PlayerProgressValidator|#expect|@Test|StageValidator|StageQualityEvaluator|canonicalRotationKey|rotatedShape|occupiedCells|makePlacementCandidates|validator\.validate|evaluator\.evaluate|difficultyEvaluator\.evaluate|StageSerialization\.encode|sortedManifest|missingCells|extraCells|makePaintedShapeGroups|matchesBaseShape|normalizedCells|fillRatio|allSatisfy/.test(
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
  <section
    class="print-page"
    :class="{
      'print-page--general': variant === 'general',
      'print-page--android': variant === 'android',
    }"
  >
    <div class="print-toolbar no-print">
      <RouterLink class="text-link" to="/">← 홈으로 돌아가기</RouterLink>
      <button class="button primary" type="button" @click="printPortfolio">
        PDF로 저장 / 인쇄
      </button>
    </div>

    <header class="print-hero avoid-break">
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

    <section class="print-intro-section avoid-break">
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

    <section class="print-open-source-section avoid-break">
      <article
        v-for="contribution in openSourceContributions"
        :key="contribution.href"
        class="print-open-source-card"
      >
        <div>
          <p class="eyebrow">
            Open Source Contribution · {{ contribution.project }} · {{ contribution.status }}
          </p>
          <div class="print-open-source-title-row">
            <h3>{{ contribution.title }}</h3>
            <a :href="contribution.href">PR #2550 ↗</a>
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
      class="print-project page-break"
      :data-project="section.project?.slug"
    >
      <header class="print-project-header avoid-break">
        <p v-if="section.project" class="eyebrow">
          {{ section.project.status }} · {{ section.project.period }}
        </p>
        <h2>{{ section.title }}</h2>
        <p
          v-if="section.printSummary"
          class="print-featured-summary"
          v-html="highlightPortfolioText(section.printSummary)"
        ></p>
        <p
          v-else-if="section.includeOverview && section.project?.featuredSummary"
          class="print-featured-summary"
          v-html="highlightPortfolioText(section.project.featuredSummary)"
        ></p>
        <p
          v-else-if="section.project"
          v-html="highlightPortfolioText(section.project.summary)"
        ></p>
      </header>

      <section
        v-if="
          section.project &&
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
            <figcaption>
              {{ printScreenshotCaption(section.project, screenshot) }}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        v-if="section.project && section.includeOverview"
        class="print-section avoid-break"
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
        v-if="section.project && section.includeRole"
        class="print-section"
        :class="{ 'avoid-break': section.project.roleBreakdown?.length }"
      >
        <h3>{{ roleSectionTitle(section.project) }}</h3>
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
              <li
                v-for="item in printRoleItems(group.items)"
                :key="item"
                v-html="highlightPortfolioText(item)"
              ></li>
            </ul>
          </article>
        </div>
        <ul v-else>
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

      <section v-if="section.summaryProjects?.length" class="print-section">
        <div class="print-summary-grid">
          <article
            v-for="project in section.summaryProjects"
            :key="project.slug"
            class="print-summary-card"
          >
            <h3>{{ project.name }}</h3>
            <p v-html="highlightPortfolioText(project.summary)"></p>
            <ul>
              <li
                v-for="item in project.overview.slice(0, 2)"
                :key="item"
                v-html="highlightPortfolioText(item)"
              ></li>
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
          <h4>{{ printStoryTitle(section.project, story) }}</h4>
          <dl class="print-pdr-list">
            <div>
              <dt>Problem</dt>
              <dd
                v-html="
                  highlightPortfolioText(printStoryProblem(section.project, story))
                "
              ></dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd
                v-html="
                  highlightPortfolioText(
                    printStoryDecision(section.project, story),
                  )
                "
              ></dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd
                v-html="
                  highlightPortfolioText(printStoryResult(section.project, story))
                "
              ></dd>
            </div>
            <div v-if="story.collaborationNote" class="collaboration-note-row">
              <dt>Collaboration Note</dt>
              <dd v-html="highlightPortfolioText(story.collaborationNote)"></dd>
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
              <h5>{{ printSnippetTitle(section.project, snippet) }}</h5>
              <p>{{ printSnippetDescription(section.project, snippet) }}</p>
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

      <section
        v-if="section.project?.relatedWriting"
        class="print-section print-related-writing"
      >
        <h3>Related Writing</h3>
        <article class="print-related-card">
          <h4>{{ section.project.relatedWriting.title }}</h4>
          <p
            v-html="
              highlightPortfolioText(printRelatedWritingDescription(section.project))
            "
          ></p>
          <div class="print-link-list">
            <a :href="section.project.relatedWriting.link.href">
              {{ section.project.relatedWriting.link.label }}
            </a>
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
          section.includePerformanceImages &&
          screenshotsFor(section.project, 'performance').length
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
