
export const profile = {
  name: 'Julian Sevilla',
  handle: 'julian.sevilla',
  role: 'BSIT Student | UI/UX Designer',
  email: 'juliansevilla0809@gmail.com',
  phone: '09915908049',
  github: 'https://github.com/Julyan446',
  linkedin: '', // add a URL to show a LinkedIn button
}

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite'] },
  { group: 'Design', items: ['Figma'] },
  { group: 'Backend', items: ['MySQL', 'MongoDB'] },
  { group: 'Tooling', items: ['GitHub Actions'] },
]

// size: 'feature' | 'default' | 'wide'
export const projects = [
  {
    title: 'Portfolio Website',
    size: 'default',
    description:
      'A personal website showcasing my skills and projects using a clean and responsive design.',
    tags: ['Figma', 'UI/UX'],
    links: [
      {
        label: 'View project',
        href: 'https://myportfolio-five-peach-84.vercel.app/',
      },
    ],
  },
  {
    title: 'Commnect Barangay',
    size: 'default',
    description:
      'A group project that provides a simple platform for sharing announcements, events, and services within the community.',
    tags: ['Figma', 'Group project'],
    links: [
      {
        label: 'View project',
        href: 'https://www.figma.com/design/ilQePnLsQ2UcLWBLGx0Sp6/Commnect?m=auto&t=xkFodHyU3WOzc0UA-6',
      },
    ],
  },
  {
    title: 'UI/UX Design',
    size: 'default',
    description:
      'A collection of interface designs focused on clarity, simplicity, and user-friendly layouts.',
    tags: ['Figma', 'UI/UX'],
    links: [
      {
        label: 'View project',
        href: 'https://www.figma.com/proto/IvXj0QjCI5fKZ2fGVnOpSv?node-id=0-1&t=xkFodHyU3WOzc0UA-6',
      },
    ],
  },
]