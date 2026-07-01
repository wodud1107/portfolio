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
      "검증된 스테이지 1000개를 앱에 포함하고, 플레이·힌트·진행 저장을 서버 없이 연결한 iOS 퍼즐 앱",
    role: "Solo iOS / Product Developer",
    period: "2026 - In Progress",
    status: "MVP",
    featured: true,
    categories: ["iOS", "Product"],
    tags: ["Personal Project", "MVP", "Product"],
    keywords: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "SPM",
      "Puzzle Generation",
      "Local-First",
      "StoreKit",
      "AdMob",
      "Swift Testing",
    ],
    links: [],
    overview: [
      "Puzzole은 플레이어가 보드의 셀을 칠해 반복 도형 해답을 완성하는 iOS 퍼즐 앱입니다.",
      "퍼즐 데이터 생성·검증 로직과 앱 화면 흐름을 분리하고, 앱에서는 스테이지 선택, 보드 플레이, 힌트, 진행 저장을 연결했습니다.",
      "v1은 서버 없이 동작하도록 검증된 스테이지 1000개를 앱에 포함하고, 완료/해금 상태는 기기에 저장합니다.",
      "스테이지 팩 추가, 진행 동기화, 구매 검증은 첫 출시 범위에서 분리해 이후 서버 확장 계획으로 남겼습니다.",
    ],
    problem: [
      "힌트와 완료 판정이 신뢰되려면 같은 보드를 여러 방식으로 풀 수 있는 스테이지를 제외해야 했습니다.",
      "리팩터링 전 샘플 50개 검증은 574.47초가 걸렸고 통과 비율은 24%에 그쳐, 출시 전 스테이지 품질과 생성 속도를 함께 개선해야 했습니다.",
      "개선 후에는 검증 한도 100000 조건에서 1000개 스테이지를 8.46초에 재확인했고, 정답이 하나인 스테이지 1000개와 실패/복수 정답 0개를 확인했습니다.",
      "v1에서 서버 의존성을 먼저 넣으면 계정, 개인정보, 네트워크 실패, 심사 리스크가 커지므로 스테이지 로딩, 진행 저장, 구매, 광고를 로컬 우선 경계로 묶을 필요가 있었습니다.",
    ],
    roleDetails: [
      "스테이지 생성 도구와 검증 로직으로 정답이 하나인 퍼즐 1000개를 만들고, 앱에서 로드할 순서 목록까지 함께 생성했습니다.",
      "검증 한도 100000 조건에서 1000개 스테이지를 재확인해 정답이 하나인 스테이지 1000개, 실패/복수 정답 0개를 확인했습니다.",
      "현재 풀이 상태를 기준으로 남은 셀을 안내하는 힌트 흐름을 구현하고, 완료/해금 저장은 광고보다 먼저 확정되도록 앱 흐름을 분리했습니다.",
      "진행 저장, 광고, 구매 상태 확인을 각각 독립된 경계로 나눠 외부 SDK나 구매 상태 변화가 핵심 플레이 흐름을 흔들지 않도록 했습니다.",
      "SwiftUI 화면과 UIKit 보드 뷰를 결합해 한 손가락 칠하기, 두 손가락 이동, 확대/축소, 미니맵 탐색이 충돌하지 않도록 구성했습니다.",
    ],
    relatedWriting: {
      title: "UIKit Touch Handling / Hit Testing",
      description:
        "Puzzole의 큰 보드 입력을 구현하며 UIKit의 hit-testing과 터치 전달 흐름을 정리했습니다. 칠하기, 화면 이동/확대, 미니맵 선택이 서로 충돌하지 않도록 입력 경계를 나누는 판단에 반영했습니다.",
      link: {
        label: "iOS의 Hit Testing 알아보기",
        href: "https://thinkartic1107.tistory.com/42",
      },
    },
    decisionStories: [
      {
        title: "정답이 하나인 스테이지 카탈로그",
        problem:
          "힌트와 완료 판정이 신뢰되려면 같은 보드를 여러 방식으로 풀 수 있으면 안 됐습니다. 리팩터링 전 샘플 50개 검증은 574.47초가 걸렸고 통과 비율은 24%였습니다.",
        decision:
          "생성된 퍼즐을 별도 검증 단계에서 다시 분석해 다른 풀이 가능성을 탐색하고, 정답이 하나인 스테이지만 앱에 포함하도록 했습니다.",
        result:
          "개선 후 검증 한도 100000 조건에서 1000개 스테이지를 8.46초에 재확인했고, 정답이 하나인 스테이지 1000개와 실패/복수 정답 0개를 확인했습니다. 리팩터링 전 샘플 50개 검증 574.47초, 통과 비율 24%였던 병목을 출시 가능한 수준으로 줄였습니다.",
      },
      {
        title: "힌트와 완료 판정 기준 통합",
        problem:
          "초기 규칙처럼 어떤 방식으로든 비슷한 모양을 만들면 정답으로 인정하면, 힌트가 가리킬 하나의 기준이 흐려졌습니다.",
        decision:
          "스테이지를 만들 때 정한 목표 배치를 완료 판정과 힌트의 공통 기준으로 삼고, 이미 칠한 셀과 덜 겹치는 남은 셀을 힌트로 보여주도록 했습니다.",
        result:
          "색상 선택의 자유는 유지하면서도, 힌트와 완료 판정은 같은 기준으로 일관되게 동작하게 됐습니다.",
      },
      {
        title: "서버 없이 동작하는 v1",
        problem:
          "v1에 서버 동기화와 계정을 넣으면 네트워크 실패, 개인정보 처리, 심사 리스크가 퍼즐 경험보다 먼저 커질 수 있었습니다.",
        decision:
          "v1은 앱에 포함된 스테이지와 로컬 진행 저장으로 완성하고, 스테이지 팩, 진행 동기화, 구매 검증은 후속 서버 확장으로 분리했습니다.",
        result:
          "오프라인에서도 플레이 가능한 MVP를 먼저 만들고, 출시 이후 필요한 범위만 서버로 확장할 수 있는 여지를 남겼습니다.",
      },
      {
        title: "완료 저장과 광고/구매 경계 분리",
        problem:
          "광고 로딩 실패나 구매 상태 확인이 스테이지 완료 저장과 섞이면, 퍼즐을 끝낸 경험 자체가 흔들릴 수 있었습니다.",
        decision:
          "스테이지 완료와 해금은 먼저 저장하고, 광고와 구매 상태 확인은 별도 객체가 처리하도록 흐름을 나눴습니다.",
        result:
          "광고가 실패해도 완료 흐름은 유지되고, 수익화 기능이 핵심 플레이 경험을 깨지 않도록 만들었습니다.",
      },
      {
        title: "큰 보드 조작 경험",
        problem:
          "큰 보드를 한 화면에 모두 맞추면 셀이 작아지고, 한 손가락 스크롤은 칠하기 조작과 충돌했습니다.",
        decision:
          "한 손가락은 칠하기에 쓰고, 두 손가락 이동과 확대/축소는 보드 카메라가 처리하도록 나눴습니다. 보드가 화면 밖으로 잘릴 때는 미니맵을 보여줬습니다.",
        result:
          "작은 보드는 단순하게, 큰 보드는 탐색 가능한 방식으로 다뤄 셀 크기와 조작성을 함께 확보했습니다.",
      },
    ],
    screenshots: [
      {
        src: publicAsset("assets/puzzole/v1-stage-selection.png"),
        alt: "Puzzole puzzle selection screen",
        caption:
          "검증된 스테이지 목록과 진행 상황을 연결한 선택 화면",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-play-minimap.png"),
        alt: "Puzzole board play with minimap",
        caption:
          "칠하기와 화면 이동/확대를 분리한 큰 보드 플레이",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-hint.png"),
        alt: "Puzzole stage play with shape side panel",
        caption: "현재 풀이 상태를 기준으로 남은 셀을 안내하는 힌트 흐름",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-completion.png"),
        alt: "Puzzole completion overlay",
        caption: "완료 저장과 다음 스테이지 해금 이후의 마무리 흐름",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/v1-color-tools.png"),
        alt: "Puzzole settings panel",
        caption: "소리, 스테이지 이동, 색상 설정을 모은 설정 화면",
        type: "wide",
        group: "product",
      },
    ],
    codeSnippets: [
      {
        title: "정답 검증 로직",
        storyTitle: "정답이 하나인 스테이지 카탈로그",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/Validation/StageUniquenessAnalyzer.swift",
        description:
          "만든 퍼즐이 다른 방식으로도 풀리는지 확인해, 정답이 하나인 스테이지만 저장합니다.",
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
        title: "현재 풀이 기준 힌트 선택",
        storyTitle: "힌트와 완료 판정 기준 통합",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/Stage/StageHintProvider.swift",
        description:
          "이미 칠한 셀과 덜 겹치는 남은 셀을 골라 힌트로 보여줍니다.",
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
        storyTitle: "서버 없이 동작하는 v1",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/Persistence/StageProgressStore.swift, StageProgressRepository.swift",
        description:
          "서버 없이도 완료한 스테이지와 해금 상태를 기기에 안정적으로 저장합니다.",
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
        title: "완료 저장 이후 광고/구매 처리",
        storyTitle: "완료 저장과 광고/구매 경계 분리",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/Ads/AdCoordinator.swift, Source/AdRemoval/AdRemovalStore.swift",
        description:
          "스테이지 완료 저장을 먼저 확정하고, 광고와 구매 상태 확인은 별도 흐름에서 처리합니다.",
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
        title: "큰 보드 이동과 미니맵",
        storyTitle: "큰 보드 조작 경험",
        source:
          "DrawingPuzzle/Puzzole/Puzzole/Source/StagePlay/BoardViewportUIView.swift, MiniMapUIView.swift",
        description:
          "칠하기, 화면 이동, 확대/축소, 미니맵 선택이 서로 충돌하지 않도록 입력 흐름을 나눕니다.",
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
        title: "Server Expansion Boundary",
        items: [
          "v1은 앱에 포함된 스테이지와 기기 내 진행 저장만으로 서버 없이 동작합니다.",
          "출시 이후에는 서버에서 스테이지 팩을 내려받고 기기에 캐시할 수 있도록, 스테이지 목록과 진행 저장의 책임을 분리해 두었습니다.",
          "진행 동기화와 서버 측 구매 검증은 계정 또는 익명 기기 식별자가 필요하므로 첫 출시 범위에서 제외했습니다.",
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
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => !project.featured);

export function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
