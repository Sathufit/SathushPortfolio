export const profile = {
  name: "Sathush Nanayakkara",
  email: "sathush.nanayakkara04@gmail.com",
  phone: "+94 76 934 6516",
  phoneHref: "tel:+94769346516",
  github: "https://github.com/Sathufit",
  linkedin: "https://www.linkedin.com/in/sathush-nayakkara",
  cv: "/placeholder/cv.pdf",
  formspree: "https://formspree.io/f/mgvkanry",
  coords: "6.9271° N, 79.8612° E",
};

export type ProjectKind = "Client" | "Product" | "Mobile" | "Team";

export type Project = {
  title: string;
  kind: ProjectKind;
  summary: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
};

/** Flagship work shown as full-bleed stacking cards. `tone` is each card's ground colour. */
export const featured: (Project & { role: string; tone: string; detail: string })[] = [
  {
    title: "Flour Dude",
    kind: "Client",
    role: "Café & cake studio — Galle",
    summary:
      "Full website for Galle's most loved café and custom cake studio: all-day menu, custom cake orders through WhatsApp, and events.",
    detail: "5.0 on Uber Eats · 140+ reviews",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://flourdude.com/",
    image: "/placeholder/flourdude.jpg",
    tone: "#2A1C13",
  },
  {
    title: "Island Mantra",
    kind: "Client",
    role: "Coastal fashion label — e-commerce",
    summary:
      "Storefront with collections, size guide, cart drawer, checkout and buy-now-pay-later badges. Cart state persists with Zustand.",
    detail: "Next.js 15 · React 19",
    tech: ["Next.js 15", "TypeScript", "Zustand", "Framer Motion"],
    url: "https://island-mantra.vercel.app",
    github: "https://github.com/Sathufit/island-mantra",
    image: "/placeholder/islandmantra.jpg",
    tone: "#0D353C",
  },
  {
    title: "Zentra M & Co",
    kind: "Client",
    role: "Property services — Australia",
    summary:
      "Conversion-focused website for an Australian property services company, presenting premium services to the AU market.",
    detail: "Live at zentram.com.au",
    tech: ["React", "Vite", "Tailwind CSS"],
    url: "https://www.zentram.com.au/",
    github: "https://github.com/Sathufit/Zentra-M-CO",
    image: "/placeholder/zentram.jpg",
    tone: "#1A2030",
  },
  {
    title: "HanGuk Bites",
    kind: "Client",
    role: "Korean restaurant — Melbourne",
    summary:
      "Menu, gallery and online table reservations, with an admin panel for managing bookings. Backed by MongoDB Atlas.",
    detail: "Full-stack MERN",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://zyntrix-restaurant.vercel.app/",
    github: "https://github.com/Sathufit/korean-restaurant-web",
    image: "/placeholder/hangukbites.jpg",
    tone: "#36121A",
  },
  {
    title: "MovieAI",
    kind: "Product",
    role: "AI film & TV discovery",
    summary:
      "Movie and TV discovery with natural-language search and personalised recommendations, built on Next.js.",
    detail: "Natural-language search",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    url: "https://movieai-eta.vercel.app",
    github: "https://github.com/Sathufit/movie-ai-app",
    image: "/placeholder/movieai.jpg",
    tone: "#191433",
  },
];

/** Everything else, listed in the archive index. */
export const archive: Project[] = [
  ...featured.map(({ title, kind, summary, tech, url, github, image }) => ({ title, kind, summary, tech, url, github, image })),
  {
    title: "WorkoutPro",
    kind: "Product",
    summary: "Turborepo monorepo: Next.js dashboard and NestJS API with JWT auth, web push and AI-generated training plans.",
    tech: ["Next.js", "NestJS", "MongoDB", "Turborepo", "Claude API"],
    github: "https://github.com/Sathufit/workout-pro",
  },
  {
    title: "Magnate Analysis System",
    kind: "Product",
    summary: "B2B procurement for marine supply: RFQ workflow, vendor catalogs, margin policies and PDF quotations.",
    tech: ["Next.js", "ShadCN UI", "TanStack Table", "React PDF", "Claude API"],
    github: "https://github.com/Sathufit/magnate-analysis-system",
  },
  {
    title: "Zyntrix Website",
    kind: "Client",
    summary: "Corporate site with dark and light modes, animated sections and a Zod-validated contact form.",
    tech: ["Next.js 15", "React 19", "Tailwind CSS 4"],
    url: "https://zyntrix-website.vercel.app/",
    github: "https://github.com/Sathufit/zyntrix-website",
    image: "/placeholder/zyntrix.jpg",
  },
  {
    title: "VoiceMe",
    kind: "Mobile",
    summary: "Assistive communication app: draw or type letters, get Gemini word predictions, hear the phrase spoken.",
    tech: ["React Native", "Expo", "Gemini API", "Reanimated"],
    github: "https://github.com/Sathufit/ai-assistive-app",
  },
  {
    title: "AssetTracker",
    kind: "Mobile",
    summary: "Tracks clinical assets across aged-care facilities: QR scanning, live TV dashboard, offline support.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Sathufit/AssestsTracker",
  },
  {
    title: "Frontyard Cricket",
    kind: "Mobile",
    summary: "Live ball-by-ball cricket scoring with real-time Firestore sync for scorers and spectators.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Sathufit/frontyard-mobile",
  },
  {
    title: "SolarSpot",
    kind: "Team",
    summary: "Solar charging station finder. I built the station management module with role-based access.",
    tech: ["React 19", "TypeScript", "Redux", "ShadCN UI"],
    url: "https://solarspot.vercel.app/",
    github: "https://github.com/sithummadhuranga/solarspot-frontend",
    image: "/placeholder/solarspot.jpg",
  },
  {
    title: "Smart Healthcare",
    kind: "Team",
    summary: "Telemedicine on microservices. I built the Doctor, Appointment and Admin services.",
    tech: ["Node.js", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    github: "https://github.com/sithummadhuranga/Smart-Healthcare",
  },
  {
    title: "Home4Paws",
    kind: "Team",
    summary: "Pet adoption marketplace with AI breed recognition on a .NET 8 Clean Architecture API.",
    tech: ["Next.js 14", ".NET 8", "PostgreSQL", "Docker"],
    github: "https://github.com/sithummadhuranga/home4paws-platform",
  },
  {
    title: "3D Gemstone Viewer",
    kind: "Team",
    summary: "360° drag-to-rotate gemstone viewer with certification management and shareable links.",
    tech: ["Next.js 14", "Zustand", "Firebase", "Cloudinary"],
    url: "https://3-d-gemstone-viewer.vercel.app/",
    github: "https://github.com/farhan156/3DGemstoneViewer",
  },
  {
    title: "SLSBA Dashboard",
    kind: "Client",
    summary: "Player registration and tournament management for the Sri Lanka Schools Badminton Association.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sathufit/SLSBA",
    image: "/placeholder/slsba.jpg",
  },
  {
    title: "FIA Minerals",
    kind: "Client",
    summary: "Catalog and enquiry site for a Sri Lankan mineral exporter, optimised for international buyers.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sathufit/fia-minerals",
    image: "/placeholder/minerals.jpg",
  },
];

export const services = [
  {
    title: "Web applications",
    body: "Dashboards, SaaS products and internal tools with real auth, real data and APIs that hold up in production.",
    tags: ["Next.js", "NestJS", "MERN", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Business websites",
    body: "Fast, search-ready sites for cafés, restaurants, retail and property firms, built to turn visitors into bookings and orders.",
    tags: ["Next.js", "Tailwind", "SEO", "Vercel"],
  },
  {
    title: "Mobile apps",
    body: "Cross-platform iOS and Android apps with offline support, live sync and native-feeling motion.",
    tags: ["React Native", "Expo", "Firebase", "Reanimated"],
  },
  {
    title: "AI features",
    body: "Language-model features that earn their place: natural-language search, predictions, generated plans and documents.",
    tags: ["Claude API", "Gemini API", "Zod", "Streaming"],
  },
];

export const process = [
  { step: "Brief", body: "A call to understand the business, the customers and what success looks like in numbers." },
  { step: "Design", body: "Wireframes and a visual direction in Figma, agreed before a line of production code." },
  { step: "Build", body: "Typed end to end, reviewed weekly on a live preview link so nothing is a surprise." },
  { step: "Launch", body: "Deployment, analytics, SEO and a handover you can run without me." },
];

export const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL",
  "React Native", "Expo", "Firebase", "Tailwind CSS", "Framer Motion", "Docker", "Figma", "Claude API",
];

export const stats = [
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 5, suffix: "+", label: "Client websites" },
  { value: 3, suffix: " yrs", label: "Writing code" },
];

export type Role = {
  title: string;
  org: string;
  type: string;
  mode?: string;
  location: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null while the role is ongoing */
  end: string | null;
  skills?: string[];
};

/** Newest first. */
export const experience: Role[] = [
  {
    title: "Committee Member",
    org: "Software Engineering Student Community — SLIIT",
    type: "Full-time",
    mode: "Hybrid",
    location: "Sri Lanka",
    start: "2026-07",
    end: null,
    skills: ["DevOps", "Software Development"],
  },
  {
    title: "Full Stack Engineer",
    org: "ScaleX Global",
    type: "Part-time",
    mode: "Remote",
    location: "Sri Lanka",
    start: "2026-04",
    end: null,
  },
  {
    title: "Software Engineer Intern",
    org: "LSEG",
    type: "Full-time",
    mode: "Hybrid",
    location: "Sri Lanka",
    start: "2025-11",
    end: "2026-05",
  },
  {
    title: "Social Media Manager",
    org: "Sri Lanka Schools Badminton Association",
    type: "Part-time",
    mode: "Hybrid",
    location: "Colombo",
    start: "2022-01",
    end: "2024-01",
    skills: ["Social Media Marketing", "Project Management"],
  },
  {
    title: "Social Media Manager",
    org: "Richmond Live",
    type: "Self-employed",
    location: "Galle",
    start: "2019-01",
    end: null,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  /** "YYYY-MM" */
  issued: string;
  credentialId?: string;
  skills?: string[];
};

export const certificationsUrl = "https://www.linkedin.com/in/sathush-nayakkara/details/certifications/";

/** Technical credentials, newest first, shown on the rail. */
export const certifications: Certification[] = [
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", issued: "2026-09", credentialId: "581ce35f-c77e-41f1-984e-e7ab498c8ad3" },
  { title: "Java: Advanced Concepts for High-Performance Development", issuer: "LinkedIn", issued: "2026-03", skills: ["Java", "Software Development"] },
  { title: "Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure", issuer: "LinkedIn", issued: "2026-02", skills: ["Machine Learning", "AI"] },
  { title: "Learning Confluence", issuer: "LinkedIn", issued: "2026-01", skills: ["Confluence"] },
  { title: "Learning Jira Software", issuer: "LinkedIn", issued: "2026-01", skills: ["Jira"] },
  { title: "API Testing Foundations", issuer: "LinkedIn", issued: "2025-12", skills: ["API Testing"] },
  { title: "LSEG Interns 2025", issuer: "Financial Edge Training", issued: "2025-11", credentialId: "167655868" },
  { title: "AI Agents with MongoDB", issuer: "MongoDB", issued: "2025-10", credentialId: "MDBe0xc274sfq" },
  { title: "MongoDB Java Developer Path", issuer: "MongoDB", issued: "2025-10", credentialId: "MDB6vooqmsodx" },
  { title: "CI/CD for Beginners", issuer: "Simplilearn", issued: "2025-07", skills: ["CI/CD", "Jenkins"] },
  { title: "Docker Essentials: A Developer Introduction", issuer: "Cognitive Class (IBM)", issued: "2025-07", credentialId: "4c06d569f150453b8b4a7e061870d854" },
];

/** Professional-skills courses, listed in a single line under the rail. */
export const otherCourses = ["Communication Foundations", "Developing Your Emotional Intelligence", "Outlook Essential Training (Microsoft 365)"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** LinkedIn-style length, counting both the first and last month: "2 yrs 1 mo". */
export function roleLength(start: string, end: string | null, now = new Date()) {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean);
  return parts.join(" ");
}
