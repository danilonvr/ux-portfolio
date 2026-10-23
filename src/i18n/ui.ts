/*
 * TEXTOS DE INTERFACE — botões, rótulos e textos para leitores de tela.
 * Conteúdo (Home, About, cases) fica em src/data e src/content; aqui só a "moldura" do site.
 *
 * Regra do projeto: todo texto novo entra nos DOIS idiomas.
 * Rótulos em PT seguem os termos já usados no Framer ("Projetos", "Sobre Mim", "Entre em contato").
 *
 * EN: Interface strings (buttons, labels, screen-reader text). Every new string goes in both languages.
 */
import type { Lang } from "./index";

export const ui = {
  en: {
    "nav.label": "Main",
    "nav.labelMobile": "Main (mobile)",
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "header.cta": "Get in Touch",
    "header.homeLink": "Home",
    "menu.open": "Menu",
    "menu.close": "Close",

    "lang.button": "Change language",
    "lang.current": "Current language",

    "footer.resume": "Resume",
    "footer.contact": "Contact Me",

    "breadcrumb.label": "Breadcrumb",

    "toc.label": "On this page",
    "toc.compact": "On this page (compact)",

    "case.company": "Company",
    "case.role": "Role",
    "case.duration": "Duration",
    "case.year": "Year",
    "case.coverFallback": "Case cover",

    "experience.company": "Company:",
    "experience.period": "Period:",

    "gallery.label": "Photo gallery (use the arrow keys to navigate)",
    "gallery.prev": "Previous photo",
    "gallery.next": "Next photo",

    "media.image": "Image",
    "media.video": "Video",

    "stub.label": "[under construction]",
  },
  pt: {
    "nav.label": "Principal",
    "nav.labelMobile": "Principal (mobile)",
    "nav.home": "Home",
    "nav.work": "Projetos",
    "nav.about": "Sobre Mim",
    "header.cta": "Entre em contato",
    "header.homeLink": "Início",
    "menu.open": "Menu",
    "menu.close": "Fechar",

    "lang.button": "Mudar idioma",
    "lang.current": "Idioma atual",

    "footer.resume": "Currículo",
    "footer.contact": "Fale comigo",

    "breadcrumb.label": "Trilha de navegação",

    "toc.label": "Nesta página",
    "toc.compact": "Nesta página (compacto)",

    "case.company": "Empresa",
    "case.role": "Função",
    "case.duration": "Duração",
    "case.year": "Ano",
    "case.coverFallback": "Capa do case",

    "experience.company": "Empresa:",
    "experience.period": "Período:",

    "gallery.label": "Galeria de fotos (use as setas do teclado para navegar)",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Próxima foto",

    "media.image": "Imagem",
    "media.video": "Vídeo",

    "stub.label": "[em construção]",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

/* Uso: const t = useTranslations(lang); t("nav.work") */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.en[key];
}
