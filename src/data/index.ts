export type IconNameType = 'pull-request' | 'video' | 'github';

interface ILink {
  name: string;
  href: string;
  icon?: IconNameType;
  iconClass?: string;
  hidden?: true;
}

export const links: Array<ILink> = [
  {
    name: 'Built amazing portfolio website using Next.js and TypeScript',
    href: 'https://github.com/ivishal-g/portfolio',
    icon: 'github',
  },
  {
    name: 'Contributed to open source projects with meaningful PRs',
    href: 'https://github.com/ivishal-g',
    icon: 'pull-request',
  },
  {
    name: 'Developed full-stack applications with modern tech stack',
    href: 'https://github.com/ivishal-g',
    icon: 'github',
  },
  {
    name: 'Active contributor to developer community',
    href: 'https://x.com/Vishal___Kwad',
    icon: 'video',
  },
];

interface WorkExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
}

export const experiences: WorkExperience[] = [
  {
    startDate: '2023',
    endDate: 'Present',
    company: 'Freelance Developer',
    position: 'Full Stack Developer',
  },
  {
    startDate: '2022',
    endDate: '2023',
    company: 'Tech Company',
    position: 'Junior Developer',
  },
  {
    startDate: '2021',
    endDate: '2022',
    company: 'Startup Inc.',
    position: 'Developer Intern',
  },
];
