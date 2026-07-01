const emphasisTerms = [
  "Local-First",
  "AsyncStream",
  "SwiftData",
  "ActivityKit",
  "Live Activity",
  "Dynamic Island",
  "Instruments",
  "Core Animation Commits",
  "GPU Hitch",
  "Cloud Tasks",
  "@MainActor",
  "App Store",
  "Release",
  "574.47초",
  "24%",
  "8.46초",
  "검증 한도 100000",
  "1000개 스테이지",
  "실패/복수 정답 0개",
  "출시 가능한 수준",
  "검증된 스테이지 1000개",
  "검증된 스테이지",
  "정답이 하나인 스테이지 1000개",
  "정답이 하나인 스테이지",
  "정답이 하나인 퍼즐 1000개",
  "정답이 하나인 퍼즐",
  "힌트와 완료 판정",
  "완료 판정",
  "로컬 진행 저장",
  "진행 저장",
  "서버 없이 동작",
  "서버 없이",
  "기기에 저장",
  "광고/구매 경계",
  "광고/구매",
  "입력 경계",
  "큰 보드 조작 경험",
  "큰 보드",
  "한 손가락 칠하기",
  "두 손가락 이동",
  "화면 이동/확대",
  "확대/축소",
  "미니맵 탐색",
  "미니맵 선택",
  "스테이지 품질",
  "생성 속도",
  "로컬 우선 경계",
  "구매 검증",
  "스테이지 팩",
  "진행 동기화",
  "핵심 플레이 흐름",
  "정답 검증 로직",
  "StageUniquenessAnalyzer",
  "AdCoordinator",
  "AdRemovalStore",
  "SwiftUI",
  "UIKit",
  "BoardViewportUIView",
  "minimap",
  "Vapor",
  "REST API",
  "DB migration",
  "DB Migration",
  "CSV import",
  "CSV 데이터 Import",
  "Vue",
  "Vue 3",
  "TypeScript",
  "GitHub Pages",
  "SPA fallback",
  "404.html",
].sort((a, b) => b.length - a.length);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const emphasisPattern = new RegExp(
  `(${emphasisTerms.map(escapeRegExp).join("|")})`,
  "g",
);

export function highlightPortfolioText(value: string) {
  return escapeHtml(value).replace(
    emphasisPattern,
    '<strong class="portfolio-emphasis">$1</strong>',
  );
}
