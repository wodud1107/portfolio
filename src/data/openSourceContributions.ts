export interface OpenSourceContribution {
  project: string;
  title: string;
  status: string;
  summary: string;
  printSummary: string;
  href: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'Kingfisher',
    title: 'SwiftUI KFImage 레이아웃 회귀 수정',
    status: 'PR 검토 대기',
    summary:
      '이미지 로딩 전 placeholder 또는 onFailureView가 표시될 때 빈 이미지 브랜치가 레이아웃에 참여해 KFImage 영역이 커지는 이슈를 재현했습니다. ImageBinder와 KFImageRenderer 흐름을 따라 렌더링 조건을 좁히고, placeholder와 failure view 경로를 보장하는 회귀 테스트를 추가했습니다.',
    printSummary:
      '#2533 SwiftUI 레이아웃 버그를 재현해 KFImageRenderer의 렌더링 조건을 보완하고, placeholder와 onFailureView 회귀 테스트를 추가했습니다.',
    href: 'https://github.com/onevcat/Kingfisher/pull/2550',
  },
];
