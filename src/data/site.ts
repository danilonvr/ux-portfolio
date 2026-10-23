/*
 * DADOS DO SITE — textos e links compartilhados entre páginas (header, footer, <head>).
 *
 * Cada bloco de texto existe em inglês (en) e português (pt). Regra do projeto:
 * ao alterar um texto, altere os DOIS idiomas.
 * Links internos ficam SEM o prefixo de idioma ("/about"); o prefixo /pt é posto
 * automaticamente (src/i18n → localizePath).
 *
 * Inglês: copiado do Framer na Fase 1 (inclusive inconsistências; revisão de copy depois).
 * Português: tradução do inglês.
 *
 * EN: Shared texts and links. Every text exists in English and Portuguese; change both.
 */
import type { Lang } from "../i18n";

export const links = {
  email: "mailto:danilo.nvr@gmail.com",
  linkedin: "https://www.linkedin.com/in/danilonvr/",
  x: "https://x.com/danilonvr_",
  resume:
    "https://drive.google.com/drive/folders/1qOjDc76AwHaLhVILRypNQpRnpLagDCtX?usp=sharing",
};

const content = {
  en: {
    site: {
      name: "Danilo Valois",
      location: "Brasília, Brazil",
      title: "Danilo Valois - Product Designer",
      description:
        "Product Designer with 3 years’ experience. Led design initiatives and process improvements in large projects. Skilled in UX research and Figma. Contributed to a port automation system and currently implement a Design System in a public institution.",
    },
    footerColumns: {
      index: {
        title: "Index",
        items: [
          { label: "About", href: "/about" },
          { label: "Work", href: "/#work" },
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
    },
    footerCta: {
      eyebrow: "Lets talk?",
      title: "Wanna chat about design, innovation or why simplicity is harder than it looks?",
    },
  },

  pt: {
    site: {
      name: "Danilo Valois",
      location: "Brasília, Brasil",
      title: "Danilo Valois - Product Designer",
      description:
        "Product Designer com 3 anos de experiência. Liderou iniciativas de design e melhorias de processo em grandes projetos. Experiência em pesquisa de UX e Figma. Contribuiu para um sistema de automação portuária e atualmente implementa um Design System em uma instituição pública.",
    },
    footerColumns: {
      index: {
        title: "Índice",
        items: [
          { label: "Sobre Mim", href: "/about" },
          { label: "Projetos", href: "/#work" },
          { label: "Currículo", href: links.resume, external: true },
        ],
      },
      projects: {
        title: "Projetos",
        items: [
          { label: "EMAP", href: "/project/atraqui" },
          // Igual ao inglês: aponta para a Home, não para o case. Corrigir na revisão.
          { label: "DF no Ponto", href: "/" },
        ],
      },
      contact: {
        title: "Brasil",
        items: [
          { label: "E-mail", href: links.email, external: true },
          { label: "LinkedIn", href: links.linkedin, external: true },
          { label: "X (antigo Twitter)", href: links.x, external: true },
        ],
      },
    },
    footerCta: {
      eyebrow: "Vamos conversar?",
      title: "Quer conversar sobre design, inovação ou sobre por que a simplicidade é mais difícil do que parece?",
    },
  },
};

export function getSiteContent(lang: Lang) {
  return content[lang];
}

/* Navegação principal (rótulos em src/i18n/ui.ts) */
export const nav = [
  { key: "home", labelKey: "nav.home", href: "/" },
  { key: "work", labelKey: "nav.work", href: "/#work" },
  { key: "about", labelKey: "nav.about", href: "/about" },
] as const;

/* Relógio do footer
 * Igual ao Framer: mostra a hora LOCAL de quem visita, não a de Brasília
 * (testado: com o navegador no fuso de Tóquio, o Framer mostra a hora de Tóquio).
 * Como o rótulo diz "Brazil", o mais provável é que a intenção fosse Brasília.
 * Para isso, troque timeZone para "America/Sao_Paulo".
 * O formato segue o idioma: "7:04 PM" (en) / "19:04" (pt).
 */
export const clock = {
  timeZone: undefined as string | undefined, // undefined = fuso do visitante
};
