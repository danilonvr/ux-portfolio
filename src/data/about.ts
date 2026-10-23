/*
 * CONTEÚDO DO ABOUT — inglês (en) e português (pt).
 * Regra do projeto: ao alterar um texto, altere os DOIS idiomas.
 *
 * Inglês: copiado do Framer na Fase 1, inclusive o que está desatualizado
 * ("two years of experience", empregadores antigos). Revisar na etapa de copy.
 * Português: tradução do inglês (mesmas desatualizações).
 *
 * EN: About content in English and Portuguese. Change both.
 */
import type { Lang } from "../i18n";

// Fotos originais (para quando a mídia entrar):
// retrato:   https://framerusercontent.com/images/d49lbUqHJjLPNMs9oRL81sY3kE.jpeg
// palestra:  https://framerusercontent.com/images/R0GktDNmzdHJdPgASSUqbs9hpE.jpg
// livro:     https://framerusercontent.com/images/qfOXmDjBm7D4hXq5xvziKdfXl0.jpg  (alinhada ao canto inferior direito)

const content = {
  en: {
    intro: {
      breadcrumb: { home: "Home", current: "About" },
      title:
        "Hello, I'm Danilo. I'm a Brazilian designer with a software development background and two years of experience. Before design, I worked as a full-stack developer and QA analyst, which helps me think critically about technical constraints and quality.",
      paragraphs: [
        "Currently, I work at Software House - UNDB on a port automation system. For SEFAZ-MA, via Golden Cloud Technology, I proposed and have been structuring a design system to improve consistency across public digital services.",
        "I’m driven by organisation, discipline, and the desire to grow while positively impacting those around me. Outside of design, I enjoy sports and games as ways to stay focused and balanced.",
      ],
    },
    experience: {
      title: "My Experiences",
      resumeLabel: "View my Resume",
      // No Framer, os itens da descrição são separados por espaço duplo dentro de um só parágrafo
      // (o navegador mostra como espaço simples). Mantido igual.
      items: [
        {
          role: "QA Analyst",
          period: "2024 - Present",
          description:
            "Working setting a design system and encouraging data-driven decisions.  Implementation of Google Analytics and Hotjar;  Leading a Design system implementation project;  Assisting managers in creating project scopes;",
        },
        {
          role: "UX Designer",
          period: "2024 - Present",
          description:
            "Working on research and the design of a port automation system for Porto do Itaqui.  Improved productivity by optimising workflows;  Increased ship traffic per period and engagement;  Estimated reduction in demurrage fees;",
        },
        {
          role: "Developer",
          period: "2022 - 2024",
          description:
            "Worked creating and prototyping landing pages and the company website.  Introduced analytics and research practices;  Increased visibility for consulting services;  Supported the IT team with tools and processes;",
        },
      ],
    },
    stack: {
      title: "Stack",
      subtitle: "Software & services I use in my workflow.",
      categories: {
        design: "Design Tool",
        whiteboard: "Whiteboard",
        builder: "Website Builders",
        productivity: "Productivity",
        analytics: "Web Analytics",
        tracking: "Work Tracking",
        survey: "Survey",
        research: "Research",
      },
    },
  },

  pt: {
    intro: {
      breadcrumb: { home: "Home", current: "Sobre Mim" },
      title:
        "Olá, eu sou o Danilo. Sou um designer brasileiro com background em desenvolvimento de software e dois anos de experiência. Antes do design, trabalhei como desenvolvedor full-stack e analista de QA, o que me ajuda a pensar de forma crítica sobre restrições técnicas e qualidade.",
      paragraphs: [
        "Atualmente, trabalho na Software House da UNDB em um sistema de automação portuária. Para a SEFAZ-MA, pela Golden Cloud Technology, propus e venho estruturando um design system para melhorar a consistência dos serviços digitais públicos.",
        "Sou movido por organização, disciplina e pela vontade de crescer impactando positivamente quem está ao meu redor. Fora do design, gosto de esportes e games como formas de manter o foco e o equilíbrio.",
      ],
    },
    experience: {
      title: "Minhas Experiências",
      resumeLabel: "Ver meu currículo",
      items: [
        {
          role: "Analista de QA",
          period: "2024 - Atual",
          description:
            "Estruturando um design system e incentivando decisões orientadas a dados.  Implementação de Google Analytics e Hotjar;  Liderança de um projeto de implementação de design system;  Apoio aos gestores na criação de escopos de projeto;",
        },
        {
          role: "UX Designer",
          period: "2024 - Atual",
          description:
            "Pesquisa e design de um sistema de automação portuária para o Porto do Itaqui.  Aumento de produtividade com a otimização de fluxos de trabalho;  Aumento do tráfego de navios por período e do engajamento;  Redução estimada nas taxas de sobrestadia;",
        },
        {
          role: "Desenvolvedor",
          period: "2022 - 2024",
          description:
            "Criação e prototipação de landing pages e do site da empresa.  Introdução de práticas de analytics e pesquisa;  Aumento da visibilidade dos serviços de consultoria;  Apoio ao time de TI com ferramentas e processos;",
        },
      ],
    },
    stack: {
      title: "Stack",
      subtitle: "Softwares e serviços que uso no meu fluxo de trabalho.",
      categories: {
        design: "Ferramenta de design",
        whiteboard: "Quadro colaborativo",
        builder: "Criador de sites",
        productivity: "Produtividade",
        analytics: "Análise web",
        tracking: "Gestão de tarefas",
        survey: "Formulários",
        research: "Pesquisa",
      },
    },
  },
};

/* Dados que não dependem do idioma */
const companies = ["Golden Cloud Technology", "Software House UNDB", "INAED - Soluções em Gestão"];

// Logos originais em https://framerusercontent.com/images/<arquivo>
const stackItems = [
  { name: "Figma", category: "design", href: "https://figma.com/", logo: "NRhLNXkDhrNFdUWshwPwpwpQY4.png" },
  { name: "Miro", category: "whiteboard", href: "https://miro.com/pt/", logo: "ksN15SRsu6cup2TpO1yj5gkg5M.png" },
  { name: "Framer", category: "builder", href: "https://www.framer.com", logo: "SH8Y5i7eXXTqhJCZprHCBS5atU.png" },
  { name: "Slack", category: "productivity", href: "https://slack.com/", logo: "ZDl2Uow7hReCgWRz5s0nnyVOJI.png" },
  { name: "Google Analytics", category: "analytics", href: "https://developers.google.com/analytics", logo: "CFrYhoN1kJfGUNqoChUfR53rU.png" },
  { name: "Hotjar", category: "analytics", href: "https://www.hotjar.com/", logo: "ykOqd6XmoRUDZ95oTytIz0bYZMI.png" },
  // Igual ao Framer: o link do Jira carrega parâmetros de rastreamento de anúncio (gclid etc.).
  // Sugestão para a revisão: trocar por https://www.atlassian.com/software/jira
  {
    name: "Jira",
    category: "tracking",
    href: "https://www.atlassian.com/software/jira?campaign=19313279983&adgroup=144583555677&targetid=aud-1927178452745:kwd-855725830&matchtype=e&network=g&device=c&device_model=&creative=697033394604&keyword=jira&placement=&target=&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gad_campaignid=19313279983&gbraid=0AAAAAD_uzhC9QKMZPbaMFf23spo-Ogf9x&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOglBIqevrd8GdFbGFtcyJUhcqaGzfiVUao-w6cV9EwysctvLyv-68qAaAn3SEALw_wcB",
    logo: "B6ebmK3FiWbhrhhWWC9wzdddzc.png",
  },
  { name: "Typeform", category: "survey", href: "https://www.typeform.com/", logo: "kmS22jhgzkBTCjOUczQiXifIyM.png" },
  { name: "Maze", category: "research", href: "https://maze.co/", logo: "05gwPw7AwuAO8MrZPh0S41oeoE.png" },
] as const;

export function getAboutContent(lang: Lang) {
  const c = content[lang];
  return {
    intro: c.intro,
    experience: {
      ...c.experience,
      items: c.experience.items.map((item, i) => ({ ...item, company: companies[i] })),
    },
    stack: {
      title: c.stack.title,
      subtitle: c.stack.subtitle,
      items: stackItems.map((item) => ({ ...item, category: c.stack.categories[item.category] })),
    },
  };
}
