import { PersonalInfo } from '~/types/data'

export const personalInfo: PersonalInfo = {
  name: 'Samad Saiyed',
  title: 'Full Stack Developer',
  tagline:
    'Building exceptional digital experiences with modern web technologies',
  bio: "I'm a passionate full-stack developer with expertise in building scalable web applications. I specialize in React, Next.js, and Node.js ecosystems, delivering clean code and exceptional user experiences. With a keen eye for detail and a love for elegant solutions, I transform complex problems into simple, beautiful, and intuitive designs.",
  email: 'samad.saiyed.ss@gmail.com',
  location: 'India',
  profileImage: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/samad-saiyed',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samad-saiyed/',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://x.com/saiyed_samad',
      icon: 'twitter',
    },
  ],
}
