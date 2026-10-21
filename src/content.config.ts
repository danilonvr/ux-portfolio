/*
 * COLEÇÕES DE CONTEÚDO
 * Cada case é um arquivo .mdx em src/content/cases/.
 * O cabeçalho (frontmatter) segue o schema abaixo; o corpo usa os blocos de src/components/case/.
 * Guia de como escrever um case: src/content/cases/README.md
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cases = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    company: z.string(),
    role: z.string(),
    duration: z.string(),
    year: z.string(),
    // Texto alternativo/rótulo da capa enquanto a mídia é placeholder
    cover: z.string().optional(),
  }),
});

export const collections = { cases };
