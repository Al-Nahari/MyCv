import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categoryTitle = 'Technical Skills';

  readonly skills = {
    'Programming Languages': ['Python', 'TypeScript', 'JavaScript', 'Dart'],
    'Frontend': ['Angular', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'],
    'Backend': ['Django', 'FastAPI', 'REST APIs', 'GraphQL', 'Authentication', 'WebSockets'],
    'Mobile': ['Flutter', 'Dart', 'iOS', 'Android', 'Cross-Platform'],
    'Databases': ['PostgreSQL', 'MySQL', 'SQLite', 'Database Design', 'Query Optimization'],
    'DevOps & Tools': ['Docker', 'CI/CD', 'Linux', 'Nginx', 'AWS', 'GitHub Actions'],
    'Version Control': ['Git', 'GitHub', 'GitFlow', 'Code Review'],
    'Software Architecture': ['Clean Architecture', 'Microservices', 'API Design', 'System Design'],
  };

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
