# Mini Design System — Portfólio Danilo Valois

Documento vivo. Cresce junto com o site: cada token ou componente novo entra aqui **antes** de ser usado em mais de um lugar.

- **Fonte dos valores:** `src/styles/tokens.css`
- **Estilos de texto reutilizáveis:** `src/styles/global.css`
- **Componentes:** `src/components/`

---

## Regras gerais

1. **Nenhum valor solto em componente.** Cor, tamanho de fonte, espaçamento e raio sempre vêm de um token (`var(--...)`). Se o valor não existe, ele é criado em `tokens.css` e documentado aqui.
2. **Tokens com nome de papel, não de aparência.** `--color-accent`, não `--color-teal`. Assim dá para trocar a cor sem renomear nada.
3. **Texto usa as classes de estilo** (`.text-heading-sm`, `.text-label`…), não `font-size` direto no componente.
4. **Mudou o visual? Atualiza aqui no mesmo commit.**
5. **Fase 1 = paridade com o Framer.** Nada muda de aparência sem decisão registrada na seção [Decisões](#decisões).

---

## Breakpoints

Iguais aos do Framer.

| Nome    | Faixa          | Media query                  |
|---------|----------------|------------------------------|
| phone   | até 809px      | `(max-width: 809.98px)`      |
| tablet  | 810px – 1199px | `(max-width: 1199.98px)`     |
| desktop | 1200px +       | padrão (sem media query)     |

O CSS é escrito **desktop primeiro**: o valor padrão é o do desktop e as media queries sobrescrevem para tablet e phone.

---

## Cor

| Token                | Valor                     | Uso                                         |
|----------------------|---------------------------|---------------------------------------------|
| `--color-bg`         | `#F6F6F6`                 | Fundo da página, header e footer            |
| `--color-text`       | `#050505`                 | Texto principal; fundo do botão primário    |
| `--color-text-80`    | `#050505` a 80%           | Corpo de texto, itens de nav, links         |
| `--color-text-60`    | `#050505` a 60%           | Rótulos e títulos secundários               |
| `--color-text-muted` | `#9FA0A3`                 | Metadados ("Brasília, Brazil"), ícone menu  |
| `--color-on-dark`    | `#F6F6F6`                 | Texto sobre fundo escuro                    |
| `--color-accent`     | `#00AE9D`                 | Estado de hover de links                    |
| `--color-border`     | `#050505` a 10%           | Linhas divisórias; placeholders de mídia    |
| `--color-glass`      | `#FFFFFF` a 50%           | Pílulas translúcidas (nav, logo no desktop) |

**Contraste (a revisar na fase de evolução):** `--color-text-muted` sobre `--color-bg` fica abaixo de 4.5:1 (WCAG AA para texto pequeno). Está igual ao Framer de propósito.

---

## Tipografia

**Famílias** (Google Fonts, gratuitas):

| Token          | Família         | Uso                         |
|----------------|-----------------|-----------------------------|
| `--font-serif` | Poltawski Nowy  | Títulos e links do footer   |
| `--font-sans`  | Inter           | Corpo, nav, botões          |
| `--font-clock` | Manrope         | Só o relógio do footer      |

**Estilos de texto** (classes em `global.css`):

| Classe              | Família | Peso | Desktop | Tablet | Phone | Line-height | Extra                  |
|---------------------|---------|------|---------|--------|-------|-------------|------------------------|
| `.text-heading-xs`  | serif   | 500  | 14      | 14     | 14    | 1.2         |                        |
| `.text-heading-sm`  | serif   | 500  | 18      | 17     | 16    | 1.2         |                        |
| `.text-heading-md`  | serif   | 500  | 22      | 21     | 20    | 1.2         |                        |
| `.text-heading-cta` | serif   | 500  | 28      | 26     | 24    | 1.2         |                        |
| `.text-body`        | sans    | 400  | 16      | 16     | 16    | 1.4         |                        |
| `.text-nav`         | sans    | 500  | 13      | 13     | 13    | 1.2         | tracking 0.03em        |
| `.text-label`       | sans    | 500  | 12      | 12     | 12    | 1.1         | caixa alta             |
| `.text-caption`     | sans    | 400  | 12      | 12     | 12    | 1.2         |                        |
| (relógio)           | Manrope | 500  | 18      | 18     | 18    | 1.2         | não muda por breakpoint|

**A mapear na Home e no About** (vistos na inspeção, ainda sem token): título do hero (64px no desktop), título de seção "Projects" (26px), título do card de projeto (24px), cargos do ticker (Inter 14px).

---

## Espaçamento

Escala: `2, 4, 5, 8, 10, 12, 16, 20, 24, 30, 40, 50, 60, 80, 100` → tokens `--space-2` … `--space-100`.

**Tokens de layout** (mudam por breakpoint):

| Token              | Desktop | Tablet | Phone | Uso                                  |
|--------------------|---------|--------|-------|--------------------------------------|
| `--container-max`  | 1200px  | —      | —     | Largura máxima do conteúdo           |
| `--page-gutter`    | 40px    | 30px   | 20px  | Padding lateral da página            |
| `--header-pad-y`   | 24px    | 20px   | 20px  | Padding vertical do header           |
| `--header-height`  | 92px    | 84px   | 74px  | Espaçador abaixo do header fixo      |
| `--footer-offset`  | 100px   | 80px   | 60px  | Espaço acima do footer               |
| `--footer-pad-top` | 100px   | 80px   | 60px  | Padding interno do topo do footer    |
| `--footer-gap`     | 100px   | 80px   | 60px  | Distância entre conteúdo e linha final |

---

## Raio, efeitos e ícones

| Token            | Valor        | Uso                                   |
|------------------|--------------|---------------------------------------|
| `--radius-pill`  | 50px         | Botões, itens de nav, logo            |
| `--radius-round` | 100px        | Container da nav, avatar              |
| `--blur-glass`   | `blur(10px)` | Fundo das pílulas translúcidas        |
| `--avatar-size`  | 34px         | Foto do logo                          |

**Ícones:** Phosphor, estilo *regular* (os mesmos do Framer). Componente `Icon.astro`. Disponíveis: `arrow-up-right`, `linkedin`, `x`. Tamanhos usados: 12px (links de texto), 14px (botões), 24px (redes sociais).

---

## Movimento

| Token             | Valor                          | Uso                            |
|-------------------|--------------------------------|--------------------------------|
| `--duration-fast` | 200ms                          | Hover de cor                   |
| `--duration-base` | 300ms                          | Abertura do menu, ícone do menu|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Padrão                         |

> **Aproximação.** O Framer não expõe as curvas usadas. Estes valores foram escolhidos por equivalência visual e serão calibrados lado a lado.

**Movimento reduzido:** com `prefers-reduced-motion: reduce`, todas as animações e transições ficam instantâneas (`global.css`). Toda animação nova precisa respeitar isso.

---

## Componentes

### Button
`src/components/Button.astro` — link com aparência de botão primário.

- Pílula `--color-text`, texto `.text-label` em `--color-on-dark`, seta 14px.
- Padding 8px 16px, gap 5px, altura 36px.
- **Hover:** nenhum (igual ao Framer).
- Prop `external` abre em nova aba com `rel="noopener noreferrer"`.
- Usado em: "Get in Touch" (header), "Resume" (footer).

### ArrowLink
`src/components/ArrowLink.astro` — link de texto em caixa alta com seta 12px.

- `.text-label` em `--color-text`, gap 5px, 2px de respiro embaixo.
- **Hover:** só a seta vai para `--color-accent`; o texto não muda.
- Usado em: "Contact Me" (footer). Será usado em "More About me" (Home).

### Header
`src/components/Header.astro` — fixo no topo, com espaçador da mesma altura.

| Breakpoint | Logo                                   | Navegação                        | Ação              |
|------------|----------------------------------------|----------------------------------|-------------------|
| desktop    | Pílula translúcida (4/12/4/4px)        | Pílula translúcida, itens em linha | Button "Get in Touch" |
| tablet     | Sem pílula                             | Igual ao desktop                 | Igual ao desktop  |
| phone      | Sem pílula                             | Botão "Menu" abre painel         | Dentro do painel  |

- **Item de nav:** `.text-nav`, padding 10px 16px, `--color-text-80`. Hover → `--color-accent`. Ativo (página atual) → fundo `--color-text`, texto `--color-on-dark`.
- "Work" é uma âncora da Home (`/#projects`) e nunca fica ativo.
- **Menu mobile:**
  - Toggle "Menu" ⇄ "Close" com ícone de 3 linhas que vira X.
  - O header expande para baixo (300ms). Conteúdo centralizado: nav vertical (gap 20px) e Button, separados por 50px.
  - Fecha com Esc e ao passar para tablet/desktop. Quando fechado, o painel fica fora do foco do teclado (`inert`).

### Footer
`src/components/Footer.astro`

- **CTA:** "Lets talk?" (`.text-heading-sm`, `--color-text-60`) + frase (`.text-heading-cta`) + Button "Resume" e ArrowLink "Contact Me".
- **Colunas:** título `.text-heading-sm` em `--color-text-60`; links `.text-heading-md` em `--color-text-80`, sem quebra de linha.
  - Hover de link: `--color-accent` + sublinhado.
- **Relógio:** hora de Brasília (`America/Sao_Paulo`), formato "7:04 PM", atualiza a cada minuto.
- **Layout:**
  - desktop: CTA 400px + colunas 3 × 213px lado a lado (gap 100px).
  - tablet: CTA em cima, colunas em 3 partes iguais (gap 50px entre blocos).
  - phone: CTA em cima, colunas em grade de 2.
- Linha final 1px `--color-border`.

### Placeholder
`src/components/Placeholder.astro` — ocupa o lugar de imagens e vídeos, mantendo a proporção. Fundo `--color-border`. Opção `round` para o avatar.

### Analytics
`src/components/Analytics.astro` — **desligado**. Espaço reservado no `<head>` para Google Analytics e Hotjar. Instruções dentro do arquivo.

---

## Decisões

Registro do que foi decidido e por quê. Mais recente em cima.

| Data       | Decisão | Motivo |
|------------|---------|--------|
| 2026-10-21 | Copy copiada exatamente do Framer, inclusive contradições ("two years" × "three years", empregador antigo). | Revisão de copy será feita depois, separada da paridade. |
| 2026-10-21 | Analytics (GA4 + Hotjar) removido, com espaço reservado. | Será configurado depois. |
| 2026-10-21 | Imagens e vídeos substituídos por placeholders com a proporção original. | Mídia entra aos poucos. URLs originais em `/content-archive`. |
| 2026-10-21 | Selo "Made in Framer" removido. | Não faz parte do site. |
| 2026-10-21 | Template de case será redesenhado; conteúdo guardado em `/content-archive/cases`. | Layout novo, conteúdo preservado. |
| 2026-10-21 | Links externos ganham `rel="noopener noreferrer"`. | Segurança; sem efeito visual. |
| 2026-10-21 | Títulos das colunas do footer usam `<h2>` (no Framer eram `<h6>`). | Hierarquia de títulos correta para leitores de tela; sem efeito visual. |

## Problemas herdados do Framer (mantidos de propósito na Fase 1)

- [ ] Link "DF no Ponto" do footer aponta para a Home, não para o case (`src/data/site.ts`).
- [ ] Idioma da página declarado como `pt-BR`, mas o conteúdo é em inglês. Afeta leitores de tela e SEO.
- [ ] "Get in Touch" e "Contact Me" levam ao LinkedIn, não ao email.
- [ ] Contraste baixo de `--color-text-muted` (ver seção Cor).
