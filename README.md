# Rendering Strategies Used in TryFit

## Pages and Rendering Modes

### Static Rendering (SSG)

- Page: /about

- This page is statically generated at build time using export const revalidate = false.

### Dynamic Rendering (SSR)

- Page: /dashboard

- This page is rendered on every request using export const dynamic = 'force-dynamic' and cache: 'no-store'.

### Hybrid Rendering (ISR)

= Page: /news

- This page uses Incremental Static Regeneration with export const revalidate = 60.

### Why Each Approach Was Chosen

- Static Rendering was chosen for the About page because it contains brand and company information that rarely changes. Pre-rendering ensures fast load times and good SEO.

- Dynamic Rendering was chosen for the Dashboard because it displays user-specific data such as active trials and order status, which must always be up to date.

- Hybrid Rendering was chosen for the News page because product trends and new arrivals change periodically but do not require real-time updates.

## Performance, Caching, and User Experience

- Static pages load instantly since they are served from cache without server computation.

- Dynamic pages ensure data freshness and accuracy by fetching data on every request.

- Hybrid pages combine both benefits by serving cached content while automatically revalidating in the background, reducing server load and improving response times.

- This selective caching strategy improves performance while maintaining a smooth user experience.

### Verification: Page Generation Modes

- Static Rendering: Verified via build-time logs and absence of repeated network requests on refresh.

- Dynamic Rendering: Verified using DevTools Network tab showing data fetched on every request.

- Hybrid Rendering: Verified by observing content regeneration after the 60-second revalidation window in deployment logs.


### Reflection on Trade-offs and Scalability

- If TryFit had 10× more users, using SSR for all pages would significantly increase server load and hosting costs.

- In that scenario, more pages would be converted to static or hybrid rendering, reserving SSR only for critical user-specific flows such as dashboards and checkout.

- This approach would improve scalability while maintaining data freshness where it matters most.
