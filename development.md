# Development

## Requirements

- Git
- Node.js 22.12 or newer
- npm

## Setup

Clone the repository with its submodule:

```sh
git clone --recurse-submodules https://github.com/laween-alsulaivany/laween-alsulaivany.github.io.git
cd laween-alsulaivany.github.io
npm ci
```

If the repository was cloned without submodules:

```sh
git submodule update --init --recursive
```

## Local development

Start the development server:

```sh
npm run dev
```

## Checks and build

Run Astro and TypeScript checks:

```sh
npm run check
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

The generated site is written to `dist/`.

## Project structure

Portfolio content is stored separately from the page components:

- `src/data/profile.ts` — profile and About content
- `src/data/experience.ts` — education and experience
- `src/data/projects.ts` — project information
- `public/images/projects/` — project images

## LA UI

The site uses [LA UI](https://github.com/laween-alsulaivany/LA_UI) as a Git submodule:

```text
vendor/LA_UI
```

Changes to LA UI should be committed and pushed in the LA UI repository first. Then commit the updated submodule reference in this repository.

To restore the referenced submodule version:

```sh
git submodule update --init --recursive
```

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages.

Pushes to `main` deploy the site. Pull requests run the checks and production build without deploying.

GitHub Pages should be configured to use **GitHub Actions** as its publishing source.
