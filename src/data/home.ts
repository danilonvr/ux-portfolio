/*
 * CONTEÚDO DA HOME
 * Fase 1 (paridade): textos copiados exatamente do Framer.
 * Observação: aqui diz "three years"; no About diz "two years". Revisar na etapa de copy.
 */

export const hero = {
  // Cada palavra entra com animação própria, então o título é uma lista de palavras.
  title: ["Designing", "human-centred", "solutions", "with", "logical", "foundations."],
  greeting: "Hi, I'm Danilo!",
  roles: ["Product Designer", "Lifelong Learner", "Curious Person"],
  description:
    "A designer with a software development background and three years of experience in digital products, with prior experience in full-stack development and QA, bringing a strong perspective on technical feasibility and user experience.",
  moreLabel: "More About me",
  emailLabel: "Let's talk",
  email: "danilo.nvr@gmail.com",
  socialLabel: "Social Profiles:",
};

import atraquiCover from "../assets/cases/atraqui-cover.png";
import dfNoPontoCover from "../assets/cases/df-no-ponto-cover.png";

export const projectsSection = {
  // Antes "Projects": renomeado para casar com o item "Work" da navegação
  title: "Work",
};

/* Cards da Home. A ordem aqui é a ordem na tela. */
export const projects = [
  {
    slug: "atraqui",
    // Igual ao Framer, inclusive o espaço no fim do título.
    title: "Smart Line Up: An Innovative Approach to Port Queue Management ",
    description:
      "An application developed to automate ship queue management, reducing demurrage costs, and increasing the port’s flow",
    category: "Product Design",
    year: "2025",
    cover: atraquiCover,
  },
  {
    slug: "df-no-ponto",
    title: "Increasing Predictability and Reliability in Public Transport in the Federal District",
    description:
      "A mobility app focused on real-time public transport information, enabling more predictable, informed, and efficient urban travel.",
    category: "Product Design",
    year: "2026",
    cover: dfNoPontoCover,
  },
];
