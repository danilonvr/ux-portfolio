/*
 * DADOS DO SITE — textos e links compartilhados entre páginas.
 * Para trocar um link ou rótulo, altere aqui: header e footer leem deste arquivo.
 *
 * Fase 1 (paridade): textos copiados exatamente do site no Framer,
 * inclusive inconsistências. A revisão de copy vem depois.
 */

export const site = {
  name: "Danilo Valois",
  location: "Brasília, Brazil",
  title: "Danilo Valois - Product Designer",
  description:
    "Product Designer with 3 years’ experience. Led design initiatives and process improvements in large projects. Skilled in UX research and Figma. Contributed to a port automation system and currently implement a Design System in a public institution.",
  // Igual ao Framer. Observação: o conteúdo é em inglês, mas o idioma declarado é pt-BR.
  lang: "pt-BR",
};

export const links = {
  email: "mailto:danilo.nvr@gmail.com",
  linkedin: "https://www.linkedin.com/in/danilonvr/",
  x: "https://x.com/danilonvr_",
  resume:
    "https://drive.google.com/drive/folders/1qOjDc76AwHaLhVILRypNQpRnpLagDCtX?usp=sharing",
};

/* Navegação principal (header) */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
];

/* Colunas do footer */
export const footerColumns = {
  index: {
    title: "Index",
    items: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#projects" },
      { label: "Resume", href: links.resume, external: true },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      { label: "EMAP", href: "/project/atraqui" },
      // Igual ao Framer: este link aponta para a Home, não para o case. Corrigir na revisão.
      { label: "DF no Ponto", href: "/" },
    ],
  },
  contact: {
    title: "Brazil",
    items: [
      { label: "Email", href: links.email, external: true },
      { label: "LinkedIn", href: links.linkedin, external: true },
      { label: "X (Formerly Twitter)", href: links.x, external: true },
    ],
  },
};

export const footerCta = {
  eyebrow: "Lets talk?",
  title:
    "Wanna chat about design, innovation or why simplicity is harder than it looks?",
};

/* Fuso do relógio do footer */
export const clock = {
  timeZone: "America/Sao_Paulo",
  locale: "en-US",
};
