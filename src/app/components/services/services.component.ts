import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = [
    { title: 'Full-Stack Development', description: 'End-to-end web applications built with modern, scalable architectures across frontend and backend.' },
    { title: 'Backend Development', description: 'RESTful APIs and microservices with Python, Django, and FastAPI designed for performance and reliability.' },
    { title: 'Mobile App Development', description: 'Cross-platform mobile apps with Flutter that deliver native-like experiences on iOS and Android.' },
    { title: 'Frontend Development', description: 'Modern, responsive UIs with Angular and Next.js that convert visitors into users.' },
    { title: 'Database Design', description: 'Optimized relational and database schemas using PostgreSQL and MySQL for data integrity and speed.' },
    { title: 'System Architecture', description: 'System design, modular architecture, and DevOps practices that make software production-ready and maintainable.' },
    { title: 'Deployment', description: 'Dockerized deployments and CI/CD workflows that ship features faster with confidence.' },
  ];
}
