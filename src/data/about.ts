/*
 * CONTEÚDO DO ABOUT
 * Fase 1 (paridade): textos copiados exatamente do Framer, inclusive o que está
 * desatualizado ("two years of experience", empregadores antigos). Revisar na etapa de copy.
 */

export const intro = {
  breadcrumb: { home: "Home", current: "About" },
  title:
    "Hello, I'm Danilo. I'm a Brazilian designer with a software development background and two years of experience. Before design, I worked as a full-stack developer and QA analyst, which helps me think critically about technical constraints and quality.",
  paragraphs: [
    "Currently, I work at Software House - UNDB on a port automation system. For SEFAZ-MA, via Golden Cloud Technology, I proposed and have been structuring a design system to improve consistency across public digital services.",
    "I’m driven by organisation, discipline, and the desire to grow while positively impacting those around me. Outside of design, I enjoy sports and games as ways to stay focused and balanced.",
  ],
  // Fotos originais (para quando a mídia entrar):
  // retrato:   https://framerusercontent.com/images/d49lbUqHJjLPNMs9oRL81sY3kE.jpeg
  // palestra:  https://framerusercontent.com/images/R0GktDNmzdHJdPgASSUqbs9hpE.jpg
  // livro:     https://framerusercontent.com/images/qfOXmDjBm7D4hXq5xvziKdfXl0.jpg  (alinhada ao canto inferior direito)
};

export const experience = {
  title: "My Experiences",
  resumeLabel: "View my Resume",
  // No Framer, os itens da descrição são separados por espaço duplo dentro de um só parágrafo
  // (o navegador mostra como espaço simples). Mantido igual.
  items: [
    {
      role: "QA Analyst",
      company: "Golden Cloud Technology",
      period: "2024 - Present",
      description:
        "Working setting a design system and encouraging data-driven decisions.  Implementation of Google Analytics and Hotjar;  Leading a Design system implementation project;  Assisting managers in creating project scopes;",
    },
    {
      role: "UX Designer",
      company: "Software House UNDB",
      period: "2024 - Present",
      description:
        "Working on research and the design of a port automation system for Porto do Itaqui.  Improved productivity by optimising workflows;  Increased ship traffic per period and engagement;  Estimated reduction in demurrage fees;",
    },
    {
      role: "Developer",
      company: "INAED - Soluções em Gestão",
      period: "2022 - 2024",
      description:
        "Worked creating and prototyping landing pages and the company website.  Introduced analytics and research practices;  Increased visibility for consulting services;  Supported the IT team with tools and processes;",
    },
  ],
};

export const stack = {
  title: "Stack",
  subtitle: "Software & services I use in my workflow.",
  // Logos originais em https://framerusercontent.com/images/<arquivo>
  items: [
    { name: "Figma", category: "Design Tool", href: "https://figma.com/", logo: "NRhLNXkDhrNFdUWshwPwpwpQY4.png" },
    { name: "Miro", category: "Whiteboard", href: "https://miro.com/pt/", logo: "ksN15SRsu6cup2TpO1yj5gkg5M.png" },
    { name: "Framer", category: "Website Builders", href: "https://www.framer.com", logo: "SH8Y5i7eXXTqhJCZprHCBS5atU.png" },
    { name: "Slack", category: "Productivity", href: "https://slack.com/", logo: "ZDl2Uow7hReCgWRz5s0nnyVOJI.png" },
    { name: "Google Analytics", category: "Web Analytics", href: "https://developers.google.com/analytics", logo: "CFrYhoN1kJfGUNqoChUfR53rU.png" },
    { name: "Hotjar", category: "Web Analytics", href: "https://www.hotjar.com/", logo: "ykOqd6XmoRUDZ95oTytIz0bYZMI.png" },
    // Igual ao Framer: o link do Jira carrega parâmetros de rastreamento de anúncio (gclid etc.).
    // Sugestão para a revisão: trocar por https://www.atlassian.com/software/jira
    {
      name: "Jira",
      category: "Work Tracking",
      href: "https://www.atlassian.com/software/jira?campaign=19313279983&adgroup=144583555677&targetid=aud-1927178452745:kwd-855725830&matchtype=e&network=g&device=c&device_model=&creative=697033394604&keyword=jira&placement=&target=&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gad_campaignid=19313279983&gbraid=0AAAAAD_uzhC9QKMZPbaMFf23spo-Ogf9x&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOglBIqevrd8GdFbGFtcyJUhcqaGzfiVUao-w6cV9EwysctvLyv-68qAaAn3SEALw_wcB",
      logo: "B6ebmK3FiWbhrhhWWC9wzdddzc.png",
    },
    { name: "Typeform", category: "Survey", href: "https://www.typeform.com/", logo: "kmS22jhgzkBTCjOUczQiXifIyM.png" },
    { name: "Maze", category: "Research", href: "https://maze.co/", logo: "05gwPw7AwuAO8MrZPh0S41oeoE.png" },
  ],
};
