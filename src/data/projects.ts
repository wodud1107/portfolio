import { publicAsset } from "./assets";

export type ProjectStatus = "Released" | "MVP" | "Prototype" | "Coursework";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDetailSection {
  title: string;
  items: string[];
  links?: ProjectLink[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
  type?: "phone" | "wide";
  group?: "product" | "performance";
  notes?: string[];
}

export interface ProjectCodeSnippet {
  title: string;
  storyTitle?: string;
  source: string;
  description: string;
  code: string;
  printCode?: string;
}

export interface ProjectDecisionStory {
  title: string;
  problem: string;
  decision: string;
  result: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  links?: ProjectLink[];
}

export interface ProjectRoleGroup {
  title: string;
  items: string[];
}

export interface ProjectRelatedWriting {
  title: string;
  description: string;
  link: ProjectLink;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  role: string;
  period: string;
  status: ProjectStatus;
  featured: boolean;
  categories: string[];
  tags: string[];
  keywords: string[];
  links: ProjectLink[];
  featuredSummary?: string;
  overview: string[];
  problem: string[];
  roleDetails: string[];
  roleBreakdown?: ProjectRoleGroup[];
  decisionStories?: ProjectDecisionStory[];
  screenshots?: ProjectScreenshot[];
  codeSnippets?: ProjectCodeSnippet[];
  relatedWriting?: ProjectRelatedWriting;
  extraSections?: ProjectDetailSection[];
}

export const projects: Project[] = [
  {
    slug: "damago",
    name: "Damago",
    summary: "Live Activity와 Dynamic Island를 활용한 커플 소통 iOS 앱",
    role: "iOS Client Developer",
    period: "2025 - 2026",
    status: "Released",
    featured: true,
    categories: ["iOS", "Product", "Performance"],
    tags: ["Team Project", "Released", "Real Service"],
    keywords: [
      "SwiftUI",
      "UIKit",
      "SwiftData",
      "AsyncStream",
      "Firebase",
      "ActivityKit",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/boostcampwm2025/ios02-damago",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%EB%8B%A4%EB%A7%88%EA%B3%A0/id6758383282",
      },
      {
        label: "PR #344",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/344",
      },
      {
        label: "PR #274",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/274",
      },
      {
        label: "PR #217",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/217",
      },
      {
        label: "PR #165",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/165",
      },
      {
        label: "PR #342",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/342",
      },
      {
        label: "PR #341",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/341",
      },
      {
        label: "PR #348",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/348",
      },
      {
        label: "PR #292",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/292",
      },
      {
        label: "PR #27",
        href: "https://github.com/boostcampwm2025/ios02-damago/pull/27",
      },
    ],
    featuredSummary:
      "대표 프로젝트: App Store 출시 iOS 앱에서 상태 동기화, 렌더링 성능, 알림 신뢰성, 출시 후 크래시 대응을 담당했습니다.",
    relatedWriting: {
      title: "SwiftUI Rendering Pipeline",
      description:
        "Damago의 화면 전환 끊김과 렌더링 병목을 분석하며 SwiftUI 렌더링 파이프라인과 Core Animation commit 흐름을 함께 정리했습니다. Instruments 측정 결과와 내부 렌더링 구조를 비교해, 수치 개선만이 아니라 선언형 UI 유지보수성까지 고려한 최종 구현안을 선택했습니다.",
      link: {
        label: "SwiftUI의 렌더링 파이프라인 알아보기",
        href: "https://thinkartic1107.tistory.com/39",
      },
    },
    screenshots: [
      {
        src: publicAsset("assets/damago/readme-1.jpg"),
        alt: "Damago 홈 화면",
        caption: "펫 상태와 먹이 주기 중심의 홈 화면",
        type: "phone",
        group: "product",
      },
      {
        src: publicAsset("assets/damago/readme-2.jpg"),
        alt: "Damago 컬렉션 화면",
        caption: "수집한 캐릭터를 확인하고 변경하는 컬렉션",
        type: "phone",
        group: "product",
      },
      {
        src: publicAsset("assets/damago/readme-3.jpg"),
        alt: "Damago 커플 활동 화면",
        caption: "일일 질문과 밸런스 게임 기반 커플 활동",
        type: "phone",
        group: "product",
      },
      {
        src: publicAsset("assets/damago/readme-4.jpg"),
        alt: "Damago Dynamic Island 화면",
        caption: "Dynamic Island에서 이어지는 가벼운 상호작용",
        type: "phone",
        group: "product",
      },
      {
        src: publicAsset("assets/damago/instruments-before.jpg"),
        alt: "Damago 렌더링 성능 개선 전 Instruments 화면",
        caption:
          "개선 전: Core Animation Commits와 GPU Hitch가 집중적으로 발생",
        type: "wide",
        group: "performance",
        notes: [
          "Core Animation Commits 3175회, GPU Hitch 10회를 기준점으로 잡았습니다.",
          "반복 렌더링과 불필요한 UI 갱신이 화면 전환 중 누적되는지 Instruments로 확인했습니다.",
        ],
      },
      {
        src: publicAsset("assets/damago/instruments-after.jpg"),
        alt: "Damago 렌더링 성능 개선 후 Instruments 화면",
        caption: "실험안: Core Animation Commits 166회, GPU Hitch 1회까지 감소",
        type: "wide",
        group: "performance",
        notes: [
          "명령형 애니메이션 실험으로 렌더링 이벤트를 크게 줄일 수 있음을 확인했습니다.",
          "다만 최종 적용안은 수치만이 아니라 유지보수성과 선언형 UI의 일관성까지 함께 비교해 결정했습니다.",
          "수치 개선이 사용자 체감으로 이어지는지 Frame Lifetimes와 Hitch 트랙을 함께 확인했습니다.",
        ],
      },
      {
        src: publicAsset("assets/damago/instruments-final-declarative.png"),
        alt: "Damago 선언형 UI 최종안 Instruments 화면",
        caption: "최종안: 선언형 UI 유지, Commits 2,411회 / GPU Hitch 7회",
        type: "wide",
        group: "performance",
        notes: [
          "PDF 참고자료 기준 최종 적용안은 Core Animation Commits 2,411회, GPU Rendering Hitch 7회입니다.",
          "Complex Layer Tree Hitch는 2회로 확인했고, 성능 개선과 코드 유지보수성 사이의 균형을 선택했습니다.",
        ],
      },
    ],
    overview: [
      "Damago는 커플이 앱을 계속 열지 않아도 잠금화면, Live Activity, Dynamic Island에서 서로의 상태를 확인할 수 있는 iOS 앱입니다.",
      "팀 프로젝트에서 iOS 클라이언트 개발자로 참여해 화면 상태 동기화, ActivityKit 연동, 렌더링 성능 개선, 출시 후 크래시 대응을 담당했습니다.",
    ],
    problem: [
      "네트워크 응답을 기다리는 화면 흐름에서는 API 지연이나 실패가 곧바로 빈 상태와 늦은 피드백으로 이어질 수 있었습니다.",
      "Live Activity와 Dynamic Island는 앱 내부 상태 변화와 업데이트 타이밍이 어긋나면 지연, 중복 갱신, 크래시 가능성이 커질 수 있었습니다.",
      "출시 이후에는 설정 탭 진입, 캐릭터 변경, Release 환경 비동기 처리처럼 실제 사용 흐름에서만 드러나는 문제를 빠르게 줄여야 했습니다.",
    ],
    roleDetails: [],
    roleBreakdown: [
      {
        title: "직접 구현",
        items: [
          "AsyncStream 기반 파이프라인으로 SwiftData 로컬 캐시와 서버 API 응답을 연결해, 끊김 없는 화면 상태 동기화 흐름을 구현했습니다.",
          "Instruments로 렌더링 병목을 측정하고 Core Animation Commit/GPU Hitch 개선안을 비교해 최종 적용안을 PR로 반영했습니다.",
          "Live Activity 업데이트 흐름과 FCM/Cloud Tasks 기반 재시도 구조를 각각 구현·연동했습니다.",
        ],
      },
      {
        title: "설계 참여",
        items: [
          "네트워크 결과를 기다린 뒤 화면을 갱신하는 방식 대신, 로컬 상태를 먼저 방출하는 Local-First 방향을 팀 논의 안에서 구체화했습니다.",
          "UIKit은 기본 네비게이션 구조에, SwiftUI는 복잡한 화면 구성과 애니메이션에 집중하도록 역할을 분리했습니다.",
          "Fastlane/GitHub Actions 기반 배포 피드백 흐름을 PR 단계에서 확인할 수 있도록 구성했습니다.",
        ],
      },
      {
        title: "운영 대응 참여",
        items: [
          "App Store 출시 이후 설정 탭 진입 크래시와 서버 enum 불일치 fatalError를 분석하고 PR 단위로 수정했습니다.",
          "Release 환경에서 재현된 비동기 클로저 생명주기 문제를 추적하고, UI 상태 변경을 @MainActor 경계 안으로 모았습니다.",
          "FCM 전송 실패 가능성을 Cloud Tasks 재시도 구조로 낮춰 일시적 네트워크 실패가 곧바로 기능 실패로 이어지지 않도록 보완했습니다.",
        ],
      },
    ],
    decisionStories: [
      {
        title: "Local-First 상태 동기화",
        problem:
          "네트워크 응답을 기다린 뒤 화면을 갱신하면, API 지연이나 실패가 곧바로 빈 상태와 늦은 피드백으로 이어질 수 있었습니다.",
        decision:
          "SwiftData와 Repository 계층으로 로컬 상태를 먼저 방출하고, 연속 상태 변화는 AsyncStream으로 전달하도록 흐름을 분리했습니다.",
        result:
          "서버 응답, 로컬 캐시, 화면 상태가 Repository 중심의 한 방향 흐름으로 정리되면서, ViewModel과 SwiftUI View가 일관된 상태를 구독할 수 있었습니다.",
        image: {
          src: publicAsset("assets/damago/Local First 파이프라인.png"),
          alt: "Damago Local-First 상태 동기화 파이프라인",
        },
        links: [
          {
            label: "PR #165 · SwiftData 도입",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/165",
          },
          {
            label: "PR #217 · Local-First 캐싱",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/217",
          },
        ],
      },
      {
        title: "렌더링 병목 개선",
        problem:
          "상태 변화에 비해 화면 갱신 범위가 넓어 Core Animation Commit과 GPU Hitch가 누적되고, 실제 화면 전환에서 체감 성능 저하가 발생했습니다.",
        decision:
          "Instruments의 Core Animation, Frame Lifetimes, Hitch 트랙을 기준으로 반복 렌더링 지점을 좁혔고, 명령형 애니메이션 실험과 선언형 UI 유지안을 비교했습니다.",
        result:
          "실험상 Core Animation Commits 166회, GPU Hitch 1회까지 줄일 수 있었지만, 최종안은 유지보수 가능한 선언형 UI를 유지하며 2,411회/7회 수준으로 개선했습니다.",
        links: [
          {
            label: "PR #341 · CAAnimation 적용 검토",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/341",
          },
          {
            label: "PR #342 · SwiftUI animation 최종 결정",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/342",
          },
        ],
      },
      {
        title: "FCM 유실 대응 재시도 구조",
        problem:
          "푸시 전송이 네트워크나 서버 상태에 따라 실패하면 커플 앱의 핵심 경험인 즉각적인 상호작용이 끊길 수 있었습니다.",
        decision:
          "단순 재요청 대신 서버 측 Cloud Tasks 큐에 실패 작업을 쌓고, 10초, 60초, 300초로 이어지는 지수 백오프 재시도 흐름을 구성했습니다.",
        result:
          "일시적인 전송 실패가 곧바로 기능 실패로 이어지지 않도록 만들고, 푸시 유실 가능성을 운영 관점에서 낮췄습니다.",
        links: [
          {
            label: "PR #274 · FCM 재시도 구조",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/274",
          },
        ],
      },
      {
        title: "CI/CD와 배포 피드백 자동화",
        problem:
          "수동 빌드와 테스트 확인에 의존하면 출시 직전 결함 확인이 늦어지고, 팀 프로젝트에서 배포 피드백 속도가 떨어질 수 있었습니다.",
        decision:
          "Fastlane과 GitHub Actions를 연결하고, Swift Testing 결과를 xcdbeautify 로그로 정리해 PR 단계에서 확인할 수 있게 했습니다.",
        result:
          "빌드와 테스트 결과를 PR 흐름 안에서 확인하게 되어 배포 전 피드백과 실패 원인 추적이 쉬워졌습니다.",
        links: [
          {
            label: "PR #344 · CI/CD 구축",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/344",
          },
        ],
      },
      {
        title: "출시 후 크래시 대응",
        problem:
          "설정 탭 진입, 캐릭터 변경, Release 환경 비동기 클로저 생명주기 문제처럼 실제 사용자 흐름에서 크래시가 발생했습니다.",
        decision:
          "강제 언래핑을 제거하고 서버 enum 불일치를 도메인 에러로 처리했으며, UI 상태 변경은 @MainActor 경계 안으로 모았습니다.",
        result:
          "설정 탭 진입 크래시와 enum 불일치 fatalError를 PR로 반영했고, Release 환경에서 재현된 비동기 문제의 원인을 좁혔습니다.",
        links: [
          {
            label: "PR #348 · 설정 탭 크래시 대응",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/348",
          },
          {
            label: "PR #292 · enum 불일치 방어",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/292",
          },
          {
            label: "PR #27 · 운영 안정성 기반",
            href: "https://github.com/boostcampwm2025/ios02-damago/pull/27",
          },
        ],
      },
    ],
  },
  {
    slug: "puzzole",
    name: "Puzzole",
    summary:
      "StageGenCLI로 생성한 유일해 스테이지 카탈로그를 로컬에서 로드하고, 플레이·힌트·진행 저장까지 연결한 iOS puzzle painting 앱",
    role: "Solo iOS / Engine Developer",
    period: "2026 - In Progress",
    status: "MVP",
    featured: true,
    categories: ["iOS", "Product"],
    tags: ["Personal Project", "MVP", "Engine", "Product"],
    keywords: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "SPM",
      "Exact Cover",
      "Local-First",
      "StoreKit",
      "AdMob",
      "Swift Testing",
    ],
    links: [],
    overview: [
      "Puzzole은 플레이어가 보드의 셀을 칠해 반복 도형으로 구성된 hidden placement 해답을 완성하는 iOS puzzle painting 앱입니다.",
      "PuzzleKit은 stage generation, stage data serialization, exact-cover 기반 uniqueness analysis, semantic color grouping validation, hint selection을 담당하고, Puzzole 앱은 bundled catalog loading, stage selection, board play, local progress를 연결합니다.",
      "v1은 서버 없이 동작하도록 1000개 stage JSON과 score-sorted manifest를 bundle로 로드하고, stage clear/unlock progress는 local-first 구조로 저장합니다.",
      "백엔드 stage pack, progress sync, entitlement validation은 v1 범위 밖으로 분리해 BackendExpansionPlan에 후속 확장 경계로 정리했습니다.",
    ],
    problem: [
      "힌트가 hidden placement를 기준으로 제공되려면, 같은 보드를 다른 방식으로도 풀 수 있는 다중해 stage는 공정하지 않았습니다.",
      "리팩터링 전 기존 카탈로그 샘플 50개 분석은 574.47초가 걸렸고 unique 비율은 24%에 그쳐, 출시 전 catalog 품질과 생성 생산성을 함께 개선해야 했습니다.",
      "v1에서 서버 의존성을 먼저 넣으면 계정, 개인정보, 네트워크 실패, 심사 리스크가 커지므로 catalog loading, progress, purchase, ads를 로컬 우선 경계로 묶을 필요가 있었습니다.",
    ],
    roleDetails: [
      "StageGenCLI와 solver-driven StageGenerator로 stage JSON과 score-sorted manifest를 생성하고, StageUniquenessAnalyzer로 hidden solution 외 alternative tiling을 검증했습니다.",
      "1000개 generated stage catalog를 maxSearchNodes = 100000 조건에서 재검증해 unique 1000개, multiple/unsolved/limited 0개를 확인했습니다.",
      "StageHintProvider와 rewarded hint flow를 연결해 hidden placement 기준 힌트를 제공하고, stage clear/unlock 저장은 광고 기회보다 먼저 확정되도록 app flow를 분리했습니다.",
      "StageProgressStore, StageProgressRepository, AdCoordinator, AdRemovalStore로 local progress, interstitial/rewarded ads, StoreKit entitlement 경계를 분리했습니다.",
      "SwiftUI stage selection/play 화면과 UIKit BoardViewportUIView/minimap을 결합해 one-finger painting, two-finger camera, pinch zoom이 충돌하지 않도록 구성했습니다.",
    ],
    relatedWriting: {
      title: "UIKit Touch Handling / Hit Testing",
      description:
        "Puzzole의 보드 입력 처리를 구현하며 UIKit의 hit-testing과 터치 전달 흐름을 정리했습니다. one-finger painting, two-finger pan/zoom, minimap interaction이 충돌하지 않도록 BoardViewportUIView, BoardUIView, MiniMapUIView의 입력 경계를 나누는 판단에 반영했습니다.",
      link: {
        label: "iOS의 Hit Testing 알아보기",
        href: "https://thinkartic1107.tistory.com/42",
      },
    },
    decisionStories: [
      {
        title: "Unique-Solution Stage Catalog",
        problem:
          "힌트와 stage clear 판정이 hidden placement를 기준으로 동작하려면, 같은 보드를 다른 방식으로도 풀 수 있는 stage는 공정하지 않았습니다. 리팩터링 전 기존 카탈로그 샘플 50개 분석은 574.47초가 걸렸고 unique 비율은 24%였습니다.",
        decision:
          "StageUniquenessAnalyzer에서 모든 가능한 BaseShape placement를 exact-cover model로 만들고, 생성기가 알고 있는 hidden solution을 제외한 alternative tiling이 있는지 탐색했습니다. StageGenCLI는 unique stage만 저장하도록 했습니다.",
        result:
          "solver-driven generation과 uniqueness filter 이후, maxSearchNodes = 100000 조건에서 1000개 stage catalog를 8.46초에 재검증했고 unique 1000개, multiple/unsolved/limited 0개를 확인했습니다.",
      },
      {
        title: "Hint-Ready Puzzle Rule",
        problem:
          "초기 규칙처럼 어떤 방식으로든 BaseShape 그룹을 만들면 정답으로 인정하면, rewarded hint가 참조할 하나의 canonical answer structure가 없어졌습니다.",
        decision:
          "hidden placements를 stage clear 판정과 hint의 canonical answer structure로 삼고, StageHintProvider가 이미 칠한 셀과 덜 겹치는 placement를 골라 남은 셀만 힌트로 적용하도록 했습니다.",
        result:
          "색상 선택은 자유롭게 유지하면서도, 힌트와 stage clear 판정은 생성된 hidden placement 구조를 기준으로 일관되게 동작하게 됐습니다.",
      },
      {
        title: "Local-First v1, Backend-Ready Later",
        problem:
          "v1에 서버 catalog, account sync, server entitlement validation을 넣으면 출시 안정성, App Review 리스크, 오프라인 플레이보다 계정/네트워크/개인정보 처리가 먼저 커질 수 있었습니다.",
        decision:
          "v1은 bundled stage catalog, local StageProgressStore, StoreKit local entitlement checks, provider-based ads로 유지했습니다. BackendExpansionPlan에는 stage packs, progress sync, entitlement validation을 후속 API로만 정리했습니다.",
        result:
          "v1은 bundled stage catalog와 local progress로 서버 없이 동작하고, stage pack metadata, progress sync, entitlement validation은 BackendExpansionPlan으로 분리해 post-release 확장 경계로 남겼습니다.",
      },
      {
        title: "App Flow and Monetization Boundary",
        problem:
          "광고, 구매, rewarded hint가 퍼즐 풀이 완료 저장과 섞이면 외부 SDK 실패나 구매 상태 변화가 stage clear flow를 흔들 수 있었습니다.",
        decision:
          "StageProgressRepository는 stage clear/unlock을 먼저 저장하고, AdCoordinator는 interstitial/rewarded ad를 provider boundary 뒤에서 처리하며, AdRemovalStore는 StoreKit entitlement로 passive ads를 건너뛰게 했습니다.",
        result:
          "스테이지 완료와 해금은 광고보다 먼저 확정되고, interstitial이 실패해도 app flow는 계속됩니다. 외부 SDK 실패가 product flow를 깨지 않도록 monetization boundary를 분리했습니다.",
      },
      {
        title: "Large-Board Play UX",
        problem:
          "큰 stage를 화면에 전부 맞추면 셀이 작아져 칠하기 어렵고, 한 손가락 scroll은 Puzzole의 핵심 조작인 cell painting gesture와 충돌했습니다.",
        decision:
          "BoardUIView를 UIScrollView 기반 BoardViewportUIView로 감싸 one-finger painting, two-finger pan, pinch zoom을 분리하고, 보드가 viewport 밖으로 잘릴 때만 interactive minimap을 표시했습니다.",
        result:
          "작은 stage는 static board로 유지하고, 큰 stage는 scrollable camera와 interactive minimap을 사용해 cell size와 탐색성을 함께 확보했습니다.",
      },
    ],
    screenshots: [
      {
        src: publicAsset("assets/puzzole/v1-stage-selection.png"),
        alt: "Puzzole stage selection carousel",
        caption:
          "manifest-ordered catalog와 local progress를 연결한 stage selection",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-play-minimap.png"),
        alt: "Puzzole board play with minimap",
        caption:
          "one-finger painting과 two-finger camera를 분리한 large-board play",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-hint.png"),
        alt: "Puzzole stage play with shape side panel",
        caption:
          "hidden placement 기준 hint와 side-panel tool flow",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-completion.png"),
        alt: "Puzzole stage clear overlay",
        caption:
          "stage clear 저장과 unlock 이후 post-clear handoff",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-color-tools.png"),
        alt: "Puzzole settings panel",
        caption:
          "sound, stage 이동, color slot 설정을 분리한 settings overlay",
        type: "wide",
        group: "product",
      },
    ],
    codeSnippets: [
      {
        title: "Hidden Solution Uniqueness 분석",
        storyTitle: "Unique-Solution Stage Catalog",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/Validation/StageUniquenessAnalyzer.swift",
        description:
          "생성된 hidden placements를 제외하고도 같은 playable cells를 덮는 alternative tiling이 있는지 exact-cover search로 확인합니다.",
        printCode: `let model = makeExactCoverModel(stage: stage, playableCells: playableCells)
let hiddenCandidateIndices = makeHiddenCandidateIndices(stage: stage, model: model)

let hasAlternative = searchAlternativeSolution(
    model: model,
    coveredCells: &coveredCells,
    hiddenCandidateIndices: hiddenCandidateIndices,
    hasSelectedNonHiddenCandidate: false,
    maxSearchNodes: maxSearchNodes,
    visitedNodeCount: &visitedNodeCount,
    didReachSearchLimit: &didReachSearchLimit
)

if hasAlternative {
    status = .multiple
} else if didReachSearchLimit {
    status = .limited
} else {
    status = .unique
}`,
        code: `public func analyzeHiddenSolutionUniqueness(
    stage: PuzzleStage,
    maxSearchNodes: Int
) -> StageUniquenessAnalysis {
    let playableCells = stage.playableCells
    let model = makeExactCoverModel(stage: stage, playableCells: playableCells)
    let hiddenCandidateIndices = makeHiddenCandidateIndices(stage: stage, model: model)

    var coveredCells: Set<GridPosition> = []
    var visitedNodeCount = 0
    var didReachSearchLimit = false

    let hasAlternative = searchAlternativeSolution(
        model: model,
        coveredCells: &coveredCells,
        hiddenCandidateIndices: hiddenCandidateIndices,
        hasSelectedNonHiddenCandidate: false,
        maxSearchNodes: maxSearchNodes,
        visitedNodeCount: &visitedNodeCount,
        didReachSearchLimit: &didReachSearchLimit
    )

    let status: StageUniquenessStatus
    if hasAlternative {
        status = .multiple
    } else if didReachSearchLimit {
        status = .limited
    } else {
        status = .unique
    }

    return StageUniquenessAnalysis(
        status: status,
        visitedNodeCount: visitedNodeCount
    )
}

private func searchAlternativeSolution(
    model: ExactCoverModel,
    coveredCells: inout Set<GridPosition>,
    hiddenCandidateIndices: Set<Int>,
    hasSelectedNonHiddenCandidate: Bool,
    maxSearchNodes: Int,
    visitedNodeCount: inout Int,
    didReachSearchLimit: inout Bool
) -> Bool {
    guard visitedNodeCount < maxSearchNodes else {
        didReachSearchLimit = true
        return false
    }

    guard let nextCell = model.uncoveredCell(with: coveredCells) else {
        return hasSelectedNonHiddenCandidate
    }

    visitedNodeCount += 1

    for candidateIndex in model.candidateIndicesCoveringCell[nextCell, default: []] {
        let candidate = model.candidates[candidateIndex]
        guard candidate.cells.isDisjoint(with: coveredCells) else { continue }

        coveredCells.formUnion(candidate.cells)
        let hasAlternative = searchAlternativeSolution(
            model: model,
            coveredCells: &coveredCells,
            hiddenCandidateIndices: hiddenCandidateIndices,
            hasSelectedNonHiddenCandidate: hasSelectedNonHiddenCandidate
                || !hiddenCandidateIndices.contains(candidateIndex),
            maxSearchNodes: maxSearchNodes,
            visitedNodeCount: &visitedNodeCount,
            didReachSearchLimit: &didReachSearchLimit
        )
        coveredCells.subtract(candidate.cells)

        if hasAlternative { return true }
    }

    return false
}`,
      },
      {
        title: "Hidden Placement 기반 Hint 선택",
        storyTitle: "Hint-Ready Puzzle Rule",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/Stage/StageHintProvider.swift",
        description:
          "현재 칠한 셀과 덜 겹치는 hidden placement를 골라, 아직 비어 있는 셀만 rewarded hint로 적용합니다.",
        printCode: `let paintedCells = Set(paintedSemanticColors.keys)

let candidates = stage.placements.compactMap { placement -> StageHint? in
    let occupiedCells = placement.occupiedCells(for: stage.baseShape)
    let cellsToApply = occupiedCells.subtracting(paintedCells)

    guard !cellsToApply.isEmpty else {
        return nil
    }

    return StageHint(
        placement: placement,
        cellsToApply: cellsToApply,
        overlapCount: occupiedCells.intersection(paintedCells).count
    )
}

return candidates.min {
    if $0.overlapCount == $1.overlapCount {
        return $0.cellsToApply.count > $1.cellsToApply.count
    }

    return $0.overlapCount < $1.overlapCount
}`,
        code: `public struct StageHintProvider {
    public init() {}

    public func nextHint(
        stage: PuzzleStage,
        paintedSemanticColors: [GridPosition: SemanticColorID]
    ) -> StageHint? {
        let paintedCells = Set(paintedSemanticColors.keys)

        let candidates = stage.placements.compactMap { placement -> StageHint? in
            let occupiedCells = placement.occupiedCells(for: stage.baseShape)
            let cellsToApply = occupiedCells.subtracting(paintedCells)

            guard !cellsToApply.isEmpty else {
                return nil
            }

            return StageHint(
                placement: placement,
                cellsToApply: cellsToApply,
                overlapCount: occupiedCells.intersection(paintedCells).count
            )
        }

        return candidates.min {
            if $0.overlapCount == $1.overlapCount {
                return $0.cellsToApply.count > $1.cellsToApply.count
            }

            return $0.overlapCount < $1.overlapCount
        }
    }
}

public struct StageHint: Equatable {
    public let placement: ShapePlacement
    public let cellsToApply: Set<GridPosition>
    public let overlapCount: Int
}`,
      },
      {
        title: "Local Progress와 v1 저장 경계",
        storyTitle: "Local-First v1, Backend-Ready Later",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/Persistence/StageProgressStore.swift, StageProgressRepository.swift",
        description:
          "v1은 서버 없이 stage clear/unlock을 local JSON으로 저장하고 repository API로 앱 흐름에 노출합니다.",
        printCode: `struct StageProgressState: Codable, Equatable {
    var completedStageIDs: Set<String>
    var unlockedStageOrder: Int
}

func isStageUnlocked(_ stage: StageCatalogItem) -> Bool {
    stage.order <= state.unlockedStageOrder
}

func markCompleted(stageID: String, order: Int) throws {
    state.completedStageIDs.insert(stageID)
    state.unlockedStageOrder = max(state.unlockedStageOrder, order + 1)
    try save(state)
}

func markStageCompleted(_ stage: PuzzleStage) {
    try? store.markCompleted(stageID: stage.id, order: stage.order)
}`,
        code: `struct StageProgressState: Codable, Equatable {
    var completedStageIDs: Set<String>
    var unlockedStageOrder: Int

    static let initial = StageProgressState(
        completedStageIDs: [],
        unlockedStageOrder: 1
    )
}

final class StageProgressStore {
    private(set) var state: StageProgressState
    private let fileURL: URL

    func isStageUnlocked(_ stage: StageCatalogItem) -> Bool {
        stage.order <= state.unlockedStageOrder
    }

    func isStageCompleted(_ stage: StageCatalogItem) -> Bool {
        state.completedStageIDs.contains(stage.id)
    }

    func markCompleted(stageID: String, order: Int) throws {
        state.completedStageIDs.insert(stageID)
        state.unlockedStageOrder = max(state.unlockedStageOrder, order + 1)
        try save(state)
    }

    private func save(_ state: StageProgressState) throws {
        let data = try JSONEncoder().encode(state)
        try data.write(to: fileURL, options: [.atomic])
    }
}

@MainActor
final class StageProgressRepository: ObservableObject {
    @Published private(set) var state: StageProgressState
    private let store: StageProgressStore

    func markStageCompleted(_ stage: PuzzleStage) {
        do {
            try store.markCompleted(stageID: stage.id, order: stage.order)
            state = store.state
        } catch {
            assertionFailure("Failed to save stage progress: \\(error)")
        }
    }
}`,
      },
      {
        title: "Stage Clear 이후 광고와 구매 경계",
        storyTitle: "App Flow and Monetization Boundary",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/Ads/AdCoordinator.swift, Source/AdRemoval/AdRemovalStore.swift",
        description:
          "완료 저장/해금과 광고 presentation을 분리하고, StoreKit ad-removal entitlement로 passive ads만 건너뜁니다.",
        printCode: `@MainActor
func presentPostCompletionInterstitial(from viewController: UIViewController) async {
    guard !adRemovalStore.hasRemovedAds else { return }

    do {
        try await interstitialAdProvider.present(from: viewController)
    } catch {
        logger.notice("Skipping interstitial: \\(error.localizedDescription)")
    }
}

func presentRewardedHint(from viewController: UIViewController) async -> Bool {
    do {
        return try await rewardedAdProvider.present(from: viewController)
    } catch {
        return false
    }
}

func refreshEntitlements() async {
    hasRemovedAds = await entitlementProvider.hasRemovedAds()
}`,
        code: `@MainActor
final class AdCoordinator: ObservableObject {
    private let interstitialAdProvider: InterstitialAdProvider
    private let rewardedAdProvider: RewardedAdProvider
    private let adRemovalStore: AdRemovalStore

    func presentPostCompletionInterstitial(
        from viewController: UIViewController
    ) async {
        guard !adRemovalStore.hasRemovedAds else { return }

        do {
            try await interstitialAdProvider.present(from: viewController)
        } catch {
            logger.notice("Skipping interstitial: \\(error.localizedDescription)")
        }
    }

    func presentRewardedHint(
        from viewController: UIViewController
    ) async -> Bool {
        do {
            return try await rewardedAdProvider.present(from: viewController)
        } catch {
            logger.notice("Rewarded hint unavailable: \\(error.localizedDescription)")
            return false
        }
    }
}

@MainActor
final class AdRemovalStore: ObservableObject {
    @Published private(set) var hasRemovedAds = false
    private let entitlementProvider: AdRemovalEntitlementProvider

    func refreshEntitlements() async {
        hasRemovedAds = await entitlementProvider.hasRemovedAds()
    }
}`,
      },
      {
        title: "ScrollView Camera와 Interactive Minimap",
        storyTitle: "Large-Board Play UX",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/StagePlay/BoardViewportUIView.swift, MiniMapUIView.swift",
        description:
          "한 손가락 painting과 camera navigation이 충돌하지 않도록 UIScrollView camera와 clipped-state minimap을 분리했습니다.",
        printCode: `scrollView.panGestureRecognizer.minimumNumberOfTouches = 2
scrollView.addSubview(boardView)
addSubview(miniMapView)

boardView.onPaintedCellChanged = { [weak self] position, color in
    self?.miniMapView.updatePaintedCell(at: position, color: color)
}

miniMapView.onBoardPointSelected = { [weak self] point in
    self?.focusBoard(at: point)
}

let isCameraNeeded = minimumBoardSize.width > bounds.width
    || minimumBoardSize.height > bounds.height

miniMapView.isHidden = !isBoardClipped`,
        code: `import UIKit
import PuzzleKit

final class BoardViewportUIView: UIView {
    private let stage: PuzzleStage
    private let scrollView = UIScrollView()

    private lazy var boardView = BoardUIView(stage: stage)
    private lazy var miniMapView = MiniMapUIView(stage: stage)

    private func configure() {
        scrollView.delegate = self
        scrollView.delaysContentTouches = false
        scrollView.panGestureRecognizer.minimumNumberOfTouches = 2

        addSubview(scrollView)
        scrollView.addSubview(boardView)
        addSubview(miniMapView)

        boardView.onPaintedCellChanged = { [weak self] position, color in
            self?.miniMapView.updatePaintedCell(at: position, color: color)
        }

        miniMapView.onBoardPointSelected = { [weak self] point in
            self?.focusBoard(at: point)
        }
    }

    override func layoutSubviews() {
        super.layoutSubviews()

        let minimumBoardSize = CGSize(
            width: CGFloat(stage.columnLimit) * CellSize.minimum,
            height: CGFloat(stage.rowLimit) * CellSize.minimum
        )

        let isCameraNeeded = minimumBoardSize.width > bounds.width
            || minimumBoardSize.height > bounds.height

        configureZoomIfNeeded(isCameraNeeded: isCameraNeeded)
        updateMiniMapVisibility()
        updateMiniMapViewport()
    }

    private func updateMiniMapVisibility() {
        let scaledBoardSize = CGSize(
            width: boardView.bounds.width * scrollView.zoomScale,
            height: boardView.bounds.height * scrollView.zoomScale
        )

        let isBoardClipped = scaledBoardSize.width > scrollView.bounds.width + 0.5
            || scaledBoardSize.height > scrollView.bounds.height + 0.5

        miniMapView.isHidden = !isBoardClipped
    }
}

final class MiniMapUIView: UIView {
    var onBoardPointSelected: ((CGPoint) -> Void)?

    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        selectBoardPoint(from: touches)
    }

    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
        selectBoardPoint(from: touches)
    }
}`,
      },
    ],
    extraSections: [
      {
        title: "Backend Expansion Boundary",
        items: [
          "v1은 bundled stage_manifest.json과 puzzle_stageNN.json, local StageProgressStore, StoreKit entitlement checks로 서버 없이 동작합니다.",
          "v1.1 이후에는 GET /stage-packs와 stage JSON cache로 backend-managed stage packs를 추가할 수 있도록 catalog와 progress 경계를 분리했습니다.",
          "v2의 progress sync와 server-side entitlement validation은 account 또는 anonymous device ID가 필요하므로 v1 출시 범위에서 제외했습니다.",
        ],
      },
    ],
  },
  {
    slug: "cs-flashcards",
    name: "CS FlashCards",
    summary: "CS 학습용 iOS 플래시카드 앱과 Vapor 서버",
    role: "iOS / Backend Developer",
    period: "2025",
    status: "MVP",
    featured: false,
    categories: ["iOS", "Backend"],
    tags: ["Personal Project", "Learning Tool"],
    keywords: ["Swift", "Vapor", "DB Migration", "CSV Import", "REST API"],
    links: [
      { label: "GitHub", href: "https://github.com/wodud1107/CS-FlashCards" },
    ],
    overview: [
      "CS FlashCards는 CS 지식을 모바일에서 반복 학습하기 위한 iOS 앱과 Vapor 서버 프로젝트입니다.",
      "jwasham의 computer-science-flash-cards 데이터를 활용해 카드 조회와 학습 흐름을 실험했습니다.",
    ],
    problem: [
      "기존 플래시카드 앱에 의존하지 않고 학습 데이터, 서버, 클라이언트 흐름을 직접 제어하고 싶었습니다.",
      "iOS 클라이언트뿐 아니라 서버와 DB 마이그레이션까지 직접 다루는 학습 제품 구조를 만들고 싶었습니다.",
    ],
    roleDetails: [
      "Vapor 서버 구성, DB migration, CSV 카드 데이터 import 흐름을 구현했습니다.",
      "iOS 앱에서 카드 조회와 자동 로그인 실험, UserDefaults 기반 토큰 저장을 다뤘습니다.",
    ],
    screenshots: [
      {
        src: publicAsset("assets/csflashcards/Simulator Screenshot - iPhone 17 Pro - 2026-06-06 at 20.22.16.png"),
        alt: "CS FlashCards 질문 카드 화면",
        caption:
          "CS 개념을 모바일에서 반복 학습할 수 있도록 구성한 질문 카드 화면",
        type: "phone",
        group: "product",
      },
      {
        src: publicAsset("assets/csflashcards/Simulator Screenshot - iPhone 17 Pro - 2026-06-06 at 20.22.41.png"),
        alt: "CS FlashCards 답변 카드 화면",
        caption: "카드 클릭하여 질문과 설명을 확인하는 학습 흐름",
        type: "phone",
        group: "product",
      },
    ],
    decisionStories: [
      {
        title: "iOS 단독 앱이 아닌 API 기반 학습 제품",
        problem:
          "로컬 데이터만 가진 플래시카드 앱은 구현은 빠르지만, 학습 데이터 갱신과 서버/API 협업 경험을 보여주기 어렵습니다.",
        decision:
          "Vapor 서버에서 카드 데이터를 관리하고, iOS 클라이언트는 REST API로 카드를 조회하는 구조를 선택했습니다.",
        result:
          "iOS 화면, 네트워크 계층, 서버 라우팅, DB 모델이 연결된 작은 제품 흐름을 직접 구성했습니다.",
      },
      {
        title: "CSV 데이터 Import와 Migration 분리",
        problem:
          "jwasham flashcards 데이터를 수동으로 DB에 넣으면 초기화와 재현이 어렵고, 서버 환경을 다시 만들 때 같은 작업을 반복해야 했습니다.",
        decision:
          "DB schema 생성을 migration으로 분리하고, 카드 데이터 적재는 import-cards command로 실행할 수 있게 구성했습니다.",
        result:
          "서버 setup 과정이 migrate → import-cards → run으로 정리되어 데이터 초기화와 재실행 흐름을 설명할 수 있게 됐습니다.",
      },
      {
        title: "초기 인증 범위 줄이기",
        problem:
          "학습 카드 조회 MVP에서 완전한 인증 시스템을 먼저 만들면 카드 조회, 서버 연동, 학습 흐름 검증보다 범위가 커졌습니다.",
        decision:
          "초기에는 UserDefaults 기반 토큰 저장 실험으로 범위를 줄이고, 카드 조회와 서버 연결을 우선 검증했습니다.",
        result:
          "MVP에서 중요한 API 연동과 화면 흐름을 먼저 완성했고, 이후 인증/학습 기록 저장을 확장할 수 있는 방향을 남겼습니다.",
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    summary: "Vue 3와 TypeScript로 구성한 프로젝트 중심 개발자 포트폴리오",
    role: "Frontend Developer",
    period: "2026",
    status: "Released",
    featured: false,
    categories: ["Frontend", "Product"],
    tags: ["Personal Project", "Deployed"],
    keywords: [
      "TypeScript",
      "Vue 3",
      "Vue Router",
      "Vite",
      "GitHub Pages",
    ],
    links: [
      {
        label: "Website",
        href: "https://wodud1107.github.io/portfolio/",
      },
      {
        label: "GitHub",
        href: "https://github.com/wodud1107/portfolio",
      },
    ],
    overview: [
      "프로젝트 경험과 의사결정 과정을 일관된 구조로 전달하기 위해 만든 Vue 기반 포트폴리오입니다.",
      "프로젝트, 기술 스택, 경험 데이터를 분리하고 재사용 가능한 컴포넌트와 라우트에서 조합하도록 구성했습니다.",
    ],
    problem: [
      "프로젝트가 늘어나면서 카드와 상세 페이지에 같은 내용을 반복 작성하면 수정 지점이 분산되고 정보가 달라질 수 있었습니다.",
      "GitHub Pages의 하위 경로 배포와 SPA 직접 접근을 함께 지원하려면 asset base와 라우팅 fallback을 맞춰야 했습니다.",
    ],
    roleDetails: [
      "Vue 컴포넌트와 TypeScript 데이터 모델로 홈, 프로젝트 목록, 상세 페이지를 구성했습니다.",
      "Vue Router 기반 내비게이션과 GitHub Actions·Pages 배포 흐름을 연결했습니다.",
    ],
    decisionStories: [
      {
        title: "콘텐츠와 화면 컴포넌트 분리",
        problem:
          "프로젝트 설명을 각 카드와 상세 페이지에 직접 작성하면 같은 내용을 반복 수정해야 하고, 화면마다 정보가 달라지기 쉬웠습니다.",
        decision:
          "프로젝트, 기술 스택, 경험을 TypeScript 데이터로 분리하고 ProjectCard와 상세 페이지가 같은 데이터를 조합하도록 구성했습니다.",
        result:
          "한 곳에서 내용을 수정하면 홈, 프로젝트 목록, 상세 페이지에 함께 반영되어 콘텐츠의 일관성과 유지보수성을 높였습니다.",
      },
      {
        title: "GitHub Pages SPA 경로 대응",
        problem:
          "GitHub Pages의 /portfolio/ 하위 경로에서 asset 절대 경로와 Vue Router history fallback이 맞지 않아 배포 화면과 직접 접근 경로가 깨졌습니다.",
        decision:
          "Vite base와 Vue Router base를 배포 경로에 맞추고, 빌드 시 index.html을 404.html로 복사해 SPA fallback을 구성했습니다.",
        result:
          "GitHub Pages에서도 정적 asset, 내비게이션, 프로젝트 상세 URL 직접 접근이 같은 기준으로 동작하도록 배포 구조를 정리했습니다.",
      },
    ],
  },
  {
    slug: "wwdc-translator",
    name: "WWDC Translator",
    summary: "WWDC 영상 학습을 위한 개인용 실시간 자막 번역 앱",
    role: "Solo iOS Developer",
    period: "2026",
    status: "Prototype",
    featured: false,
    categories: ["iOS"],
    tags: ["Personal Tool", "MVP"],
    keywords: ["SwiftUI", "WebKit", "AVKit", "Translation", "Subtitle Sync"],
    links: [
      { label: "GitHub", href: "https://github.com/wodud1107/WWDC-Translator" },
    ],
    overview: [
      "WWDC Translator는 WWDC 영상 학습 중 한국어 자막이 없는 불편을 줄이기 위해 만든 개인용 도구입니다.",
      "WebKit, AVKit, Apple Translation Framework를 활용해 빠르게 MVP를 검증했습니다.",
    ],
    problem: [
      "WWDC 세션 학습 중 원문 transcript와 영상 재생 시간을 함께 보며 한국어로 이해하는 과정이 번거로웠습니다.",
      "외부 번역 API 비용이나 키 관리 없이 시스템 프레임워크만으로 동작하는 흐름을 만들고 싶었습니다.",
    ],
    roleDetails: [
      "WWDC 페이지 접근, transcript 추출, AVPlayer 재생 시간 기반 자막 동기화 흐름을 구현했습니다.",
      "Apple Translation Framework를 활용해 원문과 번역문의 1:1 매칭을 유지했습니다.",
    ],
    screenshots: [
      {
        src: publicAsset("assets/wwdc-translator/560452964-a1981b7a-b705-4675-b827-8383871d4ccb.png"),
        alt: "WWDC Translator 영상 자막 오버레이 화면",
        caption:
          "WWDC 영상 위에 한국어 번역 자막을 시간 기준으로 표시한 Prototype 화면",
        type: "wide",
        group: "product",
      },
    ],
    decisionStories: [
      {
        title: "Transcript 추출과 영상 싱크 연결",
        problem:
          "영상과 transcript를 따로 보면 학습 흐름이 끊기고, 번역문이 재생 시간과 맞지 않으면 실사용 가치가 낮아집니다.",
        decision:
          "WebKit으로 WWDC 페이지의 transcript와 시작 시간을 추출하고, AVPlayer의 재생 시간을 0.1초 단위로 관찰해 자막 오버레이와 연결했습니다.",
        result:
          "번역된 자막이 영상 위에 시간 기준으로 표시되어, WWDC 세션을 보면서 바로 한국어 의미를 확인할 수 있게 됐습니다.",
      },
    ],
  },
  {
    slug: "gpio-rsp",
    name: "GPIO RSP",
    summary:
      "라즈베리파이 GPIO 2비트 통신으로 구현한 가위바위보 시스템 프로젝트",
    role: "System Programming Developer",
    period: "2025",
    status: "Coursework",
    featured: false,
    categories: ["System"],
    tags: ["Academic Project", "Embedded"],
    keywords: [
      "Raspberry Pi",
      "GPIO",
      "Linux Kernel Module",
      "Device Driver",
      "Makefile",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/wodud1107/slow_airdrop" },
    ],
    overview: [
      "GPIO RSP는 라즈베리파이 간 GPIO 2비트 시퀀스 통신으로 가위바위보 게임을 구현한 시스템 프로그래밍 프로젝트입니다.",
      "커널 모듈 드라이버, 사용자 API, 응용 프로그램, Makefile을 분리해 구조화했습니다.",
    ],
    problem: [
      "GPIO 핀을 직접 다루는 코드는 쇼트 위험과 방향 설정 오류가 발생하기 쉬워 안전한 추상화가 필요했습니다.",
      "실제 가위바위보처럼 동시 제출을 구현하려면 하드웨어 동기화와 공정성 문제가 함께 발생했습니다.",
    ],
    roleDetails: [
      "GPIO export/unexport, 입력/출력 모드 설정, 2비트 송수신 API를 구성했습니다.",
      "DATA1, DATA2, CLK, GND 기반 통신과 앱 레벨 게임 흐름을 구현했습니다.",
    ],
    decisionStories: [
      {
        title: "GPIO 핀 방향 분리",
        problem:
          "GPIO 핀을 직접 연결하는 프로젝트에서는 Output끼리 연결되는 쇼트 위험과 방향 설정 오류가 가장 먼저 관리해야 할 리스크였습니다.",
        decision:
          "송신과 수신 역할을 명확히 나누고, 드라이버/API 계층에서 입력/출력 모드 설정을 분리했습니다.",
        result:
          "하드웨어 연결 위험을 낮추면서 사용자 앱에서는 send/recv 흐름만 다루도록 추상화할 수 있었습니다.",
      },
      {
        title: "동시 제출 대신 순차 제출 MVP",
        problem:
          "실제 가위바위보처럼 동시 제출을 구현하려면 READY/SYNC 핀, 타이밍, 공정성 검증이 필요해 MVP 범위를 크게 넘었습니다.",
        decision:
          "초기 버전에서는 단방향 순차 제출을 선택하고, 안정적인 2비트 송수신과 결과 판정에 집중했습니다.",
        result:
          "제한된 범위 안에서 GPIO 통신, 커널 모듈, 사용자 API, 앱 판정 흐름을 끝까지 연결할 수 있었습니다.",
      },
      {
        title: "드라이버/API/앱 계층 분리",
        problem:
          "GPIO 제어 코드가 앱 로직에 섞이면 테스트와 디버깅이 어려워지고, 어떤 계층에서 문제가 났는지 추적하기 힘들었습니다.",
        decision:
          "커널 모듈, 사용자 API, 응용 프로그램, Makefile을 분리해 시스템 계층별 책임을 드러냈습니다.",
        result:
          "모바일 프로젝트 외에도 OS/하드웨어 경계의 기본기를 실제 프로젝트 구조로 설명할 수 있게 됐습니다.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter(
  (project) => !project.featured,
);

export function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
