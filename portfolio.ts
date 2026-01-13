export const ref = "rafita.me";

export default {
  "seo": {
    "title": "Rafael Jaén | Full Stack Developer",
    "description": "Welcome to my personal website. I'm a Full Stack Developer from Spain, passionate about building digital products."
  },
  "profile": {
    "name": "Rafael Jaén Profile",
    "avatar": "/hero.png",
    "title": "Hi, I'm Rafael — <span class=\"text-secondary\">A Full Stack web developer.</span>",
    "description": `Welcome to my little corner of the internet.<br>I’m a software engineer and indie maker from Andalucía, Spain.<br>Currently building in public <a href="https://opentodev.com?ref=${ref}" target="_blank" class="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline">opentodev.com</a> and <a href="https://boilerplatr.com?ref=${ref}" target="_blank" class="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline">boilerplatr.com</a>.`,
    "socialLinks": [
      { "name": "github", "url": "https://github.com/rafitajaen" },
      { "name": "x", "url": "https://x.com/rafitajaen" },
      { "name": "linkedin", "url": "https://linkedin.com/in/rafitajaen" }
    ],
    "heroButtons": [
      { "icon": "x", "text": "Follow me on X", "url": "https://x.com/rafitajaen" },
      { "icon": "github", "text": "Show me the code!", "url": "https://github.com/rafitajaen/me", "highlight": true }
    ]
  },
  "projects": [
    {
      "name": "boilerplatr<span class=\"text-zinc-500 font-light\">.com</span>",
      "status": "Launched",
      "statusColor": "emerald",
      "url": "https://boilerplatr.com",
      "description": "A curated directory of starting kits and codebases for building apps and SaaS. It handles the base setup, allowing you to skip repetitive parts like auth and payments, so you can move straight to generating revenue.",
      "stack": "Next.js | React | Tailwind | shadcn/ui | PostgreSQL | Prisma | Better Auth | Stripe"
    },
    {
        "name": "open<span class=\"text-emerald-600\">to</span>dev<span class=\"text-zinc-500 font-light\">.com</span>",
        "status": "In Public Beta",
        "statusColor": "orange",
        "url": "https://opentodev.com",
        "description": "A platform designed to help developers find jobs that truly fit their skills and ambitions using smart filters. Beyond listings, we offer tools for interview prep and personal branding, connecting you with companies that value your expertise.",
        "stack": "Typescript | .NET | MVC | Vite | Postgres | Redis | RabbitMQ | MJML | Docker"
    },
    {
      "name": "hostable<span class=\"text-zinc-500 font-light\">.tools</span>",
      "status": "Currently Building",
      "statusColor": "rose",
      "url": null,
      "description": "A comprehensive directory for self-hosted software enthusiasts. Discover, compare, and deploy open-source alternatives to popular SaaS tools. Whether for privacy, control, or cost-savings, find the best self-hostable solutions for your personal server or business infrastructure.",
      "stack": "Next.js | React | Tailwind | shadcn/ui | PostgreSQL | Prisma | Better Auth | Stripe"
    },
    {
      "name": "dotnet<span class=\"text-zinc-500 font-light\">.today</span>",
      "status": "Launched",
      "statusColor": "emerald",
      "url": `https://dotnet.today`,
      "description": "Weekly newsletter and blog for .NET developers. I share tutorials, tools, and updates that help you code smarter, ship faster, and grow your skills with clear, practical content.",
      "stack": "Typescript | Astro | Listmonk | .NET"
    },
    {
      "name": "code<span class=\"text-emerald-400\">in</span>spain<span class=\"text-zinc-500 font-light\">.com</span>",
      "status": "In Public Beta",
      "statusColor": "orange",
      "url": `https://codeinspain.com`,
      "description": "A selective tech job board for Spain’s developer community. I highlight only the positions that meet clear standards of transparency, culture, and growth potential. Spend less time searching and more time advancing your career.",
      "stack": "Typescript | .NET | MVC | Vite | Postgres | Redis | MJML | Docker"
    },
    {
      "name": "indiemakers<span class=\"text-zinc-500 font-light\">.io</span>",
      "status": "Cancelled",
      "statusColor": "red",
      "url": null,
      "description": "Community platform for solopreneurs and indie makers to showcase products, share resources, and get feedback.",
      "stack": "Typescript | .NET | MVC | Postgres | Docker"
    }
  ],
  "experience": [
    {
      "company": "Freelance",
      "role": "Solopreneur / Independent Developer",
      "location": "Remote",
      "startDate": "2025-10",
      "endDate": null,
      "badge": "Working",
      "icon": null,
      "description": "I’m independently designing and developing full-stack web projects, focusing on scalable architecture. I manage end-to-end product development, from idea validation to deployment and optimization. This work allows me to explore new frameworks, tools, and approaches while building impactful digital products.",
      "stack": "TypeScript | .NET | Next.js | Tailwind | Docker | PostgreSQL | Redis | RabbitMQ | Figma"
    },
    {
      "company": "Surcontrol",
      "role": "Technical Lead",
      "location": "Spain, On-site",
      "startDate": "2024-01",
      "endDate": "2025-10",
      "icon": "surcontrol",
      "description": "I worked as a Full Stack Developer and Technical Leader at Surcontrol, contributing to the development of innovative SaaS solutions for industrial automation. Leading a skilled team, I focus on collaboration, technical excellence, and scalable architecture.",
      "previousRole": {
        "title": "Full Stack Web Developer",
        "startDate": "2022-11",
        "endDate": "2024-01",
        "description": "I contributed to the development of a SaaS platform for industrial automation, working on asset monitoring, data analysis, and migrating from monolithic to microservices architecture."
      },
      "stack": "Vanilla TypeScript | .NET | MVC | Webpack | SCSS | Docker | PostgreSQL"
    },
    {
      "company": "esmonet",
      "role": "Full Stack Developer",
      "location": "Remote",
      "startDate": "2021-11",
      "endDate": "2022-11",
      "icon": "esmonet",
      "description": "At Esmonet, I was responsible for the development and scaling of a SaaS platform serving the online printing industry. My work ensured the platform could handle heavy traffic and maintain usability across devices.",
      "stack": "Vue | TypeScript | Quasar | Pinia | .NET | SQL Server | Entity Framework"
    },
    {
      "company": "La Casa Sibarita",
      "role": "Front-End Developer",
      "location": "Remote",
      "startDate": "2021-02",
      "endDate": "2021-11",
      "icon": "sibarita",
      "description": "During my time at La Casa Sibarita, I focused on front-end development, content management, and SEO optimization to improve web visibility and performance.",
      "stack": "JavaScript | WordPress | Ahrefs | Semrush | Google Search Console"
    }
  ]
}
