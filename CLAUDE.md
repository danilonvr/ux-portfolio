# Regras do projeto — ux-portfolio

Portfólio de Danilo Valois (Product Designer), recriado em Astro a partir do site no Framer.
Danilo revisa; o código é escrito pelo assistente. Explique decisões em português.

## Regras obrigatórias

1. **Todo texto do site existe em inglês e português.** Qualquer texto novo ou alterado entra nos DOIS idiomas no mesmo commit.
   - Interface: `src/i18n/ui.ts` · Footer/head: `src/data/site.ts` · Home/About: `src/data/home.ts`, `src/data/about.ts`
   - Cases: `src/content/cases/en/<slug>.mdx` e `src/content/cases/pt/<slug>.mdx` (mesmo nome de arquivo)
   - Inglês na raiz (`/about`), português em `/pt/` (`/pt/about`). Links internos sem prefixo + `localizePath()`.
2. **Todo ícone vem do Phosphor** (`@phosphor-icons/core`) via `src/components/Icon.astro`. Nunca colar SVG à mão.
3. **Nenhum valor visual solto:** cores, fontes, espaços, raios e movimento vêm de `src/styles/tokens.css`.
4. **Mudou visual ou comportamento? Atualize `DESIGN-SYSTEM.md`** (spec do componente + linha em "Decisões") no mesmo commit.
5. **Separar execução de opinião:** faça o que foi pedido; sugestões vão à parte, sinalizadas.

## Comandos

- `npm run dev` — desenvolvimento em http://localhost:4321
- `npm run build` — gera `dist/` (precisa passar sem erros antes de cada commit)

## Onde está o quê

Veja `README.md` (estrutura) e `DESIGN-SYSTEM.md` (tokens, componentes, decisões, problemas herdados).
