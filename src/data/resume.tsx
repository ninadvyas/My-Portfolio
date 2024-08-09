import { Icons } from "@/components/icons";
import { HomeIcon, BriefcaseBusiness, Camera } from "lucide-react";

export const DATA = {
  name: "Ninad Vyas",
  initials: "NV",
  url: "https://ninadvyas.tech",
  location: "India",
  locationLink: "India,Gujarat",
  description:
    "Developer & Designer",
  summary:
    "I'm a software engineer based in India, with a passion for building solutions that are user-friendly, innovative and problem solving.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind",
    "Node.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: BriefcaseBusiness, label: "Projects" },
    { href: "/photos", icon: Camera, label: "Photos" },
  ],
  contact: {
    email: "ninadvsd@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ninadvyas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ninadvyas",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ninadvsd",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ninadvsd@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
  ],
  education: [
  ],
  projects: [
    {
      title: "T-Writter",
      href: "https://twriter.vercel.app",
      active: true,
      description:
        "Experience typing on a classic typewriter, with authentic sounds, through modern digital interfaces.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://twriter.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/T-Writter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/twriter.png",
    },
    {
      title: "SnipUrl",
      href: "https://snipurl.vercel.app",
      active: true,
      description:
        "URL shortener that generates custom urls, trackable links with analytics.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://snipurl.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/SnipUrl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/snipurl.png",
    },
    {
      title: "Bookmarks",
      href: "https://bookmarks.ninadvyas.tech",
      active: true,
      description:
        "Bookmarks manager to save, categorize, search, and preview your favorite web links.",
      technologies: [
        "Next.js",
        "Clerk",
        "Supabase",
        "TailwindCSS",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://bookmarks.ninadvyas.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/Bookmarks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bookmarks.png",
    },
    {
      title: "Better Bridges",
      href: "https://betterbridges.ninadvyas.tech",
      active: true,
      description:
        "An interactive web platform featuring dynamic communication and social engagement.",
      technologies: [
        "Next.js",
        "Prisma",
        "MongoDB",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://betterbridges.ninadvyas.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/better-bridges",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/better.png",
    },
    {
      title: "College Space",
      href: "https://college-space.vercel.app",
      active: true,
      description:
        "An educational platform that provides documents, past exam papers, and project materials",
      technologies: [
        "React.js",
        "CSS",
        "SCSS",
        "Gulp",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://college-space.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/College-Space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/collegespace.png",
    },
    {
      title: "Space Glint",
      href: "https://spaceglint.netlify.app",
      active: true,
      description:
        "It's a platform where you can learn about the solar system with interactive design.",
      technologies: [
        "Next.js",
        "SCSS",
        "CSS",
        "Gsap",
        "framer-motion",
        "locomotive-scroll",
      ],
      links: [
        {
          type: "Website",
          href: "https://spaceglint.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/ninadvyas/Space-Glint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spaceglint.png",
    },
  ],
  hackathons: [
  ],
} as const;
