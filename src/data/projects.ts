import { Project } from '~/types/data'

export const projects: Project[] = [
  {
    id: 'stickyplane',
    title: 'StickyPlane',
    description:
      'AI-powered note taking application focused on capturing information instantly while making it searchable and useful later. Features AI-generated titles, summaries, auto-tags, semantic search using embeddings, fast indexing, BetterAuth authentication, and PWA support.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'BetterAuth',
      'Node.js',
      'PostgreSQL',
      'Embeddings',
      'Vector search',
    ],
    image: '/projects/stickyplane.jpg',
    featured: true,
    liveUrl: 'https://www.stickyplane.com/',
    highlights: [
      {
        icon: 'Sparkles',
        label: 'AI-Assisted Organization',
        detail:
          'AI-generated titles, summaries, and auto-tags tailored to your notes',
      },
      {
        icon: 'Zap',
        label: 'Semantic Vector Search',
        detail:
          'Fast indexing and semantic search using embeddings to recall notes instantly',
      },
      {
        icon: 'ShieldCheck',
        label: 'Secure & Cross-Platform',
        detail:
          'Built with BetterAuth, account linking, password management, and PWA support',
      },
      {
        icon: 'Users',
        label: 'No Folders, No Friction',
        detail:
          'An AI-first workflow designed to replace traditional manual note organization',
      },
    ],
  },
  {
    id: 'noor',
    title: 'Noor',
    description:
      'A modern Learning Management System backend focused on scalable APIs, structured educational content, and robust administration. Features JWT sessions, refresh tokens, RBAC, and comprehensive course and lesson management.',
    techStack: ['NextJS', 'NestJS', 'Prisma', 'PostgreSQL', 'JWT'],
    image: '/projects/noor.jpg',
    featured: true,
  },
  {
    id: 'anyai',
    title: 'anyai',
    description:
      'A provider-agnostic AI runtime for TypeScript that exposes a unified API across multiple LLM providers including OpenAI, Anthropic, Gemini, Mistral, and Ollama. Write code once and swap providers without rewriting business logic.',
    techStack: ['TypeScript', 'Node.js', 'pnpm', 'ESM'],
    image: '/projects/anyai.jpg',
    featured: true,
    liveUrl: 'https://anyai-frontend.vercel.app/',
  },
  {
    id: 'yeetgit',
    title: 'YeetGit',
    description:
      'A developer productivity tool intended to simplify Git workflows with AI automation, advanced developer tooling, and improved repository management.',
    techStack: ['AI', 'Git', 'TypeScript', 'Node.js', 'Automation'],
    image: '/projects/yeetgit.jpg',
    featured: true,
    liveUrl: 'https://www.yeetgit.com/',
  },

  {
    id: 'punch-machine',
    title: 'Punch Machine',
    description:
      'An Electron desktop application that communicates with ZKTeco biometric attendance devices to download and sync attendance logs over the local network.',
    techStack: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'lowdb'],
    image: '/projects/punch-machine.jpg',
    featured: false,
  },
  {
    id: 'saadat-survey-platform',
    title: 'Saadat Association Survey Platform',
    description:
      'A custom survey platform developed for organizational workflows, featuring authentication, structured form workflows, and secure data collection.',
    techStack: ['Next.js', 'Prisma', 'MongoDB'],
    image: '/projects/saadat-survey.jpg',
    featured: false,
  },
  {
    id: 'taskplane',
    title: 'TaskPlane',
    description:
      'A local-first AI agent platform capable of planning workflows once and executing them repeatedly using deterministic execution.',
    techStack: ['Node.js', 'TypeScript', 'SQLite', 'Drizzle ORM'],
    image: '/projects/taskplane.jpg',
    featured: false,
    disabled: true,
  },
  {
    id: 'pushplane',
    title: 'PushPlane',
    description:
      'A self-hosted web push notification infrastructure platform for developers featuring unlimited projects, privacy-first deployment, REST API, and Docker support.',
    techStack: ['Fastify', 'PostgreSQL', 'Next.js', 'Docker'],
    image: '/projects/pushplane.jpg',
    featured: false,
    disabled: true,
  },
  {
    id: 'authplane',
    title: 'AuthPlane',
    description:
      'Authorization infrastructure designed around secure authorization sessions, RBAC, PIN verification, and extensible authorization workflows.',
    techStack: ['TypeScript', 'Security', 'RBAC'],
    image: '/projects/authplane.jpg',
    featured: false,
    disabled: true,
  },
  {
    id: 'mira',
    title: 'MIRA',
    description:
      'An AI-focused product concept intended to provide intelligent workflows and automation for modern knowledge workers.',
    techStack: ['AI', 'Automation', 'Workflows'],
    image: '/projects/mira.jpg',
    featured: false,
    disabled: true,
  },
]
