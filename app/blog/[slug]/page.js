// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

// Per-blog SEO metadata for known local blogs
const blogMeta = {
  "is-ai-replacing-software-developers": {
    title: "Is AI Replacing Software Developers? The Future of Coding",
    description: "Explore the impact of AI on software development. Are AI tools replacing developers or are they just powerful assistants? Discover the truth about the future of coding.",
    keywords: ["AI replacing developers", "Future of coding", "GitHub Copilot", "ChatGPT coding", "Software development AI"]
  },
  "why-nextjs-is-the-future-of-full-stack": {
    title: "Why Next.js is the Future of Full-Stack React Frameworks",
    description: "Discover how Next.js has transformed from a simple SSR tool to a powerful full-stack framework. Learn why the App Router and Server Components are game-changers.",
    keywords: ["Next.js full stack", "React App Router", "Server Components", "Next.js 14", "SSR React"]
  },
  "mastering-tailwind-css-from-utility-to-architecture": {
    title: "Mastering Tailwind CSS: From Utility to Architecture",
    description: "Learn how to effectively architect large-scale applications using Tailwind CSS. Move beyond simple utilities and embrace a scalable design system.",
    keywords: ["Tailwind CSS architecture", "utility-first CSS", "design system Tailwind", "Tailwind JIT"]
  },
  "react-server-components-vs-client-components": {
    title: "React Server Components vs Client Components: A Complete Guide",
    description: "An in-depth guide comparing React Server Components (RSC) and Client Components. Learn when to use each to optimize your Next.js application for speed and SEO.",
    keywords: ["React Server Components", "Client Components", "RSC vs CSR", "use client directive", "Next.js rendering"]
  },
  "the-ultimate-guide-to-web-accessibility-a11y": {
    title: "The Ultimate Guide to Web Accessibility (a11y) for Developers",
    description: "Discover how to make your web applications inclusive. A complete guide to WCAG, ARIA labels, semantic HTML and a11y best practices in React.",
    keywords: ["web accessibility", "a11y", "WCAG", "ARIA attributes", "semantic HTML", "inclusive design"]
  },
  "state-management-in-2026-redux-vs-zustand-vs-context": {
    title: "State Management in 2026: Redux vs Zustand vs Context API",
    description: "Choosing the right state management library in React can be overwhelming. We compare Redux Toolkit, Zustand, and React Context for performance and scalability in 2026.",
    keywords: ["Redux vs Zustand", "React state management 2026", "Redux Toolkit", "Zustand React", "Context API"]
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = blogMeta[slug];
  const title = meta?.title || "Blog Post | Sharjeel Khalid";
  const description = meta?.description || "Read this article on Sharjeel Khalid's developer blog.";
  const keywords = meta?.keywords || ["web development", "software engineering"];
  const url = `https://m-sharjeel-dev.vercel.app/blog/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      authors: ["Sharjeel Khalid"],
      images: [{ url: "/profile-4.png", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile-4.png"]
    }
  };
}

async function getBlog(slug) {
  const blogs = {
    "is-ai-replacing-software-developers": {
      title: "Is AI Replacing Software Developers? The Future of Coding",
      cover_image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80",
      body_html: `
        <h2>The Rise of AI in Software Development</h2>
        <p>The tech industry is buzzing with a pressing question: <strong>Is AI replacing software developers?</strong> With the rapid advancement of Artificial Intelligence tools like GitHub Copilot, ChatGPT, and Google's Gemini, the landscape of software engineering is undeniably changing. However, the narrative of "replacement" might be missing the bigger picture.</p>

        <h2>AI as an Assistant, Not a Replacement</h2>
        <p>Current AI technologies excel at automating repetitive tasks, generating boilerplate code, and identifying syntax errors. They act as force multipliers, allowing developers to code faster and with fewer bugs. Rather than replacing human coders, AI is evolving into a sophisticated pair programmer.</p>
        <ul>
          <li><strong>Increased Productivity:</strong> AI tools can write routine functions, freeing developers to focus on complex architecture and problem-solving.</li>
          <li><strong>Rapid Prototyping:</strong> Ideas can be turned into functional prototypes in a fraction of the time.</li>
          <li><strong>Learning and Onboarding:</strong> AI assistants help junior developers learn new languages and frameworks by providing instant explanations and context.</li>
        </ul>

        <h2>The Skills That Matter Now</h2>
        <p>As AI handles the "how" of writing code, the "what" and "why" become increasingly critical. The value of a software developer is shifting from mere syntax mastery to higher-level skills:</p>
        <ul>
          <li><strong>System Design and Architecture:</strong> Understanding how disparate systems interact securely and efficiently.</li>
          <li><strong>Critical Thinking and Problem Solving:</strong> Translating ambiguous business requirements into technical solutions.</li>
          <li><strong>Code Review and Security:</strong> AI can write code, but it still requires human oversight to ensure it meets security standards and business logic.</li>
        </ul>

        <h2>The Verdict: Evolution over Extinction</h2>
        <p>AI is not replacing developers; it is replacing the mundane aspects of coding. The future belongs to <em>AI-augmented developers</em>. Those who embrace these tools will find themselves more productive and valuable than ever. The role of the software engineer is not disappearing—it is evolving into something much more focused on creativity, design, and strategic problem-solving.</p>
      `
    },
    "why-nextjs-is-the-future-of-full-stack": {
      title: "Why Next.js is the Future of Full-Stack React Frameworks",
      cover_image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1920&q=80",
      body_html: `
        <h2>The Evolution of Next.js</h2>
        <p>When Next.js first hit the scene, it was primarily known as an excellent solution for Server-Side Rendering (SSR) in React. Fast forward to today, and it has evolved into a comprehensive, <strong>full-stack framework</strong> capable of powering massive enterprise applications natively.</p>

        <h2>The Power of the App Router</h2>
        <p>The introduction of the <code>app/</code> directory revolutionized how we structure applications. Unlike the older pages directory, the App Router natively supports nested layouts, simplified data fetching, and an incredibly intuitive routing paradigm.</p>
        <ul>
          <li><strong>React Server Components (RSC):</strong> Render UI directly on the server without shipping JavaScript to the client.</li>
          <li><strong>Streaming and Suspense:</strong> Progressively load different parts of your page, significantly improving user perceived performance.</li>
          <li><strong>Server Actions:</strong> Mutate data and handle forms without having to manually construct API routes.</li>
        </ul>

        <h2>SEO and Performance</h2>
        <p>Because Next.js heavily emphasizes server rendering and static generation by default, applications are inherently SEO-friendly out of the box. Search engine crawlers can read fully-rendered HTML rather than waiting for heavy JavaScript payloads to execute.</p>

        <h2>Conclusion</h2>
        <p>Next.js is no longer just a "React framework." By seamlessly blurring the line between backend and frontend, Vercel and the open-source community have crafted a toolset that significantly enhances developer velocity while maintaining stellar performance for end users.</p>
      `
    },
    "mastering-tailwind-css-from-utility-to-architecture": {
      title: "Mastering Tailwind CSS: From Utility to Architecture",
      cover_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
      body_html: `
        <h2>Rethinking Styling with Tailwind CSS</h2>
        <p>Many developers initially scoff at Tailwind CSS, claiming it results in messy HTML reminiscent of the early 2000s inline styles. However, once you understand the architecture behind utility-first styling, you realize how powerful and scalable it can be.</p>

        <h2>Building a Design System</h2>
        <p>Tailwind isn't just about throwing random classes on elements; it's about enforcing a rigid design system. By modifying the <code>tailwind.config.js</code> file, you establish a universal language for colors, spacing, and typography that your entire team can follow.</p>
        <ul>
          <li><strong>Consistency:</strong> No more guessing if a margin should be 15px or 16px. You use <code>m-4</code> and the system enforces the rule.</li>
          <li><strong>Maintainability:</strong> Traditional CSS often results in "append-only" stylesheets where developers are afraid to delete code. Tailwind's utility classes are scoped exclusively to the element they are applied to.</li>
          <li><strong>Performance:</strong> Tailwind’s JIT (Just-In-Time) compiler ensures that only the CSS classes you actually use are shipped in your production bundle.</li>
        </ul>

        <h2>Architectural Patterns</h2>
        <p>When dealing with repetitive elements like buttons or cards, leverage component frameworks like React to abstract the utility classes. Instead of writing <code>@apply</code> in CSS files, extract the UI into a reusable component. This keeps your styling decentralized but your component architecture perfectly DRY.</p>
        
        <p>In 2024, mastering Tailwind CSS isn't just about memorizing classes—it's about fundamentally changing how you construct and manage web interfaces.</p>
      `
    },
    "react-server-components-vs-client-components": {
      title: "React Server Components vs Client Components",
      cover_image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1920&q=80",
      body_html: `
        <h2>The Paradigm Shift in React</h2>
        <p>With the release of React 18 and Next.js 13+, the way we think about rendering has fundamentally changed. The introduction of <strong>React Server Components (RSC)</strong> has split the component ecosystem into two distinct types: Server Components and Client Components.</p>

        <h2>Understanding Server Components</h2>
        <p>By default, all components in the Next.js App Router are Server Components. This means they are executed exclusively on the server. The massive benefit here is that their dependencies and logic are never shipped to the browser. Your JavaScript bundle size plummets, resulting in blazing fast initial page loads.</p>
        <p>Server components are perfect for:</p>
        <ul>
          <li>Fetching data directly from databases without API endpoints.</li>
          <li>Accessing backend resources securely (like API keys).</li>
          <li>Rendering static UI that doesn't require user interaction.</li>
        </ul>

        <h2>When to use Client Components</h2>
        <p>You add the <code>"use client"</code> directive at the top of a file to declare a boundary where React needs to run in the browser. Client components are the "traditional" React components we are used to.</p>
        <p>You should use Client Components when you need:</p>
        <ul>
          <li>Interactivity (<code>onClick</code>, <code>onChange</code>, etc).</li>
          <li>State and lifecycle hooks (<code>useState</code>, <code>useEffect</code>).</li>
          <li>Browser-only APIs (like <code>window</code>, <code>localStorage</code>, or <code>geolocation</code>).</li>
        </ul>

        <h2>The Best of Both Worlds</h2>
        <p>The magic happens when you interleave them. You can pass a Client Component as a child to a Server Component, creating a highly optimized, interactive application. Understanding this mental model is the key to mastering modern React architecture.</p>
      `
    },
    "the-ultimate-guide-to-web-accessibility-a11y": {
      title: "The Ultimate Guide to Web Accessibility (a11y)",
      cover_image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80",
      body_html: `
        <h2>Why Accessibility Matters</h2>
        <p>Web accessibility, often abbreviated as <strong>a11y</strong>, is the practice of ensuring that digital products are usable by everyone, regardless of their physical or cognitive abilities. Far too often, developers treat accessibility as an afterthought or a "nice to have," when in reality, it is a fundamental pillar of modern software engineering.</p>
        <p>Not only is it a legal requirement in many jurisdictions (such as under the ADA in the US or the EAA in Europe), but building accessible websites simply makes your product better for everyone, improving SEO and user experience in the process.</p>

        <h2>Semantic HTML: Your First Line of Defense</h2>
        <p>The easiest way to improve accessibility is by writing semantic HTML. A screen reader knows exactly how to handle a <code>&lt;button&gt;</code> element. It knows how to focus it, and it knows that hitting the Enter key should trigger it.</p>
        <p>If you build a "button" out of a <code>&lt;div onClick={...}&gt;</code>, you strip away all that native accessibility. The screen reader won't announce it properly, and keyboard-only users won't be able to tab to it.</p>

        <h2>Crucial Accessibility Checks</h2>
        <ul>
          <li><strong>Color Contrast:</strong> Ensure your text has a sufficient contrast ratio against its background (WCAG AA requires a ratio of at least 4.5:1 for normal text).</li>
          <li><strong>Focus States:</strong> Never remove the default CSS outline unless you are replacing it with a custom, highly visible focus indicator.</li>
          <li><strong>Alt Text:</strong> Always provide descriptive <code>alt</code> attributes for images that convey meaning. If an image is purely decorative, use an empty string (<code>alt=""</code>) so screen readers can safely ignore it.</li>
          <li><strong>ARIA Attributes:</strong> Use Accessible Rich Internet Applications (ARIA) attributes like <code>aria-expanded</code> or <code>aria-hidden</code> to provide additional context to screen readers when complex, custom UI widgets are built.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Accessibility is not a feature you add at the end of a project. It is a mindset that must be integrated into the design and development lifecycle from day one.</p>
      `
    },
    "state-management-in-2026-redux-vs-zustand-vs-context": {
      title: "State Management in 2026: Redux vs Zustand vs Context",
      cover_image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1920&q=80",
      body_html: `
        <h2>The State Management Dilemma in 2026</h2>
        <p>In the React ecosystem, choosing how to manage global state is one of the most debated topics. While Redux dominated the landscape for years, the modern ecosystem has fractured into several incredible alternatives. Let's compare the big three in 2026.</p>

        <h2>React Context: The Built-in Solution</h2>
        <p>React's native Context API is fantastic for avoiding prop drilling. It is built right into React and requires zero dependencies.</p>
        <p><strong>When to use:</strong> For low-frequency updates like UI themes (dark/light mode), user authentication state, or language preferences. It is generally not recommended for high-frequency data changes due to its tendency to re-render all consumers whenever the value changes.</p>

        <h2>Redux Toolkit (RTK): The Enterprise Standard</h2>
        <p>Redux used to be notorious for its immense boilerplate. However, Redux Toolkit (RTK) has modernized the library entirely, making it highly efficient and pleasant to write.</p>
        <p><strong>When to use:</strong> For massive, complex enterprise applications with deep, nested state objects, complex undo/redo logic, or apps that heavily rely on Redux DevTools for debugging state timelines.</p>

        <h2>Zustand: The Modern Favorite</h2>
        <p>Zustand has exploded in popularity recently, and for good reason. It offers a minimalistic, hook-based approach to global state without the boilerplate of Redux or the re-render performance issues of Context.</p>
        <p><strong>When to use:</strong> For the vast majority of medium-to-large scale applications. Zustand is incredibly fast, easy to learn, and avoids wrapping your entire app in Provider components.</p>

        <h2>The Verdict</h2>
        <p>If you're starting a new project today, <strong>Zustand</strong> is arguably the best default choice for global state. Save Context for dependency injection, and reserve Redux Toolkit for complex, enterprise-level state requirements.</p>
      `
    }
  };

  if (blogs[slug]) {
    return blogs[slug];
  }

  try {
    const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function BlogDetails({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="py-8 flex justify-center items-center h-[50vh]">
        <p className="text-white text-xl">Blog not found.</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blogMeta[slug]?.description || blog.description || "",
    "image": blog.cover_image || "/profile-4.png",
    "author": {
      "@type": "Person",
      "name": "Sharjeel Khalid",
      "url": "https://m-sharjeel-dev.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": "Sharjeel Khalid"
    },
    "datePublished": blog.published_at || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://m-sharjeel-dev.vercel.app/blog/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-8 max-w-4xl mx-auto px-4">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl lg:text-2xl rounded-md">
              Blog Details
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-center">{blog.title}</h1>
        
        {blog.cover_image && (
          <div className="w-full relative aspect-video mb-12 rounded-lg overflow-hidden">
            <Image 
              src={blog.cover_image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}

        <div 
          className="text-[#d3d8e8] text-lg leading-relaxed prose prose-invert max-w-none prose-a:text-[#16f2b3] hover:prose-a:text-violet-500"
          dangerouslySetInnerHTML={{ __html: blog.body_html }}
        />
      </div>
    </>
  );
}

