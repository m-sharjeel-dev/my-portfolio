import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Blog from "./components/homepage/blog";
import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching blogs", error);
  }

  const blogs = [
    {
      title: "Is AI Replacing Software Developers? The Future of Coding",
      description: "Explore the impact of AI on software development. Are AI tools replacing developers, or are they just powerful assistants? Discover the future of coding.",
      cover_image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80",
      published_at: "2026-05-15T12:00:00Z",
      public_reactions_count: 345,
      comments_count: 42,
      reading_time_minutes: 6,
      slug: "is-ai-replacing-software-developers",
      url: "#"
    },
    {
      title: "Why Next.js is the Future of Full-Stack React Frameworks",
      description: "Discover how Next.js has transformed from a simple SSR tool to a powerful full-stack framework. Learn why the new App Router and Server Components are game-changers.",
      cover_image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1920&q=80",
      published_at: "2026-04-10T08:30:00Z",
      public_reactions_count: 512,
      comments_count: 89,
      reading_time_minutes: 8,
      slug: "why-nextjs-is-the-future-of-full-stack",
      url: "#"
    },
    {
      title: "Mastering Tailwind CSS: From Utility to Architecture",
      description: "Learn how to effectively architect large-scale applications using Tailwind CSS. Move beyond simple utilities and embrace a highly scalable design system.",
      cover_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
      published_at: "2026-03-22T14:45:00Z",
      public_reactions_count: 278,
      comments_count: 34,
      reading_time_minutes: 5,
      slug: "mastering-tailwind-css-from-utility-to-architecture",
      url: "#"
    },
    {
      title: "React Server Components vs Client Components",
      description: "An in-depth guide comparing React Server Components (RSC) and Client Components. Learn when to use which to optimize your Next.js application performance.",
      cover_image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1920&q=80",
      published_at: "2026-06-12T09:00:00Z",
      public_reactions_count: 423,
      comments_count: 56,
      reading_time_minutes: 6,
      slug: "react-server-components-vs-client-components",
      url: "#"
    },
    {
      title: "The Ultimate Guide to Web Accessibility (a11y)",
      description: "Discover how to make your web applications inclusive. A complete guide to understanding WCAG, ARIA labels, and implementing a11y best practices in React.",
      cover_image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80",
      published_at: "2026-05-28T10:15:00Z",
      public_reactions_count: 189,
      comments_count: 22,
      reading_time_minutes: 7,
      slug: "the-ultimate-guide-to-web-accessibility-a11y",
      url: "#"
    },
    {
      title: "State Management in 2026: Redux vs Zustand vs Context",
      description: "Choosing the right state management library can be overwhelming. We break down the pros, cons, and performance differences between Redux Toolkit, Zustand, and React Context in 2026.",
      cover_image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1920&q=80",
      published_at: "2026-07-05T14:30:00Z",
      public_reactions_count: 612,
      comments_count: 104,
      reading_time_minutes: 9,
      slug: "state-management-in-2026-redux-vs-zustand-vs-context",
      url: "#"
    }
  ];
  return blogs;
};

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};