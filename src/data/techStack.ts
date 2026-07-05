export interface StackGroup {
  title: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Language',
    items: ['Swift', 'C', 'Python', 'TypeScript', 'Kotlin'],
  },
  {
    title: 'iOS',
    items: ['SwiftUI', 'UIKit', 'SwiftData', 'ActivityKit', 'Combine', 'AsyncStream'],
  },
  {
    title: 'Frontend',
    items: ['Vue 3', 'Vue Router', 'Vite', 'Plain CSS'],
  },
  {
    title: "Android",
    items: [
          "Kotlin", "Jetpack Compose", "ViewModel/StateFlow", "Canvas", "JVM Unit Test"],
  },
  {
    title: 'Backend / Data',
    items: ['Firebase', 'Cloud Functions', 'Vapor', 'REST API', 'DB Migration'],
  },
  {
    title: 'Architecture',
    items: ['MVVM', 'Clean Architecture', 'SPM', 'Local-First', 'Swift Testing'],
  },
  {
    title: 'Tools',
    items: ['Xcode', 'Instruments', 'GitHub Actions', 'GitHub Pages', 'Fastlane'],
  },
];
