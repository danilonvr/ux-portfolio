# Mini Design System — Portfólio Danilo Valois

Documento vivo. Cresce junto com o site: cada token ou componente novo entra aqui **antes** de ser usado em mais de um lugar.

- **Fonte dos valores:** `src/styles/tokens.css`
- **Estilos de texto reutilizáveis:** `src/styles/global.css`
- **Componentes:** `src/components/`

---

## Regras gerais

1. **Nenhum valor solto em componente.** Cor, tamanho de fonte, espaçamento e raio sempre vêm de um token (`var(--...)`). Se o valor não existe, ele é criado em `tokens.css` e documentado aqui.
2. **Tokens com nome de papel, não de aparência.** `--color-highlight`, não `--color-teal`. Assim dá para trocar a cor sem renomear nada.
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
| `--color-text-primary`   | `#050505`              | **Texto primário:** títulos, maior ênfase; fundo do botão primário |
| `--color-text-secondary` | `#050505` a 80%        | **Texto secundário:** corpo de texto, itens de nav, links |
| `--color-text-tertiary`  | `#050505` a 60%        | **Texto terciário:** rótulos, metadados, itens inativos |
| `--color-text-muted` | `#9FA0A3`                 | Metadados ("Brasília, Brazil"), ícone menu  |
| `--color-on-dark`    | `#F6F6F6`                 | Texto sobre fundo escuro                    |
| `--color-highlight`      | `#00AE9D`              | **Destaque:** item ativo do sumário; hover de links |
| `--color-selected-bg`    | `#EFEFF1`              | Fundo do item selecionado na navegação principal |
| `--color-selected-border`| `#050505` a 15%        | Contorno de 1px do item selecionado (elevação) |
| `--color-border`     | `#050505` a 10%           | Linhas divisórias, topo do footer; placeholders de mídia |
| `--color-border-subtle` | `#050505` a 5%         | Contorno de cards (projeto, experiência)    |
| `--color-border-faint`  | `#050505` a 3%         | Contorno dos itens da stack                 |
| `--color-glass`      | `#FFFFFF` a 50%           | Pílulas translúcidas (nav, logo no desktop) |
| `--color-surface`    | `#050505` a 3%            | Fundo de cards e botões de ícone            |

**Contraste (a revisar):**
- `--color-text-muted` sobre `--color-bg` fica abaixo de 4.5:1 (WCAG AA para texto pequeno). Igual ao Framer, de propósito.
- `--color-highlight` (`#00AE9D`) sobre `--color-bg` dá **2,58:1**. Como cor de texto (sumário, hover), fica abaixo do mínimo de 4.5:1. Um tom que passa: `#007A6B` (4,86:1).

---

## Tipografia

**Famílias** (Google Fonts, gratuitas):

| Token          | Família         | Uso                         |
|----------------|-----------------|-----------------------------|
| `--font-serif` | Poltawski Nowy  | Títulos e links do footer   |
| `--font-sans`  | Inter           | Corpo, nav, botões          |
| `--font-clock` | Manrope         | Só o relógio do footer      |

**Estilos de texto** (classes em `global.css`):

| Classe               | Família | Peso | Desktop | Tablet | Phone | Line-height | Uso / extra                         |
|----------------------|---------|------|---------|--------|-------|-------------|-------------------------------------|
| `.text-display`      | serif   | 400  | 64      | 52     | 38    | 1.2         | Título do hero                      |
| `.text-title`        | serif   | 400  | 52      | 44     | 34    | 1.15        | Título da página de case            |
| `.text-heading-cta`  | serif   | 500  | 28      | 26     | 24    | 1.2         | Frase de CTA do footer              |
| `.text-heading-lg`   | serif   | 500  | 26      | 24     | 22    | 1.2         | Título de seção ("Projects")        |
| `.text-heading-card` | serif   | 500  | 24      | 22     | 20    | 1.2         | Título do card de projeto           |
| `.text-heading-md`   | serif   | 500  | 22      | 21     | 20    | 1.2         | Links do footer                     |
| `.text-heading-item` | serif   | 500  | 20      | 19     | 18    | 1.2         | Cargo no card de experiência        |
| `.text-heading-sm`   | serif   | 500  | 18      | 17     | 16    | 1.2         | Rótulos serifados, "Hi, I'm Danilo!"|
| `.text-heading-xs`   | serif   | 500  | 14      | 14     | 14    | 1.2         | Nome no logo                        |
| `.text-body`         | sans    | 400  | 16      | 16     | 16    | 1.4         | Corpo de texto                      |
| `.text-lead`         | sans    | 400  | 18      | 18     | 18    | 1.4         | Parágrafos de destaque (About)      |
| `.text-small`        | sans    | 400  | 14      | 14     | 14    | 1.2         | Rótulos, cargos, metadados do card  |
| `.text-nav`          | sans    | 500  | 13      | 13     | 13    | 1.2         | Itens da nav · tracking 0.03em      |
| `.text-label`        | sans    | 500  | 12      | 12     | 12    | 1.1         | Botões e links em caixa alta        |
| `.text-caption`      | sans    | 400  | 12      | 12     | 12    | 1.2         | "Brasília, Brazil"                  |
| (relógio)            | Manrope | 500  | 18      | 18     | 18    | 1.2         | Não muda por breakpoint             |

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
| `--section-pad-y`  | 50px    | 50px   | 40px  | Padding vertical das seções de conteúdo |
| `--hero-gap`       | 100px   | 80px   | 60px  | Entre o título do hero e o perfil    |

---

## Raio, efeitos e ícones

| Token            | Valor        | Uso                                   |
|------------------|--------------|---------------------------------------|
| `--radius-pill`  | 50px         | Botões, itens de nav, logo            |
| `--radius-round` | 100px        | Container da nav, avatar              |
| `--radius-lg`    | 10px         | Fotos                                 |
| `--radius-md`    | 8px          | Cards de experiência, itens da stack  |
| `--radius-sm`    | 4px          | Logos da stack                        |
| `--blur-glass`   | `blur(10px)` | Fundo das pílulas translúcidas        |
| `--avatar-size`  | 34px         | Foto do logo                          |

**Contornos:** o Framer desenha as bordas por cima do elemento (`::after`), sem alterar o tamanho. Aqui isso é a classe utilitária `.with-border` (`global.css`): adicione a classe e defina `--border-color` no componente. O raio acompanha o do elemento.

**Ícones:** Phosphor (os mesmos do Framer). Componente `Icon.astro`.
- Estilo *regular*: `arrow-up-right`, `linkedin`, `x`.
- Estilo *light*: `buildings`, `calendar` (card de experiência).
- Tamanhos usados: 12px (links de texto), 14px (botões), 16px (experiência, stack), 24px (redes sociais).

---

## Movimento

| Token             | Valor                          | Uso                            |
|-------------------|--------------------------------|--------------------------------|
| `--duration-fast` | 200ms                          | Hover de cor                   |
| `--duration-base` | 300ms                          | Abertura do menu, rolagem do email |
| `--duration-slow` | 600ms                          | Entrada de palavras, zoom do card  |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Padrão (mudanças de cor)           |
| `--ease-out`      | `cubic-bezier(0.22, 1, 0.36, 1)` | Movimentos de entrada e deslocamento |
| `--ease-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Pílula da navegação |

> **Aproximação.** O Framer não expõe as curvas usadas. Estes valores foram escolhidos por equivalência visual e serão calibrados lado a lado.

**Movimento reduzido:** com `prefers-reduced-motion: reduce`, todas as animações e transições ficam instantâneas (`global.css`). Toda animação nova precisa respeitar isso.

---

## Componentes

### Button
`src/components/Button.astro` — link com aparência de botão primário.

- Pílula `--color-text-primary`, texto `.text-label` em `--color-on-dark`, seta 14px.
- Padding 8px 16px, gap 5px, altura 36px.
- **Hover:** nenhum (igual ao Framer).
- Prop `icon={false}` remove a seta (usado em "View my Resume", no About).
- Prop `external` abre em nova aba com `rel="noopener noreferrer"`.
- Usado em: "Get in Touch" (header), "Resume" (footer).

### ArrowLink
`src/components/ArrowLink.astro` — link de texto em caixa alta com seta 12px.

- `.text-label` em `--color-text-primary`, gap 5px, 2px de respiro embaixo.
- **Hover:** só a seta vai para `--color-highlight`; o texto não muda.
- Usado em: "Contact Me" (footer), "More About me" (Home).

### Header
`src/components/Header.astro` — fixo no topo, com espaçador da mesma altura.

| Breakpoint | Logo                                   | Navegação                        | Ação              |
|------------|----------------------------------------|----------------------------------|-------------------|
| desktop    | Pílula translúcida (4/12/4/4px)        | Pílula translúcida, itens em linha | Button "Get in Touch" |
| tablet     | Sem pílula                             | Igual ao desktop                 | Igual ao desktop  |
| phone      | Sem pílula                             | Botão "Menu" abre painel         | Dentro do painel  |

- **Item de nav:** `.text-nav`, padding 10px 16px, texto `--color-text-tertiary`. Hover e item ativo → `--color-text-primary` (o hover só escurece o texto; nada se move).
- **Pílula do item ativo:** um único elemento para a nav inteira, com fundo `--color-selected-bg` e contorno interno de 1px `--color-selected-border`. Ela desliza até o item ativo animando posição e largura (`--duration-base`, `--ease-decelerate`). Referência: liumichelle.com.
  - **Entre páginas:** ao clicar, a posição atual fica guardada; a página nova nasce com a pílula ali e desliza até o item certo. Funciona em todos os navegadores.
  - **Na Home:** "Work" fica ativo quando a seção de projetos (`#work`) passa de 25% da tela. Clicar em Home ou Work rola suavemente, sem recarregar.
  - **Nas páginas de case:** "Work" fica ativo.
  - Sem JavaScript e no menu mobile, o próprio item ativo recebe o fundo (sem animação).
- "Work" é uma âncora da Home (`/#projects`) e nunca fica ativo.
- **Menu mobile:**
  - Toggle "Menu" ⇄ "Close" com ícone de 3 linhas que vira X.
  - O header expande para baixo (300ms). Conteúdo centralizado: nav vertical (gap 20px) e Button, separados por 50px.
  - Fecha com Esc e ao passar para tablet/desktop. Quando fechado, o painel fica fora do foco do teclado (`inert`).

### Footer
`src/components/Footer.astro`

- **CTA:** "Lets talk?" (`.text-heading-sm`, `--color-text-tertiary`) + frase (`.text-heading-cta`) + Button "Resume" e ArrowLink "Contact Me".
- **Colunas:** título `.text-heading-sm` em `--color-text-tertiary`; links `.text-heading-md` em `--color-text-secondary`, sem quebra de linha.
  - Hover de link: `--color-highlight` + sublinhado.
- **Relógio:** formato "7:04 PM", atualiza a cada minuto. Mostra a hora **local de quem visita** (igual ao Framer). O fuso é configurável em `src/data/site.ts`.
- **Link da página atual:** fica em `--color-text-primary` (ex.: "About" quando se está no About).
- **Layout:**
  - desktop: CTA 400px + colunas 3 × 213px lado a lado (gap 100px).
  - tablet: CTA em cima, colunas em 3 partes iguais (gap 50px entre blocos).
  - phone: CTA em cima, colunas em grade de 2.
- Linha de 1px `--color-border` no topo do footer, de ponta a ponta da tela.
- Linha final 1px `--color-border`, na largura do container.

### RevealTitle
`src/components/RevealTitle.astro` — título que aparece palavra por palavra ao carregar.

- `.text-display`, largura máxima 90% do container (igual ao Framer).
- Cada palavra vai de opacidade 0 e 10px abaixo para opacidade 1 na posição final.
- Timing: atraso inicial 150ms, 600ms por palavra (`--duration-slow`, `--ease-out`), 80ms entre palavras. **Aproximado** — no Framer a sequência leva ~1,1s.
- Só CSS (funciona sem JavaScript). Com movimento reduzido, o título aparece pronto.

### RoleSlideshow
`src/components/RoleSlideshow.astro` — cargos que trocam em loop abaixo de "Hi, I'm Danilo!".

- Janela de 200×20px; `.text-small` em `--color-text-muted`.
- A cada **4s** (medido) a lista sobe 30px (20px de linha + 10px de gap). Transição de 800ms (aproximada).
- Loop sem pulo: o primeiro item é repetido no fim e o componente volta ao início sem animação.
- Entra com fade de 500ms ao carregar.
- Leitores de tela recebem a lista completa uma vez; a parte animada é escondida deles. Com movimento reduzido, fica parado no primeiro item. Pausa quando a aba está em segundo plano.

### EmailRoll
`src/components/EmailRoll.astro` — link de email com efeito de rolagem.

- Duas cópias empilhadas (gap 10px) numa janela da altura de uma linha.
- **Hover e foco pelo teclado:** a pilha sobe ~32px e mostra a cópia em `--color-highlight` (`--duration-base`, `--ease-out`).
- A cópia de destaque é escondida de leitores de tela, para o email não ser lido duas vezes.

### IconButton
`src/components/IconButton.astro` — link redondo só com ícone.

- 40×40px, padding 8px, raio total, fundo `--color-surface`, ícone 24px em `--color-text-primary`.
- **Hover:** nenhum (igual ao Framer).
- `label` é obrigatório (é o texto que o leitor de tela anuncia).

### ProjectCard
`src/components/ProjectCard.astro` — card da grade de projetos.

- Fundo `--color-surface`, sem raio, contorno 1px `--color-border-subtle`.
- Imagem na proporção 590:443; depois, bloco com padding 20px e gap 10px.
  - Título: `.text-heading-card`.
  - Descrição: `.text-body` em `--color-text-secondary`. Mostra no máximo 44px (≈2 linhas) e o resto é **cortado sem reticências**, igual ao Framer.
  - Metadados: categoria, ponto de 4px e ano (`.text-small` em `--color-text-tertiary`).
- **Hover:** imagem cresce para 105% dentro do card (`--duration-slow`) e título vai para `--color-highlight`.
- Grade: 2 colunas no desktop/tablet, 1 no phone, gap 20px. Cards não esticam para igualar alturas.

### Divider
`src/components/Divider.astro` — linha de 1px `--color-border` alinhada ao container, com 10px de respiro em cima e embaixo.

### Breadcrumbs
`src/components/Breadcrumbs.astro` — trilha "Home / About".

- `.text-body`; links e "/" em `--color-text-secondary`, página atual em `--color-text-tertiary`; gap 5px.
- **Hover do link:** `--color-highlight` + sublinhado.

### ExperienceCard
`src/components/ExperienceCard.astro` — cargo, empresa, período e descrição.

- Padding 20px, gap 20px, raio `--radius-md`, fundo `--color-surface`, contorno `--color-border-subtle`.
- Cargo: `.text-heading-item`. Empresa e período: `.text-small` em `--color-text-tertiary` com ícones *light* de 16px.
- desktop/tablet: cargo à esquerda, empresa e período alinhados à direita. phone: tudo empilhado à esquerda.
- **Hover:** nenhum.

### StackItem
`src/components/StackItem.astro` — ferramenta com logo (50px, `--radius-sm`), nome (`.text-heading-sm`) e categoria (`.text-small` em `--color-text-secondary`).

- Padding 10px, gap 10px, raio `--radius-md`, contorno `--color-border-faint`.
- **Hover:** fundo `--color-surface` e seta de 16px que cresce ao lado do nome (`--duration-base`).
- Grade: 3 colunas (desktop), 2 (tablet), 1 (phone), gap 20px.

### Página de case (template B)
`src/pages/project/[slug].astro` + um `.mdx` por case em `src/content/cases/` (guia: `src/content/cases/README.md`).

- **CaseHero:** categoria, título (`.text-title`), subtítulo (`.text-lead`) à esquerda; ficha técnica (Company, Role, Duration, Year) à direita com divisórias; capa 21:9 embaixo, largura total.
- **Corpo:** sumário (240px) à esquerda + conteúdo à direita, gap 100px. Abaixo de 1200px, empilham.
- **Texto do .mdx:** `##` = `.text-heading-lg` com 80px acima; `###` = `.text-heading-item`; parágrafos `.text-body` em `--color-text-secondary`; lista numerada com divisórias e números `01`.
- **Blocos:** Columns, Media, Gallery, Grid/GridItem, Csd/CsdColumn, Quote (ver o guia). Todos usam só tokens.

### CaseToc (sumário com scroll-spy)
`src/components/case/CaseToc.astro`

- Montado automaticamente a partir dos títulos `##` (seções) e `###` (subseções) do case.
- **desktop (≥1200px):** coluna fixa ao rolar (`top` = altura do header + 24px). Seção e subseção ativas em `--color-highlight`; demais em `--color-text-tertiary`; hover escurece para `--color-text-primary` (o verde aqui significa "ativo"). Uma barra de 2px em `--color-highlight` desliza até o item ativo mais específico (`--duration-base`, `--ease-out`).
- **Subseções:** só a seção atual fica aberta, mostrando seus `###` com 12px a mais de recuo; as outras ficam fechadas. Quem abre e fecha é a rolagem (clicar numa seção rola até ela e ela abre). A abertura anima a altura e a opacidade (`--duration-base`); grupos fechados ficam fora do foco do teclado (`inert`). Seções sem `###` são itens simples, sem seta. 
- **tablet e phone:** barra fixa abaixo do header ("On this page" + seção atual + seta). Mostra só as seções (`##`), porque o texto composto seria cortado na largura do phone. Toca e abre a lista; Esc ou toque fora fecham.
- **Quando uma seção fica ativa:** quando o título passa de 25% da área visível abaixo do header. No fim da página, a última seção fica ativa. Títulos lado a lado (ex.: Context | Solution) acendem juntos e a barra cobre os dois.
- **Clique:** rolagem suave até a seção, parando abaixo do header (e da barra, no mobile); o destaque trava no item clicado até a rolagem terminar; atualiza o `#` da URL; leva o foco do teclado para a seção. Com movimento reduzido, a rolagem é instantânea.
- **Acessibilidade:** `<nav>` com rótulo; item atual com `aria-current="location"`.

### Placeholder
`src/components/Placeholder.astro` — ocupa o lugar de imagens e vídeos, mantendo a proporção. Fundo `--color-border`.
- `round`: círculo (avatar).
- `fill`: ocupa 100% do pai, para fotos com altura fixa definida pelo layout.

### Analytics
`src/components/Analytics.astro` — **desligado**. Espaço reservado no `<head>` para Google Analytics e Hotjar. Instruções dentro do arquivo.

---

## Decisões

Registro do que foi decidido e por quê. Mais recente em cima.

| Data       | Decisão | Motivo |
|------------|---------|--------|
| 2026-10-22 | Nav com pílula única que desliza (referência: liumichelle.com); substitui a fusão por View Transition. | Pedido do Danilo; a técnica nova funciona também no Firefox. |
| 2026-10-22 | Seção "Projects" da Home renomeada para "Work" (âncora `#work`), e "Work" acende na nav ao chegar nela. | O nome do item da nav e o do destino passam a ser o mesmo. |
| 2026-10-22 | Tokens de texto renomeados por papel: primário, secundário, terciário. `--color-accent` virou `--color-highlight`. | Pedido do Danilo; nomes por ênfase em vez de opacidade. |
| 2026-10-22 | Item ativo da nav: fundo `#EFEFF1` + contorno 15%, com transição de fusão entre páginas. Sumário: ativo em verde. | Pedido do Danilo. |
| 2026-10-22 | Sumário com dois níveis (`##` e `###`), grupo da seção atual aberto pela rolagem, sem contadores numéricos. | Referência trazida pelo Danilo; números não informam nada num case. |
| 2026-10-21 | Template de case = Direção B do canvas (abertura dividida + sumário à esquerda). Seções que a B não desenhou seguem a mesma linguagem (divisórias em vez de cards). | Escolha do Danilo após comparar as opções A, B e C. |
| 2026-10-21 | Cases escritos em MDX; o sumário vem dos títulos `##`. | Criar um case novo = escrever o texto; nada de mexer no layout. |
| 2026-10-21 | Tablet e phone: sumário vira barra compacta fixa abaixo do header. | Recomendação; a validar no teste. |
| 2026-10-21 | Contornos de 1px desenhados por cima do elemento (`.with-border`), em cards de projeto, experiência, itens da stack e topo do footer. | O Framer usa `::after`; eu não tinha detectado nas etapas de header/footer e Home. Corrigido. |
| 2026-10-21 | Relógio passa a mostrar a hora local do visitante (antes: Brasília fixo). | Comportamento real do Framer, verificado mudando o fuso do navegador. |
| 2026-10-21 | O que no Framer parecia um "ticker" é um slideshow: troca de item a cada 4s, não rolagem contínua. Recriado como RoleSlideshow. | Comportamento medido no site. |
| 2026-10-21 | "Hi, I'm Danilo!" usa `<p>` (no Framer era `<h6>`). | Não é título de seção; sem efeito visual. |
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
- [x] ~~Ao clicar em "Work", o título ficava escondido atrás do header fixo.~~ Corrigido (2026-10-22).
- [ ] O relógio do footer diz "Brazil", mas mostra a hora de quem visita. Para mostrar Brasília: `timeZone: "America/Sao_Paulo"` em `src/data/site.ts`.
- [ ] O link do Jira (Stack) carrega parâmetros de rastreamento de anúncio (`gclid` etc.). Sugestão: `https://www.atlassian.com/software/jira`.
- [ ] Nos cards de experiência, os itens da descrição são separados por espaço duplo num único parágrafo; na tela viram texto corrido. Uma lista com marcadores leria melhor.
- [ ] A descrição do card é cortada no meio da frase, sem reticências, quando passa de 2 linhas (visível no tablet e no phone).
