# Como escrever um case

Cada case é um arquivo `.mdx` nesta pasta. O nome do arquivo vira a URL:
`atraqui.mdx` → `/project/atraqui`.

## 1. Cabeçalho (obrigatório)

```mdx
---
title: "Título do case"
subtitle: "Frase curta que resume o projeto"   # opcional
category: "Product Design"
company: "Empresa"
role: "Product Designer"
duration: "1 Month"
year: "2025"
cover: "Descrição da capa"                     # opcional
---
```

## 2. Seções e sumário

Cada `## Título` vira uma seção e um item do sumário ("On this page"), automaticamente.
Use `###` para subtítulos dentro de uma seção: eles aparecem no sumário recuados, só quando a seção está aberta (desktop).

## 3. Texto

Markdown normal: parágrafos, **negrito**, listas com `-`.
Lista numerada (`1.`, `2.`…) aparece com divisórias e números `01`, `02`.

## 4. Blocos

Importe no topo do arquivo só os que for usar (veja `atraqui.mdx` como exemplo).

| Bloco | Para quê | Exemplo |
|---|---|---|
| `Columns` | 2 ou 3 colunas lado a lado (ex.: Context \| Solution). Títulos `##` lado a lado acendem juntos no sumário. | `<Columns>` com um `<div>` por coluna |
| `Media` | Imagem ou vídeo com legenda | `<Media ratio="16/9" label="Tela inicial" caption="Legenda" />` |
| `Gallery` | Carrossel de fotos com setas | `<Gallery labels={["Foto 1", "Foto 2"]} />` |
| `Grid` + `GridItem` | Itens curtos com título, separados por linhas (resultados, aprendizados) | `<GridItem title="Título">Texto</GridItem>` |
| `Csd` + `CsdColumn` | Matriz CSD em 3 colunas | `<CsdColumn title="Certainties" tone="strong">` |
| `Quote` | Fala de participante. `variant="highlight"` = destaque escuro | `<Quote author="P1">Texto</Quote>` |
| `ArrowLink` | Link em caixa alta com seta | `<ArrowLink href="https://…" external>Ver protótipo</ArrowLink>` |

**Atenção ao escrever dentro de um bloco:** deixe uma linha em branco depois da tag de abertura
e antes da de fechamento, senão o markdown de dentro não é interpretado.

```mdx
<Columns>
<div>

## Context

Texto em markdown aqui.

</div>
</Columns>
```
