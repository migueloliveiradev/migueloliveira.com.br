// Edite este arquivo para atualizar o conteúdo do portfolio.

export const profile = {
  name: "Miguel Oliveira",
  role: "Desenvolvedor de Software",
  // Título grande da home; a última linha recebe a cor de destaque.
  headline: ["Código que", "resolve", "de verdade."],
  location: "Brasil",
  email: "contato@migueloliveira.com.br",
  url: "https://migueloliveira.com.br",
  summary:
    "Construo aplicações web rápidas, acessíveis e fáceis de manter — do back-end à interface.",
  about: [
    "Sou desenvolvedor com foco em produtos web. Gosto de transformar problemas complexos em soluções simples, com código limpo e boa experiência para quem usa.",
    "Atualmente trabalho principalmente com TypeScript, React e Next.js, e estou sempre explorando novas ferramentas para entregar software melhor.",
  ],
  // Card "agora" da home: no que você está trabalhando no momento.
  now: [
    { label: "Foco", value: "Produtos web com Next.js" },
    { label: "Estudando", value: "React Compiler e performance" },
    { label: "Disponível", value: "Para novos projetos" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "migueloliveira.com.br",
    description:
      "Este portfolio, construído com Next.js, React Compiler e Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "https://migueloliveira.com.br",
  },
  {
    title: "Projeto exemplo",
    description: "Descreva aqui um projeto do qual você se orgulha.",
    tags: ["TypeScript", "Node.js"],
  },
  {
    title: "Outro projeto",
    description: "Problema resolvido, sua contribuição e o resultado.",
    tags: ["React", "PostgreSQL"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Empresa atual",
    role: "Desenvolvedor de Software",
    period: "2024 — Atual",
    description: "Principais responsabilidades e conquistas nesta posição.",
  },
  {
    company: "Empresa anterior",
    role: "Desenvolvedor Júnior",
    period: "2022 — 2024",
    description: "Principais responsabilidades e conquistas nesta posição.",
  },
];
