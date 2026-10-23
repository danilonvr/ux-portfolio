/*
 * IDIOMAS — rotas e utilidades
 *
 * Inglês (padrão) fica na raiz:      /           /about          /project/atraqui
 * Português fica sob /pt/:           /pt/        /pt/about       /pt/project/atraqui
 *
 * O idioma vem SEMPRE da URL. Não há detecção automática nem redirecionamento:
 * a pessoa escolhe no seletor (globo) do header.
 *
 * EN: The language always comes from the URL (English at the root, Portuguese under /pt/).
 * No auto-detection or redirects; visitors pick a language in the header switcher.
 */

export const languages = {
  en: { label: "English", htmlLang: "en", locale: "en-US" },
  pt: { label: "Português", htmlLang: "pt-BR", locale: "pt-BR" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";
export const langs = Object.keys(languages) as Lang[];

/* Idioma da página a partir da URL */
export function getLang(url: URL): Lang {
  return url.pathname === "/pt" || url.pathname.startsWith("/pt/") ? "pt" : "en";
}

/* Caminho sem o prefixo de idioma: "/pt/about" → "/about" */
export function stripLang(pathname: string): string {
  if (pathname === "/pt" || pathname === "/pt/") return "/";
  if (pathname.startsWith("/pt/")) return pathname.slice(3);
  return pathname;
}

/*
 * Caminho no idioma pedido. Aceita âncoras e caminhos sem idioma:
 *   localizePath("/about", "pt")  → "/pt/about"
 *   localizePath("/#work", "pt")  → "/pt/#work"
 *   localizePath("/", "pt")       → "/pt/"
 * Links externos (https:, mailto:) voltam sem mudança.
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith("/")) return path;
  const clean = stripLang(path);
  return lang === defaultLang ? clean : `/pt${clean}`;
}

/* Mesma página no outro idioma (usado pelo seletor e pelo hreflang) */
export function alternatePath(url: URL, lang: Lang): string {
  // Sem barra no fim ("/about/" → "/about"), igual aos links da navegação
  const path = stripLang(url.pathname).replace(/(.)\/$/, "$1");
  return localizePath(path, lang);
}
