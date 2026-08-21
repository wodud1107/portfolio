import { publicAsset } from './assets';
import type { Project } from '../types/portfolio';

export type {
  Project,
  ProjectDecisionStory,
  ProjectScreenshot,
} from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'damago',
    name: 'Damago',
    summary:
      '출시 iOS 앱에서 상태 지연과 렌더링 병목을 측정하고, 사용 흐름의 안정성과 피드백 속도를 개선한 팀 프로젝트',
    role: 'iOS Client Developer',
    period: '2025.12 - 2026.02',
    status: 'Released',
    featured: true,
    categories: ['iOS', 'Product', 'Performance'],
    tags: ['Team Project', 'Released', 'iOS'],
    keywords: ['SwiftUI', 'SwiftData', 'AsyncStream', 'ActivityKit', 'Instruments'],
    highlights: [
      { label: 'Live Activity 상태 반영', value: '0.918초 → 0.031초' },
      { label: '최종 렌더링 개선', value: 'Commit 3,175 → 2,411' },
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/kr/app/%EB%8B%A4%EB%A7%88%EA%B3%A0/id6758383282',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/boostcampwm2025/ios02-damago',
      },
    ],
    featuredSummary:
      '반복 조회 화면은 로컬 상태를 먼저 보여주고, Live Activity는 앱을 열지 않아도 상태를 이어 보여주도록 구성했습니다. 이후 Instruments 측정으로 성능과 유지보수성의 균형을 맞췄습니다.',
    overview: [
      '커플 상호작용을 잠금화면과 Dynamic Island까지 이어 보이는 출시 iOS 앱입니다.',
      'iOS 클라이언트 개발자로서 상태 동기화, Live Activity, 렌더링 성능, 테스트·출시 후 안정화에 참여했습니다.',
    ],
    problem: [
      '네트워크 응답을 기다리는 화면은 빈 상태와 늦은 피드백으로 이어질 수 있었습니다.',
      'Live Activity는 토큰 생명주기와 상태 반영 경로를 함께 다뤄야 앱 밖에서도 신뢰할 수 있는 경험이 됐습니다.',
      '애니메이션 중 넓은 갱신 범위가 간헐적인 프레임 저하와 GPU Hitch를 만들었습니다.',
    ],
    roleDetails: [
      'SwiftData 기반 Local-First 흐름과 AsyncStream의 순차 전달 범위를 구현·조율했습니다.',
      'ActivityKit UI와 APNs push-to-start/update token의 서버 연결 흐름을 구현했습니다.',
      'Instruments 계측, 핵심 ViewModel 회귀 테스트, CI와 출시 후 크래시 대응에 참여했습니다.',
    ],
    decisionStories: [
      {
        title: '반복 조회를 위한 Local-First 상태 동기화',
        problem: '같은 질문과 답변을 다시 볼 때마다 서버를 기다리면 화면이 비거나, 답변 직후 바뀐 상태를 바로 확인하기 어려웠습니다.',
        decision: 'SwiftData를 로컬 상태의 기반으로 두고, 로컬 결과 뒤에 서버 응답을 전달해야 하는 Data 계층에만 AsyncStream을 적용했습니다. 실시간 감지처럼 Combine이 맞는 흐름은 유지했습니다.',
        result: '화면 진입 시 로컬 상태를 먼저 제공하고 답변 직후에도 화면을 갱신했습니다. Local-First 설계와 전달 수단의 책임을 분리해 비동기 흐름을 읽기 쉽게 만들었습니다.',
        collaborationNote: '기존 Combine 흐름을 전면 교체하지 않고, 적용 기준을 PR 리뷰와 팀 논의로 합의했습니다.',
        image: {
          src: publicAsset('assets/damago/local-first-pipeline.png'),
          alt: 'Damago Local-First 상태 동기화 파이프라인',
        },
        links: [
          { label: 'PR #217', href: 'https://github.com/boostcampwm2025/ios02-damago/pull/217' },
        ],
      },
      {
        title: 'Live Activity의 원격 상태 흐름',
        problem: '앱을 열지 않아도 공동 캐릭터 상태를 이어 보이려면 화면 구현뿐 아니라 활동 시작·갱신 토큰과 체감 지연을 함께 해결해야 했습니다.',
        decision: 'ActivityKit UI를 구현하고 push-to-start/update token을 서버 등록 흐름에 연결했습니다. 별도로 불필요한 대기와 전달 단계를 줄여 상태 업데이트 경로를 정리했습니다.',
        result: '서버 이벤트로 Live Activity를 시작·갱신할 기반을 만들고, 상태 반영 시간은 0.918초에서 0.031초로 줄였습니다.',
        links: [
          { label: 'PR #274', href: 'https://github.com/boostcampwm2025/ios02-damago/pull/274' },
        ],
      },
      {
        title: '측정값과 유지보수성 사이의 렌더링 선택',
        problem: '뽑기 애니메이션에서 Core Animation Commit과 GPU Hitch가 누적돼 화면 전환이 끊겼습니다.',
        decision: 'Instruments로 병목을 측정한 뒤 명령형 애니메이션 실험과 SwiftUI KeyframeAnimator 최종안을 비교했습니다.',
        result: '실험안은 Commit 3,175회→166회, GPU Hitch 10회→1회까지 확인했습니다. 최종 적용안은 선언형 UI의 유지보수성을 고려해 Commit 2,411회·GPU Hitch 7회로 개선했습니다.',
        links: [
          { label: 'PR #342', href: 'https://github.com/boostcampwm2025/ios02-damago/pull/342' },
        ],
      },
    ],
    screenshots: [
      {
        src: publicAsset('assets/damago/readme-1.jpg'),
        alt: 'Damago 홈 화면',
        caption: '공동 캐릭터 상태와 상호작용을 확인하는 홈 화면',
        type: 'phone',
        group: 'product',
      },
      {
        src: publicAsset('assets/damago/readme-4.jpg'),
        alt: 'Damago Dynamic Island 화면',
        caption: '앱 밖에서도 이어지는 Dynamic Island 상호작용',
        type: 'phone',
        group: 'product',
      },
      {
        src: publicAsset('assets/damago/instruments-before.jpg'),
        alt: 'Damago 렌더링 성능 개선 전 Instruments 화면',
        caption: '개선 전: Core Animation Commit 3,175회 / GPU Hitch 10회',
        type: 'wide',
        group: 'performance',
      },
      {
        src: publicAsset('assets/damago/instruments-final-declarative.png'),
        alt: 'Damago 선언형 UI 최종안 Instruments 화면',
        caption: '최종 적용안: Commit 2,411회 / GPU Hitch 7회',
        type: 'wide',
        group: 'performance',
      },
    ],
  },
  {
    slug: 'puzzole',
    name: 'Puzzole',
    summary:
      '정답 유일성이 검증된 퍼즐 경험을 iOS에서 만들고, 같은 제품의 핵심 규칙과 흐름을 Android까지 확장한 개인 프로젝트',
    role: 'Solo Product Developer',
    period: '2026.05 - Present',
    status: 'Released',
    featured: true,
    categories: ['iOS', 'Android', 'Product', 'Architecture'],
    tags: ['Personal Product', 'iOS Review Pending', 'Google Play Released'],
    keywords: ['SwiftUI', 'UIKit', 'Kotlin', 'Jetpack Compose', 'ViewModel / StateFlow'],
    highlights: [
      { label: '검증 후 포함한 스테이지', value: '1,000개' },
      { label: 'Android 배포 상태', value: 'Google Play 출시' },
    ],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.kjy.puzzole',
      },
      { label: 'GitHub', href: 'https://github.com/wodud1107/Puzzole' },
    ],
    featuredSummary:
      'iOS 버전은 심사 결과를 기다리고 있으며, Android는 Google Play에 출시했습니다. 한 제품의 퍼즐 규칙과 진행 흐름을 중심에 두고, 플랫폼마다 달라지는 UI와 상태 관리의 경계를 나눴습니다.',
    overview: [
      '셀을 칠해 반복 도형 해답을 완성하는 개인 퍼즐 제품입니다.',
      '정답 유일성 검증, 힌트·완료 판정의 공통 기준, 로컬 진행 저장을 먼저 설계한 뒤 Android 확장까지 진행했습니다.',
    ],
    problem: [
      '여러 해답이 가능한 스테이지는 힌트와 완료 판정의 신뢰성을 흔들 수 있었습니다.',
      '큰 보드에서 칠하기와 화면 탐색을 함께 제공하려면 입력 우선순위를 분리해야 했습니다.',
      '전체 앱을 한 번에 포팅하면 Android 학습과 구현 범위가 동시에 커질 수 있었습니다.',
    ],
    roleDetails: [
      '대체 풀이를 탐색하는 검증으로 정답 유일성을 통과한 스테이지 1,000개를 앱에 포함했습니다.',
      'iOS에서 SwiftUI 화면과 UIKit 보드의 입력 책임을 나누고, 로컬 진행 저장으로 v1 흐름을 구성했습니다.',
      'Android에서는 도메인 규칙·데이터 변환·플레이 상태·UI를 Vertical Slice로 나누어 구현하고 검증했습니다.',
    ],
    decisionStories: [
      {
        title: '정답이 하나인 스테이지 카탈로그',
        problem: '같은 보드를 여러 방식으로 풀 수 있으면 힌트와 완료 판정이 서로 다른 기준을 가질 수 있었습니다.',
        decision: '생성 뒤 다른 해답의 존재를 탐색하고, 정답 유일성을 통과한 스테이지만 카탈로그에 포함했습니다. 생성 시점의 목표 배치를 힌트와 완료 판정의 공통 기준으로 삼았습니다.',
        result: '서버 없이도 검증된 스테이지 1,000개를 제공하고, 힌트와 완료 판정이 같은 기준으로 동작하게 했습니다.',
      },
      {
        title: 'v1 범위와 보드 입력 경계',
        problem: '첫 버전에 계정·서버 동기화를 넣으면 퍼즐 경험보다 네트워크·개인정보·심사 리스크가 먼저 커질 수 있었고, 큰 보드의 조작은 스크롤과 충돌할 수 있었습니다.',
        decision: 'v1은 로컬 스테이지와 진행 저장으로 제한했습니다. SwiftUI 화면과 UIKit 보드의 책임을 나누고 한 손가락 칠하기, 두 손가락 이동·확대, 미니맵 탐색을 구분했습니다.',
        result: '오프라인에서도 선택→플레이→힌트→완료 저장→다음 스테이지 흐름이 이어지고, 직접 조작과 화면 탐색이 서로 간섭하지 않게 했습니다.',
      },
      {
        title: '전면 포팅 대신 Android Vertical Slice',
        problem: 'iOS 앱 전체를 Android로 한 번에 옮기면 구현량이 커져 핵심 규칙과 구조 검증이 뒤로 밀릴 수 있었습니다.',
        decision: '규칙·검증·카탈로그·플레이 상태·UI 통합을 작은 slice로 나눴습니다. 순수 Kotlin domain, DTO 변환, ViewModel·StateFlow, suspend Repository, Canvas 좌표 변환을 단계적으로 보강했습니다.',
        result: '기존 stage asset으로 load→play→validation→progress 흐름을 확인하고 Google Play에 출시했습니다. Canvas/pointerInput은 완성 UI가 아닌 보드 상호작용과 좌표 변환의 검증 범위로 남겼습니다.',
      },
    ],
    screenshots: [
      {
        src: publicAsset('assets/puzzole/v1-stage-selection.png'),
        alt: 'Puzzole 스테이지 선택 화면',
        caption: '검증된 스테이지 목록과 진행 상태를 연결한 선택 화면',
        type: 'wide',
        group: 'product',
      },
      {
        src: publicAsset('assets/puzzole/v1-play-minimap.png'),
        alt: 'Puzzole 미니맵 플레이 화면',
        caption: '칠하기와 화면 탐색의 입력 경계를 나눈 큰 보드 플레이',
        type: 'wide',
        group: 'product',
      },
      {
        src: publicAsset('assets/puzzole/v1-completion.png'),
        alt: 'Puzzole 완료 화면',
        caption: '완료 저장과 다음 스테이지 해금 흐름',
        type: 'wide',
        group: 'product',
      },
    ],
  },
  {
    slug: 'tikkle',
    name: 'Tikkle',
    summary:
      'React·Zustand 클라이언트와 Spring Boot 기반 인증·콘서트 조회 API를 함께 구현하고 있는 팀 프로젝트',
    role: 'Full-stack Developer · Team Project',
    period: '2026.08 - Present',
    status: 'In Progress',
    featured: true,
    categories: ['Frontend', 'Backend', 'Product'],
    tags: ['Team Project', 'In Progress', 'Full Stack'],
    keywords: ['React', 'TypeScript', 'Zustand', 'Spring Boot', 'Kotlin', 'Spring Security', 'JWT', 'OpenAPI', 'Flyway'],
    highlights: [
      { label: 'Client', value: 'URL 기반 필터 상태' },
      { label: 'Server', value: '인증·콘서트 조회 API' },
      { label: 'Quality', value: '단위·통합 테스트' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tikkle-moa/tikkle' },
    ],
    featuredSummary:
      '진행 중인 그룹 콘서트 예매 서비스입니다. React·Zustand 클라이언트의 필터 상태와 Spring Boot 서버의 인증·콘서트 조회 흐름을 구현하고, 각 경계를 테스트로 검증했습니다.',
    overview: [
      'React·TypeScript 클라이언트와 Kotlin·Spring Boot 서버로 구성한 협업 프로젝트입니다.',
      '클라이언트에서는 콘서트 목록 필터의 URL 상태와 반응형 UI를, 서버에서는 인증과 콘서트 목록·상세 조회 API를 구현했습니다.',
    ],
    problem: [
      '장르·예매 상태·기간을 조합하는 필터는 새로고침과 공유 뒤에도 같은 결과를 복원할 수 있어야 했습니다.',
      '데스크톱 고정 패널과 모바일 토글 패널은 화면은 달라도 같은 필터 상태와 동작을 공유해야 했습니다.',
      '인증 상태와 콘서트 데이터는 클라이언트가 사용할 API 계약, 데이터 모델, 테스트 경계를 함께 갖춰야 했습니다.',
    ],
    roleDetails: [
      '필터 값을 URL 쿼리와 동기화하고, 기존 검색어를 보존한 채 선택·해제·초기화되도록 구현했습니다.',
      'Spring Boot에서 현재 사용자 조회, Refresh Token 재발급·로그아웃, 콘서트 목록·상세 조회 API를 구현했습니다.',
      'Concert 엔티티·Repository·Flyway 마이그레이션과 OpenAPI 타입 연동을 구성하고, Controller·Service 단위 테스트와 인증 통합 테스트를 작성했습니다.',
    ],
    decisionStories: [
      {
        title: '필터 상태를 URL의 계약으로 관리',
        problem: '필터가 컴포넌트 내부 상태에만 있으면 새로고침이나 공유한 링크에서 사용자의 선택을 복원할 수 없었습니다.',
        decision: '장르·예매 상태·공연일을 URLSearchParams에 저장하고, 필터만 변경하거나 초기화해도 기존 검색어는 보존하도록 훅으로 분리했습니다.',
        result: '다중 선택, 날짜 범위, 초기화 이후에도 URL에서 같은 필터 상태를 복원할 수 있도록 테스트했습니다.',
        links: [
          { label: 'PR #95', href: 'https://github.com/tikkle-moa/tikkle/pull/95' },
        ],
      },
      {
        title: '토큰 재발급과 로그아웃의 인증 경계',
        problem: '세션이 만료되거나 사용자가 로그아웃할 때, 클라이언트가 인증 상태를 예측 가능하게 정리할 수 있는 서버 응답이 필요했습니다.',
        decision: 'Refresh Token의 식별자를 Redis TTL로 관리하고, 재발급 시 기존 값을 먼저 소진한 뒤 새 토큰을 발급했습니다. 로그아웃은 저장값과 인증 쿠키를 함께 만료하도록 구현했습니다.',
        result: 'Refresh·로그아웃 Controller·Service·Token Provider 단위 테스트와 인증·인가 통합 테스트로 토큰 흐름을 검증했습니다.',
        links: [
          { label: 'PR #46', href: 'https://github.com/tikkle-moa/tikkle/pull/46' },
        ],
      },
      {
        title: '콘서트 도메인을 조회 API로 연결',
        problem: '목록과 상세 화면이 공통된 콘서트 데이터 모델을 사용하려면 DB 스키마부터 응답 DTO, 클라이언트 타입까지 계약이 이어져야 했습니다.',
        decision: 'Concert 엔티티·Repository와 Flyway 마이그레이션을 구성하고, 목록·상세 조회를 Controller·Service·DTO로 분리했습니다. OpenAPI 생성 타입도 함께 동기화했습니다.',
        result: '콘서트 목록·상세 조회 API의 Controller·Service 테스트를 작성해 서버 규칙과 클라이언트 타입 경계를 함께 확인했습니다.',
        links: [
          { label: 'PR #82', href: 'https://github.com/tikkle-moa/tikkle/pull/82' },
          { label: 'PR #90', href: 'https://github.com/tikkle-moa/tikkle/pull/90' },
          { label: 'PR #93', href: 'https://github.com/tikkle-moa/tikkle/pull/93' },
        ],
      },
    ],
  },
];

export const featuredProjects = projects;
export const secondaryProjects: Project[] = [];

export function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
