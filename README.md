# Portfolio

Vue 3, Vite, Tailwind CSS로 만든 김재영 개발자 포트폴리오 웹사이트입니다. Damago, Puzzole, Tikkle의 문제 해결 과정과 오픈소스 기여, 경험·기술 이력을 한 곳에서 관리합니다.

## 주요 기능

- 프로젝트 카드와 상세 페이지를 분리한 포트폴리오 구성
- 프로젝트별 Problem / Decision / Result 중심의 의사결정 기록과 PR 링크
- Kingfisher 오픈소스 기여 및 프로젝트별 설치·저장소 링크
- A4 PDF 저장을 위한 통합 인쇄 페이지
- GitHub Pages SPA 라우팅을 고려한 Vite 설정

## 기술 스택

- Vue 3
- Vite
- TypeScript
- Vue Router
- Tailwind CSS v4

## 실행

```bash
npm install
npm run dev
npm run preview
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist`에 생성됩니다. GitHub Pages에서 SPA 라우팅이 동작하도록 `dist/index.html`을 `dist/404.html`로 복사합니다.

## 라우트

- `/`
- `/projects`
- `/projects/:slug`
- `/print`

기존 `/print/ios`, `/print/general`, `/print/android` 경로는 모두 `/print`로 이동합니다.

## 데이터 관리

- 프로젝트 데이터: `src/data/projects.ts`
- 경험 및 수상 데이터: `src/data/experience.ts`
- 기술 스택 데이터: `src/data/techStack.ts`
- 연락처 데이터: `src/data/contact.ts`
- 오픈소스 기여 데이터: `src/data/openSourceContributions.ts`

정적 이미지는 `public/assets`에 두고 사용합니다.
