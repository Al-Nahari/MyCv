import {
  Code2, Rocket, Users, Globe, Server, Smartphone, Layout, Database, Cloud, Boxes,
  LineChart, Cpu, Layers, GraduationCap, Award, Mail, Linkedin, Github,
} from 'lucide-react'

// Tech pill colors for the hero section
export const techPills = [
  { label: 'Next.js', color: 'from-orange-500 to-pink-500' },
  { label: 'Angular', color: 'from-red-500 to-rose-500' },
  { label: 'Django', color: 'from-emerald-500 to-lime-500' },
  { label: 'FastAPI', color: 'from-teal-400 to-cyan-500' },
  { label: 'Flutter', color: 'from-sky-500 to-blue-500' },
  { label: 'TypeScript', color: 'from-blue-600 to-indigo-500' },
  { label: 'Python', color: 'from-yellow-500 to-orange-500' },
  { label: 'PostgreSQL', color: 'from-indigo-500 to-purple-500' },
  { label: 'Docker', color: 'from-cyan-400 to-blue-500' },
  { label: 'AWS', color: 'from-orange-400 to-amber-500' },
]

export const aboutIcons = [Code2, Rocket, Users]
export const aboutGradients = ['from-orange-500 to-pink-500', 'from-fuchsia-500 to-purple-600', 'from-emerald-500 to-teal-500']

export const serviceIcons = [Globe, Server, Smartphone, Layout, Code2, Database, Boxes, Cloud, LineChart]
export const serviceGradients = [
  'from-orange-500 to-pink-500',
  'from-purple-500 to-fuchsia-500',
  'from-emerald-500 to-teal-500',
  'from-cyan-500 to-blue-500',
  'from-indigo-500 to-purple-500',
  'from-red-500 to-orange-500',
  'from-pink-500 to-rose-500',
  'from-blue-500 to-indigo-500',
  'from-teal-500 to-emerald-500',
]

export const skillIcons = [Code2, Globe, Server, Smartphone, Database, Cloud, Layers]
export const skillGradients = [
  'from-orange-500 to-pink-500',
  'from-cyan-500 to-blue-500',
  'from-purple-500 to-fuchsia-500',
  'from-emerald-500 to-teal-500',
  'from-red-500 to-orange-500',
  'from-blue-500 to-indigo-500',
  'from-pink-500 to-rose-500',
]

export const skillCategoryTags = [
  ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Dart'],
  ['Next.js', 'Angular', 'React', 'Tailwind CSS', 'Redux', 'RxJS'],
  ['Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
  ['Flutter', 'Angular', 'React Native', 'Expo', 'iOS', 'Android'],
  ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis', 'Prisma'],
  ['Docker', 'Docker Compose', 'Git', 'GitHub', 'CI/CD', 'GitHub Actions', 'Vercel', 'AWS'],
  ['Microservices', 'Clean Architecture', 'Design Systems', 'API Design', 'Monorepo'],
]

export const skillCloudTags = [
  'TypeScript', 'JavaScript', 'Python', 'SQL', 'Dart', 'Next.js', 'Angular', 'React', 'Django',
  'Django REST Framework', 'FastAPI', 'Node.js', 'Express', 'Flutter', 'React Native', 'Expo',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Docker Compose', 'Git', 'GitHub',
  'CI/CD', 'GitHub Actions', 'Vercel', 'AWS', 'Tailwind CSS', 'Prisma', 'RxJS', 'Redux',
  'REST APIs', 'GraphQL', 'Clean Architecture', 'Microservices',
]

export const projectMeta = [
  {
    id: 1,
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mazalat-riyadh.com',
    githubUrl: '#',
    color: 'from-orange-500 to-pink-500',
    featured: true,
  },
  {
    id: 2,
    tags: ['Django', 'Django REST Framework', 'Python', 'PostgreSQL', 'Docker', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-lime-500',
    featured: true,
  },
  {
    id: 3,
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Riverpod', 'SQLite'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-sky-500 to-blue-500',
    featured: false,
  },
  {
    id: 4,
    tags: ['Angular', 'TypeScript', 'Chart.js', 'NgRx', 'RxJS', 'SCSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-red-500 to-rose-500',
    featured: false,
  },
]

export const experienceMeta = [
  { id: 1, color: 'from-orange-500 to-pink-500' },
  { id: 2, color: 'from-purple-500 to-fuchsia-500' },
  { id: 3, color: 'from-emerald-500 to-teal-500' },
  { id: 4, color: 'from-red-500 to-orange-500' },
]

export const educationMeta = [
  { id: 1, color: 'from-orange-500 to-pink-500', icon: GraduationCap },
]

export const certificationMeta = [
  { id: 1, credentialUrl: '#', color: 'from-orange-400 to-amber-500' },
  { id: 2, credentialUrl: '#', color: 'from-cyan-500 to-blue-500' },
  { id: 3, credentialUrl: '#', color: 'from-emerald-500 to-lime-500' },
  { id: 4, credentialUrl: '#', color: 'from-sky-500 to-blue-500' },
]

export const certificationIcon = Award

export const socialMeta = [
  { icon: Mail, href: 'mailto:hello@mohammed-alnahari.com', color: 'from-orange-500 to-pink-500' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mohammed-alnahari', color: 'from-blue-600 to-blue-700' },
  { icon: Github, href: 'https://github.com/mohammed-alnahari', color: 'from-gray-600 to-gray-800' },
]

export const SECTION_IDS = ['hero', 'about', 'services', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'] as const
