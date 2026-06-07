export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: '2025',
    title: 'Naver Boostcamp Web·Mobile 10기 iOS 트랙',
    description: 'iOS 실무형 학습과 팀 프로젝트를 통해 제품 기획, 구현, 테스트, 배포 흐름을 경험했습니다.',
    points: [
      'UIKit, SwiftUI, Swift Concurrency, Firebase 기반 앱 개발 실습',
      '코드 리뷰와 PR 중심 협업 프로세스 경험',
      'Damago 팀 프로젝트에서 출시와 운영 단계까지 참여',
    ],
    tags: ['iOS', 'Team Project', 'Code Review'],
  },
  {
    period: '2025 - 2026',
    title: 'Damago 실서비스 팀 프로젝트',
    description: '커플 소통 iOS 앱의 클라이언트 구조, Live Activity, 성능 개선, 크래시 대응을 담당했습니다.',
    points: [
      'Local-First 흐름과 AsyncStream 기반 상태 동기화 구현',
      'Instruments로 렌더링 병목을 분석하고 Core Animation Commit/GPU Hitch 감소',
      'App Store 출시 이후 사용자 제보 기반 크래시 원인 분석과 PR 반영',
    ],
    tags: ['Released', 'SwiftData', 'ActivityKit', 'CI/CD'],
  },
  {
    period: '2020.03 - 2026.08 졸업예정',
    title: '아주대학교 학사 · 수학 / 소프트웨어 복수전공',
    description: '아주대학교에서 수학과 소프트웨어를 복수전공하며 문제 구조화와 구현 역량을 함께 쌓았습니다.',
    points: [
    ],
    tags: ['Math', 'Software', 'CS Fundamentals'],
  },
  {
    period: 'Certification',
    title: 'SQLD 자격증',
    description: '데이터 모델링과 SQL 활용 역량을 검증하기 위해 SQLD 자격을 취득했습니다.',
    points: ['서버/API 협업과 데이터 흐름 이해를 보완하는 기반 지식 확보'],
    tags: ['SQL', 'Database'],
  },
  {
    period: '2024.06.12',
    title: '제 4회 산업수학 프로그래밍 경진대회 3위',
    description:
      '아주대학교 수학과 소학회 MiC 및 산업수학통계센터 공동 주관 경진대회에서 알고리즘 문제 해결로 3위를 수상했습니다.',
    points: ['수여기관: 아주대학교 산업수학통계센터'],
    tags: ['Award', 'Algorithm', 'Industrial Math'],
  },
  {
    period: '2025.05.17',
    title: '2025 아주 프로그래밍 경시대회 Div.2 우수상',
    description:
      '아주대학교 SW중심대학사업단 주관 프로그래밍 경시대회 Div.2에서 알고리즘 문제 해결 능력을 바탕으로 우수상을 수상했습니다.',
    points: ['수여기관: 아주대학교 SW중심대학사업단'],
    tags: ['Award', 'Algorithm', 'Problem Solving'],
  },
];
