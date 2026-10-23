/*
 * CONTEÚDO DA HOME — inglês (en) e português (pt).
 * Regra do projeto: ao alterar um texto, altere os DOIS idiomas.
 *
 * Inglês: copiado do Framer na Fase 1. Observação: aqui diz "three years"; no About diz
 * "two years". Revisar na etapa de copy. Português: tradução do inglês (mesma inconsistência).
 *
 * EN: Home content in English and Portuguese. Change both.
 */
import type { Lang } from "../i18n";
import atraquiCover from "../assets/cases/atraqui-cover.png";
import dfNoPontoCover from "../assets/cases/df-no-ponto-cover.png";

const content = {
  en: {
    hero: {
      // Cada palavra entra com animação própria, então o título é uma lista de palavras.
      title: ["Designing", "human-centred", "solutions", "with", "logical", "foundations."],
      greeting: "Hi, I'm Danilo!",
      roles: ["Product Designer", "Lifelong Learner", "Curious Person"],
      description:
        "A designer with a software development background and three years of experience in digital products, with prior experience in full-stack development and QA, bringing a strong perspective on technical feasibility and user experience.",
      moreLabel: "More About me",
      emailLabel: "Let's talk",
      socialLabel: "Social Profiles:",
    },
    // Antes "Projects": renomeado para casar com o item "Work" da navegação
    projectsTitle: "Work",
    projects: {
      // Igual ao Framer, inclusive o espaço no fim do título.
      atraqui: {
        title: "Smart Line Up: An Innovative Approach to Port Queue Management ",
        description:
          "An application developed to automate ship queue management, reducing demurrage costs, and increasing the port’s flow",
      },
      "df-no-ponto": {
        title: "Increasing Predictability and Reliability in Public Transport in the Federal District",
        description:
          "A mobility app focused on real-time public transport information, enabling more predictable, informed, and efficient urban travel.",
      },
    },
  },

  pt: {
    hero: {
      title: ["Projetando", "soluções", "centradas", "nas", "pessoas", "com", "fundamentos", "lógicos."],
      greeting: "Oi, eu sou o Danilo!",
      // "Eterno Aprendiz" e "Pessoa Curiosa": termos que já eram usados no Framer
      roles: ["Product Designer", "Eterno Aprendiz", "Pessoa Curiosa"],
      description:
        "Designer com background em desenvolvimento de software e três anos de experiência em produtos digitais, com passagem por desenvolvimento full-stack e QA, o que traz uma visão sólida sobre viabilidade técnica e experiência do usuário.",
      moreLabel: "Mais sobre mim",
      emailLabel: "Vamos conversar",
      socialLabel: "Redes sociais:",
    },
    projectsTitle: "Projetos",
    projects: {
      atraqui: {
        title: "Smart Line Up: uma abordagem inovadora para a gestão de filas portuárias",
        description:
          "Um sistema desenvolvido para automatizar a gestão da fila de navios, reduzindo custos de sobrestadia e aumentando o fluxo do porto",
      },
      "df-no-ponto": {
        title: "Aumentando a previsibilidade e a confiabilidade do transporte público no Distrito Federal",
        description:
          "Um app de mobilidade focado em informações de transporte público em tempo real, para deslocamentos urbanos mais previsíveis, informados e eficientes.",
      },
    },
  },
};

/* Dados que não dependem do idioma. A ordem aqui é a ordem dos cards na tela. */
const projectsBase = [
  { slug: "atraqui", category: "Product Design", year: "2025", cover: atraquiCover },
  { slug: "df-no-ponto", category: "Product Design", year: "2026", cover: dfNoPontoCover },
] as const;

export const email = "danilo.nvr@gmail.com";

export function getHomeContent(lang: Lang) {
  const c = content[lang];
  return {
    hero: c.hero,
    projectsTitle: c.projectsTitle,
    projects: projectsBase.map((p) => ({ ...p, ...c.projects[p.slug] })),
  };
}
