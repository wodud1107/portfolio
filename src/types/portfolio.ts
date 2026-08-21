export const PROJECT_CATEGORIES = [
    'iOS',
    'Android',
    'Frontend',
    'Backend',
    'Product',
    'Performance',
    'Architecture',
] as const;

export const PROJECT_FILTERS = ['All', ...PROJECT_CATEGORIES] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export type ProjectStatus = 'Released' | 'In Progress' | 'MVP' | 'Prototype' | 'Coursework';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectHighlight {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectScreenshot {
    src: string;
    alt: string;
    caption: string;
    type?: 'phone' | 'wide';
    group?: 'product' | 'performance';
    notes?: string[];
}

export interface ProjectDecisionStory {
    title: string;
    problem: string;
    decision: string;
    result: string;
    collaborationNote?: string;
    image?: {
        src: string;
        alt: string;
        caption?: string;
    };
    links?: ProjectLink[];
}

export interface Project {
    slug: string;
    name: string;
    summary: string;
    role: string;
    period: string;
    status: ProjectStatus;
    featured: boolean;
    categories: ProjectCategory[];
  tags: string[];
  keywords: string[];
  links: ProjectLink[];
  highlights?: ProjectHighlight[];
    featuredSummary?: string;
    overview: string[];
    problem: string[];
    roleDetails: string[];
    decisionStories?: ProjectDecisionStory[];
    screenshots?: ProjectScreenshot[];
}

export interface Credential {
  title: string;
  type: string;
  image: string;
}
