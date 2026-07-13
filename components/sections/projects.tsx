'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Mazalat Riyadh',
    description: 'A production-ready real estate platform for listing and managing properties in Riyadh. Built with Next.js 14, featuring advanced search, property management dashboard, and responsive design.',
    longDescription: 'Full-stack real estate platform connecting property buyers and agents in Riyadh. Built with Next.js 14, TypeScript, Prisma ORM, and PostgreSQL. Features include advanced property search with filters, admin dashboard for agents, image galleries, contact management, and a responsive design optimized for mobile and desktop. Deployed on Vercel with CI/CD pipelines.',
    problem: 'Property agents in Riyadh lacked a modern, centralized platform to showcase listings and reach buyers efficiently. Existing solutions were outdated, slow, and not mobile-friendly.',
    solution: 'Built a modern, full-stack Next.js platform with a powerful admin dashboard, real-time search, and a responsive UI that works seamlessly across all devices.',
    features: [
      'Advanced property search with filters (price, location, type)',
      'Admin dashboard for agents to manage listings',
      'Image gallery with lazy loading and zoom',
      'Contact management and inquiry tracking',
      'SEO-optimized pages for better discoverability',
      'Mobile-responsive design',
    ],
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mazalat-riyadh.com',
    githubUrl: '#',
    color: 'from-blue-500 to-cyan-500',
    featured: true,
    role: 'Full-Stack Developer & Architect',
    results: 'Live production website serving real estate agents and buyers in Riyadh. Achieved fast load times, SEO optimization, and a modern user experience.',
    challenges: 'Optimizing search performance with large datasets, implementing secure image uploads, and ensuring mobile responsiveness across diverse devices.',
    lessonsLearned: 'Next.js App Router and server components significantly improve performance. Prisma ORM simplifies database operations while maintaining type safety.',
    architecture: 'Next.js 14 App Router with server components, Prisma ORM for database access, PostgreSQL for data storage, and Vercel for hosting with automatic deployments.',
  },
  {
    id: 2,
    title: 'E-Commerce Backend API',
    description: 'High-performance REST API for e-commerce platforms built with Django and Django REST Framework, featuring authentication, product management, and order processing.',
    longDescription: 'A robust, scalable backend API for e-commerce applications. Built with Django and Django REST Framework, featuring JWT authentication, product catalog management, shopping cart, order processing, payment integration, and comprehensive API documentation.',
    problem: 'Clients needed a secure, scalable backend to power their e-commerce platforms with complex product catalogs and order management.',
    solution: 'Developed a Django-based REST API with clean architecture, comprehensive authentication, and optimized database queries for high performance.',
    features: [
      'JWT-based authentication and authorization',
      'Product catalog with categories and variants',
      'Shopping cart and wishlist functionality',
      'Order management and tracking',
      'Payment gateway integration',
      'API documentation with Swagger/OpenAPI',
    ],
    tags: ['Django', 'Django REST Framework', 'Python', 'PostgreSQL', 'Docker', 'JWT'],
    techStack: ['Django', 'Django REST Framework', 'Python', 'PostgreSQL', 'Docker', 'JWT', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-green-600 to-emerald-500',
    featured: true,
    role: 'Backend Developer',
    results: 'Delivered a production-ready API handling thousands of requests daily with 99.9% uptime.',
    challenges: 'Implementing complex permission systems and optimizing database queries for large product catalogs.',
    lessonsLearned: 'Django&apos;s ORM and built-in admin interface accelerate development while maintaining code quality.',
    architecture: 'Django REST Framework with token-based authentication, PostgreSQL database, Redis for caching, and Docker for containerization.',
  },
  {
    id: 3,
    title: 'Flutter Delivery App',
    description: 'Cross-platform mobile application for delivery services built with Flutter, featuring real-time tracking, push notifications, and offline support.',
    longDescription: 'A cross-platform mobile app for delivery services built with Flutter and Dart. Features include real-time order tracking with Google Maps, push notifications, offline mode, user authentication, and a beautiful Material Design UI.',
    problem: 'Delivery businesses needed a single mobile app that works on both iOS and Android with real-time tracking and offline capabilities.',
    solution: 'Built a Flutter app with clean architecture, real-time location tracking, and offline-first data persistence using SQLite and Riverpod state management.',
    features: [
      'Real-time order tracking with Google Maps',
      'Push notifications for order updates',
      'Offline mode with local data persistence',
      'User authentication and profile management',
      'Payment integration',
      'Multi-language support (Arabic/English)',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Riverpod', 'SQLite'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Riverpod', 'SQLite', 'BLoC'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-sky-500 to-blue-500',
    featured: false,
    role: 'Mobile Developer',
    results: 'Delivered a cross-platform app with smooth performance on both iOS and Android, achieving 4.5+ star rating.',
    challenges: 'Managing state across complex screens and implementing real-time location updates efficiently.',
    lessonsLearned: 'Flutter&apos;s widget system enables building beautiful, performant apps from a single codebase.',
    architecture: 'Flutter with clean architecture, Riverpod for state management, Firebase for backend services, and Google Maps for location tracking.',
  },
  {
    id: 4,
    title: 'Angular Enterprise Dashboard',
    description: 'Comprehensive admin dashboard for enterprise resource planning built with Angular, featuring role-based access, data visualization, and real-time analytics.',
    longDescription: 'An enterprise-grade admin dashboard built with Angular 17 and TypeScript. Features include role-based access control (RBAC), real-time data visualization with Chart.js, drag-and-drop dashboard customization, and comprehensive reporting.',
    problem: 'Enterprise clients needed a powerful, customizable dashboard to manage operations, monitor KPIs, and visualize data in real-time.',
    solution: 'Developed an Angular-based dashboard with modular architecture, role-based access, and extensible widget system for custom reporting.',
    features: [
      'Role-based access control (RBAC)',
      'Real-time data visualization with Chart.js',
      'Drag-and-drop dashboard customization',
      'Comprehensive reporting and export',
      'Dark/light theme support',
      'Responsive design for tablets and desktops',
    ],
    tags: ['Angular', 'TypeScript', 'Chart.js', 'NgRx', 'RxJS', 'SCSS'],
    techStack: ['Angular 17', 'TypeScript', 'Chart.js', 'NgRx', 'RxJS', 'SCSS', 'Jest'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-red-500 to-rose-500',
    featured: false,
    role: 'Frontend Developer',
    results: 'Delivered a scalable dashboard used by 100+ enterprise users with customizable views and real-time analytics.',
    challenges: 'Managing complex state across multiple modules and optimizing performance with large datasets.',
    lessonsLearned: 'Angular&apos;s dependency injection and RxJS enable building maintainable, testable enterprise applications.',
    architecture: 'Angular 17 with standalone components, NgRx for state management, Chart.js for data visualization, and SCSS for styling.',
  },
]

function ProjectCard({ project, index, isActive, onClick }: { project: typeof projects[0]; index: number; isActive: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 group ${
        isActive ? 'border-[rgba(59,130,246,0.4)] shadow-2xl shadow-blue-500/10 scale-[1.02]' : 'hover:border-[rgba(255,255,255,0.15)]'
      }`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold mb-6`}>
        {project.featured && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
        {project.featured ? 'Featured Project' : 'Project'}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] group-hover:text-[#3b82f6] transition-colors">
        {project.title}
      </h3>

      <p className="text-[#a1a1aa] leading-relaxed mb-4">
        {project.description}
      </p>

      {project.problem && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#fafafa] mb-2">Problem</h4>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.problem}</p>
        </div>
      )}

      {project.solution && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#fafafa] mb-2">Solution</h4>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.solution}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] bg-[rgba(255,255,255,0.02)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#3b82f6] transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#3b82f6] transition-colors"
        >
          <Github size={16} />
          Source Code
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeProject === i}
              onClick={() => setActiveProject(i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mohammed-alnahari"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn inline-flex items-center gap-2"
          >
            <Github size={18} />
            View all on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
