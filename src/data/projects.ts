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
  snippetIndexes?: number[];
}

export interface ProjectRoleGroup {
  title: string;
  items: string[];
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
    slug: "puzzole-puzzlekit",
    name: "Puzzole / PuzzleKit",
    summary: "셀 기반 퍼즐 페인팅을 위한 Swift 퍼즐 엔진과 iOS 플레이 앱",
    role: "Solo iOS / Engine Developer",
    period: "2026 - In Progress",
    status: "MVP",
    featured: true,
    categories: ["iOS", "Product"],
    tags: ["Personal Project", "In Progress", "Engine"],
    keywords: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "SPM",
      "StageGenerator",
      "Swift Testing",
    ],
    links: [],
    overview: [
      "Puzzole은 자유 드로잉 앱이 아니라 셀 단위로 칠하고 검증하는 puzzle painting 앱입니다.",
      "PuzzleKit은 퍼즐 규칙과 스테이지 데이터를, BrushKit은 셀 채움 렌더링을, Puzzole 앱은 사용자 플레이 흐름을 담당하도록 나눴습니다.",
      "광고 수익형 출시 프로덕트로 계획 중인 프로젝트라 전체 저장소 공개 대신 핵심 엔진 코드 일부를 포트폴리오에 발췌했습니다.",
    ],
    problem: [
      "일반 드로잉 엔진처럼 stroke path를 저장하면 퍼즐 규칙 검증과 스테이지 생성이 불필요하게 복잡해졌습니다.",
      "출시 전 MVP 단계에서 중요한 것은 브러시 질감보다 터치 입력, 셀 상태, JSON 스테이지, 검증 로직이 한 흐름으로 연결되는 것이었습니다.",
    ],
    roleDetails: [
      'BaseShape, CellOffset, GridPosition, Rotation, ShapePlacement를 설계해 퍼즐 조각과 배치 상태를 좌표 기반 도메인 모델로 표현했습니다.',
      'StageGenerator, StageValidator, StageSerialization, PlayerProgressValidator를 구현해 생성 가능한 스테이지와 사용자의 풀이 상태를 검증했습니다.',
      'UIKit BoardView에서 touch handling과 cell hit-test를 직접 처리하고, SwiftUI는 화면 composition과 상태 표시 영역에 사용했습니다.',
    ],
    decisionStories: [
      {
        title: "자유 드로잉이 아닌 Cell-Based Puzzle Painting",
        problem:
          "자유 드로잉처럼 stroke path를 저장하면 퍼즐 규칙 검증과 스테이지 생성이 복잡해지고, 제품의 핵심인 “셀을 칠해 퍼즐을 푸는 경험”이 흐려졌습니다.",
        decision:
          "touch point를 cell hit-test로 변환한 뒤 fill cell, validate progress로 이어지는 결정적 입력 모델을 선택했습니다.",
        result:
          "사용자 입력, 보드 상태, 퍼즐 검증이 하나의 제품 루프로 연결되어 MVP에서 가장 중요한 플레이 흐름을 먼저 완성할 수 있었습니다.",
        snippetIndexes: [1],
      },
      {
        title: "Generator-First 스테이지 설계",
        problem:
          "임의의 비트맵 보드에서 정답 shape 배치를 역으로 추론하면 난도가 높고, MVP 단계에서 풀 수 없는 퍼즐이 생성될 위험이 컸습니다.",
        decision:
          "배치 가능한 shape 후보를 먼저 만들고, 겹침과 경계를 검증한 뒤 quality evaluator로 사용할 만한 스테이지를 남기는 generator-first 방식을 선택했습니다.",
        result:
          "생성된 스테이지가 solved placement를 기준으로 만들어져 solvable stage를 보장할 수 있었고, JSON 저장/로드와 curated stage 확장 기반을 만들었습니다.",
        snippetIndexes: [0],
      },
      {
        title: "Display Color와 Semantic Color 분리",
        problem:
          "사용자가 자유롭게 색을 선택하게 하면 시각 색상과 퍼즐 검증 의미가 섞여 인접 shape 구분 규칙을 안정적으로 판단하기 어려웠습니다.",
        decision:
          "렌더링에 쓰는 display color와 검증에 쓰는 semantic color를 분리하고, PlayerProgressValidator에서 coverage, grouping, adjacent conflict를 별도로 판단했습니다.",
        result:
          "사용자에게는 자유로운 색 선택을 제공하면서도, 퍼즐 규칙은 테스트 가능한 도메인 로직으로 유지할 수 있었습니다.",
        snippetIndexes: [2],
      },
    ],
    screenshots: [
      {
        src: publicAsset("assets/puzzole/fill-progress.jpg"),
        alt: "Puzzole 셀 채우기 진행 화면",
        caption:
          "touch point를 cell hit-test로 변환해 결정적인 fill state로 저장",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/color-selection.jpg"),
        alt: "Puzzole 색상 선택 상태",
        caption:
          "display color 선택을 사용자 입력으로 받고 semantic color 검증과 분리",
        type: "wide",
        group: "product",
      },
      {
        src: publicAsset("assets/puzzole/validation-state.jpg"),
        alt: "Puzzole 플레이 검증 상태 화면",
        caption:
          "playable cell coverage와 shape grouping 검증으로 퍼즐 진행 상태를 판단",
        type: "wide",
        group: "product",
      },
    ],
    codeSnippets: [
      {
        title: "Generator-First Stage 생성",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/StageGenerator.swift",
        description:
          "무작위 보드에서 정답을 추론하지 않고, 배치 가능한 shape 후보로부터 풀 수 있는 스테이지를 먼저 생성합니다.",
        printCode: `let candidates = makePlacementCandidates(baseShape: baseShape, bounds: bounds)

for _ in 0..<maxAttempts {
    let placements = makeRandomPlacements(candidates: candidates)
    let stage = PuzzleStage(baseShape: baseShape, placements: placements)
    if validator.validate(stage: stage), evaluator.evaluate(stage: stage) {
        return stage
    }
}`,
        code: `public func generate(
    baseShape: BaseShape,
    rowLimit: Int,
    columnLimit: Int,
    maxAttempts: Int = 1000
) -> PuzzleStage? {
    let bounds = GridBounds(rowLimit: rowLimit, columnLimit: columnLimit)
    let candidates = makePlacementCandidates(baseShape: baseShape, bounds: bounds)

    for _ in 0..<maxAttempts {
        let placements = makeRandomPlacements(candidates: candidates)
        let stage = PuzzleStage(
            baseShape: baseShape,
            rowLimit: rowLimit,
            columnLimit: columnLimit,
            placements: placements
        )

        if validator.validate(stage: stage), evaluator.evaluate(stage: stage) {
            return stage
        }
    }

    return nil
}`,
      },
      {
        title: "Player Progress 검증",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/PlayerProgressValidator.swift",
        description:
          "칠해진 셀을 coverage, shape grouping, adjacent semantic-color conflict로 나눠 검증합니다.",
        printCode: `let missingCells = playableCells.subtracting(paintedCells)
let extraCells = paintedCells.subtracting(playableCells)
let paintedGroups = makePaintedShapeGroups(from: paintedSemanticColors)

return PlayerProgressValidationResult(
    missingCells: missingCells,
    extraCells: extraCells,
    invalidShapeGroups: invalidShapeGroups,
    adjacentConflicts: adjacentSemanticColorConflicts(...)
)`,
        code: `public func validate(
    stage: PuzzleStage,
    paintedSemanticColors: [GridPosition: SemanticColorID]
) -> PlayerProgressValidationResult {
    let playableCells = stage.playableCells
    let paintedCells = Set(paintedSemanticColors.keys)

    let missingCells = playableCells.subtracting(paintedCells)
    let extraCells = paintedCells.subtracting(playableCells)
    let expectedPlacementCells = stage.placements.map {
        $0.occupiedCells(for: stage.baseShape)
    }

    let paintedGroups = makePaintedShapeGroups(from: paintedSemanticColors)
    var coveredPlacements: [CoveredShapePlacement] = []
    var invalidShapeGroups: [PaintedShapeGroup] = []

    for group in paintedGroups {
        if let placementIndex = expectedPlacementCells.firstIndex(of: group.cells) {
            coveredPlacements.append(
                CoveredShapePlacement(
                    placementIndex: placementIndex,
                    semanticColorID: group.semanticColorID,
                    cells: group.cells
                )
            )
        } else {
            invalidShapeGroups.append(group)
        }
    }

    let placementSemanticColors = semanticColorsByPlacement(
        expectedPlacementCells: expectedPlacementCells,
        paintedSemanticColors: paintedSemanticColors
    )
    let adjacentConflicts = adjacentSemanticColorConflicts(
        expectedPlacementCells: expectedPlacementCells,
        placementSemanticColors: placementSemanticColors
    )

    return PlayerProgressValidationResult(
        expectedPlacementCount: stage.placements.count,
        missingCells: missingCells,
        extraCells: extraCells,
        coveredPlacements: coveredPlacements,
        invalidShapeGroups: invalidShapeGroups,
        adjacentConflicts: adjacentConflicts
    )
}`,
      },
      {
        title: "Adjacent Color Conflict 탐지",
        source:
          "DrawingPuzzle/PuzzleKit/Sources/PuzzleKit/PlayerProgressValidator.swift",
        description:
          "사용자 색상은 자유롭게 선택하되, 인접한 정답 shape가 같은 의미 색으로 합쳐지는 경우를 규칙 위반으로 잡아냅니다.",
        printCode: `for neighbor in cell.orthogonalNeighbors {
    guard let neighborIndex = placementIndexByCell[neighbor],
          neighborIndex != placementIndex,
          placementSemanticColors[neighborIndex] == semanticColorID
    else { continue }

    conflicts.insert(
        AdjacentSemanticColorConflict(
            firstPlacementIndex: min(placementIndex, neighborIndex),
            secondPlacementIndex: max(placementIndex, neighborIndex),
            semanticColorID: semanticColorID
        )
    )
}`,
        code: `private func adjacentSemanticColorConflicts(
    expectedPlacementCells: [Set<GridPosition>],
    placementSemanticColors: [Int: SemanticColorID]
) -> [AdjacentSemanticColorConflict] {
    var placementIndexByCell: [GridPosition: Int] = [:]

    for (index, cells) in expectedPlacementCells.enumerated() {
        for cell in cells {
            placementIndexByCell[cell] = index
        }
    }

    var conflicts: Set<AdjacentSemanticColorConflict> = []

    for (cell, placementIndex) in placementIndexByCell {
        guard let semanticColorID = placementSemanticColors[placementIndex] else {
            continue
        }

        for neighbor in cell.orthogonalNeighbors {
            guard let neighborPlacementIndex = placementIndexByCell[neighbor],
                  neighborPlacementIndex != placementIndex,
                  placementSemanticColors[neighborPlacementIndex] == semanticColorID else {
                    continue
            }

            conflicts.insert(
                AdjacentSemanticColorConflict(
                    firstPlacementIndex: min(placementIndex, neighborPlacementIndex),
                    secondPlacementIndex: max(placementIndex, neighborPlacementIndex),
                    semanticColorID: semanticColorID
                )
            )
        }
    }

    return conflicts.sorted {
        $0.firstPlacementIndex == $1.firstPlacementIndex
            ? $0.secondPlacementIndex < $1.secondPlacementIndex
            : $0.firstPlacementIndex < $1.firstPlacementIndex
    }
}`,
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
          "서버 setup 과정이 `migrate → import-cards → run`으로 정리되어 데이터 초기화와 재실행 흐름을 설명할 수 있게 됐습니다.",
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
