export interface ContactLink {
  label: string;
  value: string;
  href?: string;
  note?: string;
}

export type ContactLabel = 'Email' | 'GitHub' | 'Blog';

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'wodud7992@naver.com',
    href: 'mailto:wodud7992@naver.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/wodud1107',
    href: 'https://github.com/wodud1107',
  },
  {
    label: 'Blog',
    value: 'thinkartic1107.tistory.com',
    href: 'https://thinkartic1107.tistory.com/',
  },
];

export function findContact(label: ContactLabel) {
  return contactLinks.find((link) => link.label === label);
}