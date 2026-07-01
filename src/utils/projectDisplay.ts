import type {
    Project,
    ProjectCodeSnippet,
    ProjectDecisionStory,
    ProjectScreenshot,
} from '../types/portfolio';

export function getRoleSectionTitle(project: Project) {
    return project.tags.includes('Personal Project')
        ? 'Implementation Scope'
        : 'My Role';
}

export function getProductScreenshots(project?: Project) {
    return project?.screenshots?.filter((screenshot) => screenshot.group !== 'performance') ?? [];
}

export function getPerformanceScreenshots(project?: Project) {
    return project?.screenshots?.filter((screenshot) => screenshot.group === 'performance') ?? [];
}

export function getScreenshotsByGroup(
    project: Project,
    group?: ProjectScreenshot['group'],
) {
    return project.screenshots?.filter((screenshot) => screenshot.group === group) ?? [];
}

export function getSnippetForStory(
    project: Project | undefined,
    story: ProjectDecisionStory,
    fallbackIndex: number,
) {
    return (
        project?.codeSnippets?.find((snippet) => snippet.storyTitle === story.title) ??
        project?.codeSnippets?.[fallbackIndex]
    )
}

export function getStorySnippets(
    project: Project,
    story: ProjectDecisionStory,
): ProjectCodeSnippet[] {
    const storyIndex = project.decisionStories?.indexOf(story) ?? -1;
    const snippet = project.codeSnippets?.find((snippet) => snippet.storyTitle ===  story.title) ??
                    project.codeSnippets?.[storyIndex];

    return snippet ? [snippet] : [];
}