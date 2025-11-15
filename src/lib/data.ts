import { 
  Smartphone, 
  Cloud, 
  BrainCircuit, 
  Monitor, 
  ShieldCheck, 
  Award, 
  Users, 
  GitBranch,
  Rocket,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2
} from 'lucide-react';

export type Link = { href: string; label: string };

export const NAV_LINKS: Link[] = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
];

export type FooterSection = { title: string; links: Link[] };

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/mobile-development', label: 'Mobile Development' },
      { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      { href: '/services/ai-ml', label: 'AI & ML' },
    ],
  },
];

export type SocialLink = { name: string; href: string; icon: string };

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: '#', icon: 'Github' },
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
];

export const HERO_DATA = {
  headline: "Build, Launch, and Scale Your Software Vision",
  subheadline: "We are your end-to-end technology partner, providing expert-led services in web, mobile, cloud, and AI to turn your ideas into reality.",
  cta1: { href: "/services", label: "Our Services" },
  cta2: { href: "/contact", label: "Get in Touch" },
  image: {
    src: "https://placehold.co/1200x800/e0e7ff/4f46e5?text=Modern+App+UI",
    alt: "Modern Application UI Screenshot"
  }
};

export const FEATURED_SERVICES_DATA = {
  title: "A Full Suite of Services",
  description: "From initial concept to final deployment, we have the expertise to cover every angle of your product's development.",
  services: [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Crafting beautiful, responsive, and high-performance websites and web applications.",
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building native and cross-platform mobile apps that delight users on iOS and Android.",
      href: "/services/mobile-development"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Expert cloud architecture, migration, and DevOps to scale your infrastructure.",
      href: "/services/cloud-solutions"
    },
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions to automate processes and unlock data-driven insights.",
      href: "/services/ai-ml"
    }
  ]
};

export const ABOUT_SECTION_DATA = {
  title: "Who We Are",
  subtitle: "Your Trusted Technology Partner",
  description: "We are a team of passionate engineers, designers, and strategists dedicated to delivering world-class software solutions. With years of experience across various industries, we help businesses transform their ideas into scalable, user-centric products.",
  cta: { href: "/about", label: "Learn More About Us" },
  image: {
    src: "https://placehold.co/1000x800/f0f4ff/4f46e5?text=Team+at+Work",
    alt: "Team collaborating on a project"
  }
};

export const ACHIEVEMENTS_DATA = {
  title: "Proven Track Record",
  description: "Numbers that speak to our commitment and success.",
  stats: [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: GitBranch, label: "Projects Completed", value: "1,200+" },
    { icon: ShieldCheck, label: "Years in Business", value: "10+" },
    { icon: Award, label: "Industry Awards", value: "50+" }
  ]
};

export const CERTIFICATIONS_DATA = {
  title: "Certified Excellence",
  description: "Our team holds industry-recognized certifications ensuring top-tier quality and security.",
  certifications: [
    "ISO 9001:2015 Certified",
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "Certified Scrum Master",
    "PMP Certified Project Managers"
  ]
};

export const TECHNOLOGIES_DATA = {
  title: "Cutting-Edge Technologies",
  description: "We leverage the latest tools and frameworks to deliver exceptional results.",
  categories: [
    {
      name: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "Java", "Go", ".NET", "Ruby on Rails"]
    },
    {
      name: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    }
  ]
};

export {
  Rocket,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2
};
