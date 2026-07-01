export const PROJECT_CATEGORIES = [
    'iOS',
    'Frontend',
    'Backend',
    'Product',
    'Performance',
] as const;

export const PROJECT_FILTERS = ['All', ...PROJECT_CATEGORIES] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export type ProjectStatus = 'Released' | 'MVP' | 'Prototype' | 'Coursework';

export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectDetailSection {
    title: string;
    items: string[];
    links?: ProjectLink[];
}

export interface ProjectScreenshot {
    src: string;
    alt: string;
    caption: string;
    type?: 'phone' | 'wide';
    group?: 'product' | 'performance';
    notes?: string[];
}

export interface ProjectCodeSnippet {
    title: string;
    storyTitle?: string;
    source: string;
    description: string;
    code: string;
    printCode?: string;
}

export interface ProjectDecisionStory {
    title: string;
    problem: string;
    result: string;
    image?: {
        src: string;
        alt: string;
        caption?: string;
    };
    links?: ProjectLink[];
}

export interface ProjectRoleGroup {
    title: string;
    items: string[];
}

export interface ProjectRelatedWriting {
    title: string;
    description: string;
    link: ProjectLink;
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
    featuredSummary?: string;
    overview: string[];
    problem: string[];
    roleDetails: string[];
    roleBreakdown?: ProjectRoleGroup[];
    decisionStories?: ProjectDecisionStory[];
    screenshots?: ProjectScreenshot[];
    codeSnippets?: ProjectCodeSnippet[];
    relatedWriting?: ProjectRelatedWriting;
    extraSections?: ProjectDetailSection[];
}