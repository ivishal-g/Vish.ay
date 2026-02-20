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
    name: 'Contributed to open source projects with meaningful PRs',
    href: 'https://github.com/ivishal-g',
    icon: 'pull-request',
  },
  {
    name: 'Hacktoberfest 2025 Supercontributor',
    href: 'https://hacktoberfest.com',
    icon: 'github',
  },
  {
    name: 'Active contributor',
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
    startDate: '2025',
    endDate: 'Present',
    company: 'Freelance Developer',
    position: 'Full Stack Developer',
  },
  {
    startDate: '2025',
    endDate: 'Present',
    company: 'Startup Inc.',
    position: 'Developer Intern',
  },
];
