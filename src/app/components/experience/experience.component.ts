import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = [
    {
      role: 'Software Engineer / Full-Stack Developer',
      company: 'Mazalat Riyadh',
      period: '2024 – Present',
      description: 'Developed and shipped a production-ready business website using Next.js, serving customers with real-time booking and service information.',
      achievements: [
        'Built a full-featured business platform with Next.js, React, and TypeScript',
        'Implemented server-side rendering and optimized SEO, boosting organic traffic',
        'Designed and integrated RESTful APIs with backend systems for seamless data flow',
        'Delivered the project on schedule, meeting all client requirements and quality standards',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'REST API', 'SSR', 'SEO'],
    },
    {
      role: 'Mobile & Backend Developer',
      company: 'Freelance / Independent Projects',
      period: '2021 – 2024',
      description: 'Built cross-platform mobile applications and backend services for clients in logistics, services, and enterprise management.',
      achievements: [
        'Developed Flutter mobile apps with real-time sync, offline support, and push notifications',
        'Built scalable Django REST APIs handling thousands of daily requests',
        'Designed PostgreSQL database schemas with optimized indexes and query performance',
        'Containerized services with Docker and configured CI/CD pipelines for reliable deployments',
      ],
      technologies: ['Flutter', 'Dart', 'Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Docker'],
    },
    {
      role: 'Junior Software Developer',
      company: 'IT Engineer Projects',
      period: '2019 – 2021',
      description: 'Gained hands-on experience in full-stack development, working with Python web frameworks and designing data-driven applications.',
      achievements: [
        'Built CRMs and admin dashboards with Django and Angular',
        'Implemented authentication, role-based access, and audit logging',
        'Collaborated in Agile teams, practicing code review and test-driven development',
      ],
      technologies: ['Python', 'Django', 'Angular', 'TypeScript', 'SQL', 'Git'],
    },
  ];
}
