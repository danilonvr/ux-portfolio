/*
 * CASES — rotas por idioma.
 * Os arquivos ficam em src/content/cases/<idioma>/<slug>.mdx (en/ e pt/).
 * Regra do projeto: todo case existe nos DOIS idiomas, com o mesmo nome de arquivo.
 *
 * EN: Case routes per language. Each case lives in cases/en/ and cases/pt/ with the same file name.
 */
import { getCollection } from "astro:content";
import type { Lang } from "../i18n";

// Cases que ainda não têm .mdx: mantêm a URL funcionando com um esboço temporário
const pending = ["df-no-ponto"];

export async function getCasePaths(lang: Lang) {
  const cases = await getCollection("cases", (entry) => entry.id.startsWith(`${lang}/`));
  const migrated = cases.map((entry) => {
    const slug = entry.id.slice(lang.length + 1);
    return { params: { slug }, props: { entry, slug } };
  });
  const stubs = pending.map((slug) => ({ params: { slug }, props: { entry: undefined, slug } }));
  return [...migrated, ...stubs];
}
