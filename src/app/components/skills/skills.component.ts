import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categoryTitle = 'Technical Skills';

  readonly skills: { category: string; items: string[] }[] = [
    { category: 'Programming Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Dart'] },
    { category: 'Frontend', items: ['Angular', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'] },
    { category: 'Backend', items: ['Django', 'FastAPI', 'REST APIs', 'GraphQL', 'Authentication', 'WebSockets'] },
    { category: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android', 'Cross-Platform'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Database Design', 'Query Optimization'] },
    { category: 'DevOps & Tools', items: ['Docker', 'CI/CD', 'Linux', 'Nginx', 'AWS', 'GitHub Actions'] },
    { category: 'Version Control', items: ['Git', 'GitHub', 'GitFlow', 'Code Review'] },
    { category: 'Software Architecture', items: ['Clean Architecture', 'Microservices', 'API Design', 'System Design'] },
  ];

  readonly softSkills = [
    'Problem Solving',
    'Communication',
    'Team Leadership',
    'Agile & Scrum',
    'Time Management',
    'Continuous Learning',
    'Attention to Detail',
    'Client Collaboration',
  ];
}
