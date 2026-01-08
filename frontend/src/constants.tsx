import { 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  Server, 
  Database, 
  Layout, 
 
  BarChart3,
  ShoppingBag,
  MessageSquare,
  GitBranch,
  Globe
} from 'lucide-react';
import { NavItem, Project, Experience, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Jornada', href: '#experience' },
];

export const HERO_DATA = {
  name: "Nilton Costa",
  role: "Full Stack Developer",
  location: "Disponível Remotamente",
  available: true,
  cta: "Vamos conversar"
};

export const ABOUT_DATA = {
  title: "Sobre Mim",
  description: "Desenvolvedor Full Stack de 21 anos, apaixonado por construir ecossistemas web modernos e performáticos utilizando o poder do ecossistema JavaScript/TypeScript.",
  bio: [
    "Olá! Me chamo Nilton Carlos Domingas Da Costa. Com 21 anos e atuando há 1 ano profissionalmente no mercado de tecnologia, foco minha energia em criar soluções que são tão robustas no backend quanto bonitas no frontend.",
    "Domino o desenvolvimento de ponta a ponta, desde a modelagem de bancos de dados com Postgres e Drizzle/Prisma, até a criação de interfaces reativas com React e Next.js.",
    "Acredito que um bom código é aquele que resolve problemas reais. Estou sempre buscando novas arquiteturas e melhores práticas para entregar software escalável e de fácil manutenção."
  ],
  stats: [
    { label: "Anos Exp.", value: "1+" },
    { label: "Stack Principal", value: "React/Node" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'KAMBA Financeiro',
    description: 'Plataforma de gestão financeira pessoal com dashboard em tempo real, utilizando Next.js para renderização e Drizzle ORM para consultas otimizadas.',
    tags: ['Next.js', 'TypeScript', 'Drizzle', 'Postgres'],
    image: 'https://picsum.photos/600/400?random=10',
    link: '#',
    icon: BarChart3
  },
  {
    id: '2',
    title: 'E-commerce Kitroca',
    description: 'Frontend completo para e-commerce, com navegação intuitiva, funcionalidades de carrinho de compras e checkout completo.',
    tags: ['Node.js', 'Express', 'Drizzle', 'Postgres', 'React'],
    image: 'https://picsum.photos/600/400?random=11',
    link: '#',
    icon: ShoppingBag
  },
  {
    id: '3',
    title: 'Site Empresarial Mil Vendas',
    description: 'Website corporativo dinâmico com suporte ao cliente, Funções de publicação de artigos, atualização de portifolio e envio de newslleters.',
    tags: ['React','Tailwind', 'Node.js'],
    image: 'https://picsum.photos/600/400?random=12',
    link: '#',
    icon: MessageSquare
  },
  
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Full Stack Developer',
    company: 'Atual',
    period: '2025 — Presente',
    description: 'Desenvolvimento e manutenção de aplicações web modernas. Atuação direta na criação de APIs RESTful com Node.js e interfaces responsivas com React/Next.js. Implementação de bancos de dados relacionais com Postgres e ORMs modernos.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Postgres']
  },
  {
    id: '2',
    role: 'Desenvolvedor Web Freelancer',
    company: 'Autônomo',
    period: '2024 — 2023',
    description: 'Criação de landing pages de alta conversão e sistemas administrativos personalizados para pequenos negócios. Foco em SEO, performance e experiência do usuário.',
    technologies: ['React', 'Tailwind', 'Javascript', 'Git']
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Layout },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'Tailwind', icon: Layout },
  { name: 'Postgres', icon: Database },
  { name: 'Prisma', icon: Database },
  { name: 'Drizzle', icon: Database },
  { name: 'Git & Github', icon: GitBranch },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/NiltonCarlosdawg', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];