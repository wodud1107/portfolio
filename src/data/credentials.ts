import { publicAsset } from './assets';
import type { Credential } from '../types/portfolio';

export const credentials: Credential[] = [
  {
    title: 'Naver Boostcamp Web·Mobile 10기 iOS 과정',
    type: '수료증',
    image: publicAsset('assets/experience/previews/boostcamp.jpg'),
  },
  {
    title: 'SQLD',
    type: '자격증',
    image: publicAsset('assets/experience/previews/sqld.jpg'),
  },
];