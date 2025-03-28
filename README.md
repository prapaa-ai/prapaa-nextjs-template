# Prapaa Next.js Template with shadcn/ui Registry

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with a custom UI component registry for [shadcn/ui](https://ui.shadcn.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## UI Component Registry

This project includes a custom UI component registry for shadcn/ui. The registry is defined in `registry.json` and can be used to install components using the shadcn CLI.

### Using the Registry

To use this registry with your shadcn/ui setup:

```bash
npx shadcn-ui@latest add button --registry=https://github.com/yourusername/prapaa-nextjs-template/registry.json
```

### Building the Registry

If you make changes to the registry, you can rebuild it using:

```bash
pnpm registry:build
```

### Pushing the Registry to GitHub

To push this registry to your GitHub repository:

1. Make sure you have the latest changes committed:

```bash
git add registry.json
git commit -m "Update UI component registry"
```

2. Push to your GitHub repository:

```bash
git push origin main
```

3. The registry will be available at:
   `https://raw.githubusercontent.com/yourusername/prapaa-nextjs-template/main/registry.json`

4. You can use this URL directly with shadcn/ui:

```bash
npx shadcn-ui@latest add button --registry=https://raw.githubusercontent.com/yourusername/prapaa-nextjs-template/main/registry.json
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
