export interface ExperienceItem {
  period: string;
  title: string;
  description?: string;
  points?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: '2025',
    title: 'Naver Boostcamp Web·Mobile 10기 iOS 트랙',
    description: 'iOS 실무형 학습과 팀 프로젝트를 통해 제품 기획, 구현, 테스트, 배포 흐름을 경험했습니다.',
  },
  {
    period: '2020.03 - 2026.08 졸업',
    title: '아주대학교 학사 · 수학 / 소프트웨어 복수전공',
  },
  {
    period: '2025.04.04',
    title: 'SQLD 자격증',
  },
  {
    period: '2024.06.12',
    title: '제 4회 산업수학 프로그래밍 경진대회 3위',
    description:
      '아주대학교 수학과 소학회 MiC 및 산업수학통계센터 공동 주관 경진대회에서 알고리즘 문제 해결로 3위를 수상했습니다.',
    points: ['수여기관: 아주대학교 산업수학통계센터'],
  },
  {
    period: '2025.05.17',
    title: '2025 아주 프로그래밍 경시대회 Div.2 우수상',
    description:
      '아주대학교 SW중심대학사업단 주관 프로그래밍 경시대회 Div.2에서 알고리즘 문제 해결 능력을 바탕으로 우수상을 수상했습니다.',
    points: ['수여기관: 아주대학교 SW중심대학사업단'],
  },
];
