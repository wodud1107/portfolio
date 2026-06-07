export interface StackGroup {
  title: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Language',
    items: ['Swift', 'C', 'Python'],
  },
  {
    title: 'iOS / Apple',
    items: ['SwiftUI', 'UIKit', 'SwiftData', 'ActivityKit', 'Combine', 'AsyncStream'],
  },
  {
    title: 'Architecture',
    items: ['MVVM', 'Clean Architecture', 'SPM', 'Local-First', 'Swift Testing'],
  },
  {
    title: 'Backend / Data',
    items: ['Firebase', 'Cloud Functions', 'Vapor', 'REST API', 'DB Migration'],
  },
  {
    title: 'Tools',
    items: ['Xcode', 'Instruments', 'GitHub Actions', 'Fastlane'],
  },
];
