export interface OpenSourceContribution {
  project: string;
  title: string;
  status: string;
  summary: string;
  printSummary: string;
  href: string;
  mergeHref?: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: "Kingfisher",
    title: "SwiftUI KFImage 레이아웃 수정 및 전환 회귀 검증",
    status: "Included in merged PR #2555",
    summary:
      "Kingfisher #2533을 재현하고 KFImageRenderer와 ImageBinder의 상태 전이를 추적해, 빈 이미지 브랜치가 placeholder와 onFailureView의 레이아웃에 영향을 주는 문제를 수정했습니다. 리뷰 과정에서 fade, load transition, 외부 transition과 callback 순서의 회귀 가능성을 재현하고 테스트와 데모 검증으로 보완했습니다. 이후 maintainer가 fade 중 이미지 크기도 함께 변하는 scaling 부작용을 추가로 수정했으며, 제 변경을 포함한 후속 PR #2555가 최종 병합되었습니다.",
    printSummary:
      "#2533을 재현해 빈 이미지 브랜치가 placeholder·failure 레이아웃에 영향을 주는 문제를 수정했습니다. fade·load transition, 외부 transition과 callback 순서를 회귀 테스트와 데모로 검증했으며, maintainer의 scaling 보완을 포함한 후속 PR #2555에 반영되어 병합되었습니다.",
    href: "https://github.com/onevcat/Kingfisher/pull/2550",
    mergeHref: "https://github.com/onevcat/Kingfisher/pull/2555",
  },
];
