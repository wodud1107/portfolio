# Portfolio

Vue 3와 Vite로 만든 김재영 개발자 포트폴리오 웹사이트입니다. 프로젝트 경험, 기술 스택, 수상 및 교육 이력을 한 곳에서 관리할 수 있도록 구성했습니다.

## 주요 기능

- 프로젝트 카드와 상세 페이지를 분리한 포트폴리오 구성
- 프로젝트별 Problem / Decision / Result 중심의 의사결정 기록
- 이미지 캐러셀과 코드 스니펫 모달 제공
- GitHub Pages 배포 경로를 고려한 Vite base 설정

## 기술 스택

- Vue 3
- Vite
- TypeScript
- Vue Router
- Plain CSS

## 실행

```bash
npm install
npm run dev
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

## 데이터 관리

- 프로젝트 데이터: `src/data/projects.ts`
- 경험 및 수상 데이터: `src/data/experience.ts`
- 기술 스택 데이터: `src/data/techStack.ts`
- 연락처 데이터: `src/data/contact.ts`

정적 이미지는 `public/assets`에 두고 사용합니다.
