import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = [
    {
      name: 'Mazalat Riyadh',
      url: 'https://mazalat-riyadh.com/',
      description: 'A production-ready business website for a services company in Riyadh, built with Next.js, featuring real-time booking, SEO optimization, and a modern user experience.',
      problem: 'The client needed a modern, SEO-friendly online presence to showcase services, manage bookings, and convert visitors into customers online.',
      solution: 'Built a fully responsive Next.js application with server-side rendering, dynamic routing, and CMS-driven content management, integrated with backend APIs for appointment booking.',
      features: [
        'Server-Side Rendering (SSR) with Next.js',
        'Dynamic routing and API routes',
        'Responsive design across all devices',
        'SEO optimization with meta tags and Open Graph',
        'Contact and booking forms',
        'Admin dashboard for content management',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Server Components', 'REST API', 'PostgreSQL'],
      results: 'Live at mazalat-riyadh.com with strong organic search visibility and client satisfaction.',
    },
    {
      name: 'Transport & Fleet Management System',
      description: 'A comprehensive backend system for managing transportation logistics, vehicle tracking, and driver operations.',
      problem: 'Logistics companies struggle with fragmented systems for vehicle monitoring, driver management, and dispatch operations.',
      solution: 'Designed and built a centralized Django REST API with PostgreSQL, supporting real-time data, role-based access, and reporting dashboards.',
      features: [
        'Real-time fleet monitoring',
        'Driver and vehicle management',
        'Automated dispatch and scheduling',
        'Role-based access control',
        'Advanced analytics and reporting',
        'Dockerized deployment',
      ],
      technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Angular'],
      results: 'Reduced operational overhead by ~40% with centralized tracking and reporting.',
    },
    {
      name: 'Mobile Banking Companion App',
      description: 'A Flutter mobile application for personal finance management with secure authentication and data synchronization.',
      problem: 'Users needed a unified mobile app to track finances, manage budgets, and access account info securely on the go.',
      solution: 'Built a cross-platform Flutter app with offline-first data, biometric authentication, and encrypted sync with the backend API.',
      features: [
        'Cross-platform Flutter app (iOS/Android)',
        'Biometric authentication',
        'Offline-first data with sync',
        'Secure API communication with FastAPI',
        'Real-time notifications',
        'Clean, intuitive UI',
      ],
      technologies: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'REST API'],
      results: 'App delivered with high code quality and maintained 99% crash-free rate in testing.',
    },
  ];
}
