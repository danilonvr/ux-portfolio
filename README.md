# ux-portfolio

Portfólio de Danilo Valois, Product Designer. Recriação em código do site feito no Framer (danilovalois.framer.ai).

Bilíngue: inglês em `/`, português em `/pt/`. Todo texto existe nos dois idiomas (ver `CLAUDE.md` e `DESIGN-SYSTEM.md` → Idiomas).

Feito com [Astro](https://astro.build): gera um site estático (HTML + CSS + um pouco de JS), sem framework no navegador.

## Rodar no seu computador

Precisa de [Node.js](https://nodejs.org) 18.20.8 ou mais recente (recomendado: 22, ver `.nvmrc`).

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em http://localhost:4321 e recarrega ao salvar
npm run build    # gera o site final na pasta dist/
npm run preview  # serve a pasta dist/ para conferir o build
```

## Onde fica cada coisa

```
DESIGN-SYSTEM.md        ← regras, tokens e componentes do mini DS (comece por aqui)
CLAUDE.md               ← regras do projeto (bilíngue, ícones Phosphor, tokens)
src/
  styles/tokens.css     ← todos os valores visuais (cor, fonte, espaço, raio, movimento)
  styles/global.css     ← reset e classes de texto
  data/                 ← conteúdo em inglês e português (site, home, about)
  i18n/                 ← idiomas: rotas (index.ts) e textos de interface (ui.ts)
  content/cases/en|pt/  ← um .mdx por case, em cada idioma
  components/           ← peças reutilizáveis (Header, Footer, Button…)
  layouts/              ← estrutura comum das páginas
  pages/                ← cada arquivo vira uma URL
public/                 ← arquivos servidos como estão (favicon, imagens)
content-archive/        ← conteúdo extraído do Framer, guardado para uso futuro (não entra no build)
```

## Status

**Fase 1 — paridade com o Framer**

- [x] Tokens e mini DS
- [x] Header (desktop, tablet, phone + menu mobile)
- [x] Footer (com relógio ao vivo)
- [x] Home (capas dos projetos ainda como placeholder)
- [x] About (fotos e logos ainda como placeholder)
- [~] Template de case: layout B em teste (case EMAP migrado; DF no Ponto ainda pendente)

**Fase 2 — evolução:** animações e interações novas, depois da paridade aprovada.

## Hospedagem

Pensado para Vercel ou Cloudflare Pages conectados a este repositório: cada push na `main` publica o site automaticamente. Comando de build: `npm run build`. Pasta de saída: `dist`.
