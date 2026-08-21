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
    items: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Vue 3', 'Tailwind CSS'],
  },
  {
    title: "Android",
    items: [
          "Kotlin", "Jetpack Compose", "ViewModel/StateFlow", "Canvas", "JVM Unit Test"],
  },
  {
    title: 'Backend / Data',
    items: ['Spring Boot', 'Spring Data JPA', 'JWT', 'OpenAPI', 'Flyway', 'MySQL', 'Redis', 'Firebase', 'Cloud Tasks'],
  },
];
