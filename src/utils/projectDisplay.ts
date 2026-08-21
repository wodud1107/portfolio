import type { Project } from '../types/portfolio';

export function getProductScreenshots(project?: Project) {
    return project?.screenshots?.filter((screenshot) => screenshot.group !== 'performance') ?? [];
}

export function getPerformanceScreenshots(project?: Project) {
    return project?.screenshots?.filter((screenshot) => screenshot.group === 'performance') ?? [];
}
