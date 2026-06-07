# Jaeyoung Portfolio

Vue 3, Vite, TypeScript 기반의 김재영 개발자 포트폴리오 웹사이트입니다.

## Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- Plain CSS

## Routes

- `/`
- `/projects`
- `/projects/:slug`
- `/experience`
- `/writing`
- `/print`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel Deploy

Vercel에서 이 폴더를 프로젝트 루트로 선택하면 됩니다.

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## PDF Versioning

`/print` 페이지에서 브라우저 인쇄 기능을 사용해 PDF로 저장합니다.
인쇄 스타일은 A4 기준으로 압축되어 있으며, 전체 포트폴리오가 최대 10페이지 안에 들어가도록 긴 설명을 요약형으로 구성했습니다.

## Content Editing

프로젝트, 경험, 글, 연락처 데이터는 아래 파일에서 수정합니다.

- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/writings.ts`
- `src/data/contact.ts`

이미지는 `public/assets`에 넣고 `/assets/file-name.ext` 형태로 링크하면 됩니다.
