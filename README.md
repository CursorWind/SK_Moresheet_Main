# Suankularb Next.js Template

This repository is a template for all Suankularb websites using the Next.js framework. It includes SK Components, Next.js, Tailwind CSS, Framer Motion, and next-18next internalization solution all configured and ready for use out of the box. Other features like page transitions are also included.

If you know Next.js, you already know enough to get started. We look forward to see what you’re going to create!

**Note:** If you are making a Suankularb website, don’t clone this repository directly. Use the “Use this template“ button.

---

## Setup

After cloning, run this command to install packages.

```ps1
npm i
```

### Prettier

This template uses Prettier to format files. Install Prettier on your code editor and ensure it is the default formatter. Prettier should detect the configuration file `.prettierrc.json`.

---

## Development

Run this command to start the development server. There’s no need to run any additional commands for compiling Tailwind CSS.

```ps1
npm run dev
```

### Imports

This template uses non-relative module imports. Refrain from using relative imports.

| Import         | Resolved path     |
| -------------- | ----------------- |
| `@public/`     | `public/`         |
| `@components/` | `src/components/` |
| `@styles/`     | `src/styles/`     |
| `@utils/`      | `src/utils/`      |

### Framer Motion

This template uses Framer Motion for animation. When using animation in a page or component, make sure to import `animationTransition` from `@utils/animations/config.ts` to the `transition` parameter.

### Tailwind CSS

This template uses Tailwind CSS. To add styles, add utility classes directly to your page or component. Try not to add to `./src/styles/global.css`.

### Internationalization

This template, by default, supports American English (`en-US`) and Thai (`th`). To add a language, update `./next-i18next.config.js`, update `LangCode` in `./src/utils/types/common.ts`, and add a folder in `./public/static/locales` for your translation files.

---

## Production

Build your Suankularb website with this command.

```ps1
npm run build
```

Then start the production server.

```ps1
npm start
```
