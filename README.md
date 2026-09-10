# Portfolio — Silvana Farias

Portfolio personal de **Silvana Farias**, Backend Developer. Presenta experiencia, stack, proyectos y educación, con foco en APIs REST, Node.js, NestJS, TypeScript y bases de datos.

**Sitio:** [https://silfarias.github.io/portfolio-silvana-farias/](https://silfarias.github.io/portfolio-silvana-farias/)

## Stack

- React 19 + TypeScript
- Vite 8
- CSS Modules
- Yarn (Corepack)
- Deploy en GitHub Pages (GitHub Actions)

## Desarrollo local

Requisitos: Node.js 22+ y Corepack habilitado.

```bash
corepack enable
yarn install
yarn dev
```

Otros scripts:

```bash
yarn build    # typecheck + build de producción → dist/
yarn preview  # sirve el build local
yarn lint
```

> El `base` de Vite es `/portfolio-silvana-farias/` (necesario para GitHub Pages). En local, `yarn preview` usa esa misma base.

## Deploy

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se ejecuta en push a `main` (también con `workflow_dispatch`):

1. Instala dependencias con Yarn
2. Ejecuta `yarn build`
3. Publica `dist` en GitHub Pages

En el repositorio: **Settings → Pages → Source → GitHub Actions**.

## Estructura relevante

```
src/
  data/          # contenido (hero, experiencia, proyectos, etc.)
  sections/      # secciones de la página
  components/    # UI reutilizable
  assets/        # imágenes, CV
public/          # favicon, og-cover.jpg
```

## Contacto

- GitHub: [silfarias](https://github.com/silfarias)
- LinkedIn: [Silvana Farias](https://www.linkedin.com/in/silvana-abigail-farias-103a54298/)
