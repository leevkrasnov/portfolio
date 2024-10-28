type Project = {
  id: number;
  name: string;
  technologies: Technology[];
  description: string;
  platforms: Platform[];
};

type Platform = {
  name: string;
  url?: string;
  icon: string;
};

type Technology = {
  name: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Создание верстки на базе репозитория',
    technologies: [
      { name: 'React', icon: '/logo-icons/React.svg' },
      { name: 'Vite', icon: '/logo-icons/Vite.svg' },
      { name: 'TailwindCSS', icon: '/logo-icons/Tailwind.svg' },
    ],
    description:
      'Код написан с нуля, основываясь на существующем репозитории от "Jonas Schmedtmann".\nОсновной задачей было углубленное изучение пропсов и компонентов в React. Для сборки использовал Vite, что обеспечило высокую скорость разработки и удобство настройки.\nВ процессе я впервые использовал пакетный менеджер pnpm, который зарекомендовал себя как эффективная альтернатива npm.',
    platforms: [
      {
        name: 'Vercel',
        url: 'https://react-pizza-menu-tawny.vercel.app/',
        icon: '/logo-icons/Vercel.svg',
      },
      {
        name: 'Git',
        url: 'https://github.com/leevkrasnov/react-pizza-menu',
        icon: '/logo-icons/Git.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'Проект в рамках официального курса Next.js',
    technologies: [
      { name: 'Next.js', icon: '/logo-icons/Next.svg' },
      { name: 'PostgreSQL', icon: '/logo-icons/Postgre.svg' },
    ],
    description:
      'Выполняется мной в рамках официального курса по Next.js.\nНа текущем этапе я изучил и внедрил несколько ключевых функций:\n1. Добавление и оптимизация шрифтов и изображений для повышения производительности. \n2. Создание макетов и страниц, а также навигация между ними.\n3. Настройка базы данных PostgreSQL с использованием библиотеки @vercel/postgres.\n\nКурс продолжается, и по мере прохождения я буду выкладывать обновления о прогрессе и добавленных функциях.',
    platforms: [
      {
        name: 'Vercel',
        url: 'https://nextjs-dashboard-beta-nine-53.vercel.app/',
        icon: '/logo-icons/Vercel.svg',
      },
      {
        name: 'Git',
        url: 'https://github.com/leevkrasnov/nextjs-dashboard',
        icon: '/logo-icons/Git.svg',
      },
    ],
  },
  {
    id: 3,
    name: 'Практика JavaScript: учебный проект',
    technologies: [
      { name: 'bash', icon: '/logo-icons/Javascript.svg' },
      { name: 'npm', icon: '/logo-icons/Nmp.svg' },
    ],
    description:
      'Проект представляет собой интерактивное приложение.\nЭто мой первый проект на платформе Hexlet, и его цель — продемонстрировать базовое понимание работы с JavaScript и взаимодействие с пользователем.',
    platforms: [
      {
        name: 'Vercel',
        url: 'https://asciinema.org/a/xZMAm1gdqmtvJX2hoZXLlXBla',
        icon: '/logo-icons/Asciinema.svg',
      },
      {
        name: 'Git',
        url: 'https://github.com/leevkrasnov/frontend-project-44',
        icon: '/logo-icons/Git.svg',
      },
    ],
  },

  {
    id: 4,
    name: 'Практика навыков',
    technologies: [
      { name: 'Typescript', icon: '/logo-icons/Typescript.svg' },
      { name: 'React', icon: '/logo-icons/React.svg' },
      { name: 'TailwindCSS', icon: '/logo-icons/Tailwind.svg' },
    ],
    description:
      'В этом проекте я добавил модальное окно с помощью библиотеки shadcn и улучшил адаптивность сайта на Tailwind CSS. Исходная верстка была готова.\nВ процессе работы я освоил чтение кода, пропсы, хуки useState и типы в TypeScript.',
    platforms: [
      {
        name: 'Vercel',
        url: 'https://yoga-session.vercel.app/',
        icon: '/logo-icons/Vercel.svg',
      },
      {
        name: 'Git',
        url: 'https://github.com/leevkrasnov/astro-yoga-session',
        icon: '/logo-icons/Git.svg',
      },
    ],
  },
];

export default projects;
