<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Try-Fit — Environment-Aware Builds & Secure Secrets Management

## Rendering Strategies Used in TryFit

### Pages and Rendering Modes

#### Static Rendering (SSG)

- Page: /about

- This page is statically generated at build time using export const revalidate = false.

#### Dynamic Rendering (SSR)

- Page: /dashboard

- This page is rendered on every request using export const dynamic = 'force-dynamic' and cache: 'no-store'.

#### Hybrid Rendering (ISR)

= Page: /news

- This page uses Incremental Static Regeneration with export const revalidate = 60.

#### Why Each Approach Was Chosen

- Static Rendering was chosen for the About page because it contains brand and company information that rarely changes. Pre-rendering ensures fast load times and good SEO.

- Dynamic Rendering was chosen for the Dashboard because it displays user-specific data such as active trials and order status, which must always be up to date.

- Hybrid Rendering was chosen for the News page because product trends and new arrivals change periodically but do not require real-time updates.

### Performance, Caching, and User Experience

- Static pages load instantly since they are served from cache without server computation.

- Dynamic pages ensure data freshness and accuracy by fetching data on every request.

- Hybrid pages combine both benefits by serving cached content while automatically revalidating in the background, reducing server load and improving response times.

- This selective caching strategy improves performance while maintaining a smooth user experience.

#### Verification: Page Generation Modes

- Static Rendering: Verified via build-time logs and absence of repeated network requests on refresh.

- Dynamic Rendering: Verified using DevTools Network tab showing data fetched on every request.

- Hybrid Rendering: Verified by observing content regeneration after the 60-second revalidation window in deployment logs.


### Reflection on Trade-offs and Scalability

- If TryFit had 10× more users, using SSR for all pages would significantly increase server load and hosting costs.

- In that scenario, more pages would be converted to static or hybrid rendering, reserving SSR only for critical user-specific flows such as dashboards and checkout.

- This approach would improve scalability while maintaining data freshness where it matters most.

### Environment-Aware Builds

This project uses separate environment configuration files for development, staging, and production. Environment-specific build scripts ensure the correct configuration is loaded during deployment.

### Secrets Management

Sensitive information such as database URLs and API endpoints are managed securely using environment variables and GitHub Secrets. No real secrets are committed to the repository.

### Build Verification

Separate builds were tested using `npm run build:staging` and `npm run build:production`, confirming that the application behaves correctly across environments.

### Reflection

Multi-environment setups improve CI/CD reliability by allowing testing in staging before production deployment, reducing the risk of breaking live systems.
>>>>>>> e28d2188a2eef460bfa8b01648718f37ed469516
