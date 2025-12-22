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

## Understanding Cloud Deployments: Docker → CI/CD → AWS/Azure

### Docker & Containerization
The Try-Fit application is containerized using Docker. A Dockerfile defines the runtime environment and build steps, ensuring the application runs consistently across development, CI, and production.

Docker Compose is used to manage container configuration and inject environment variables safely.

### CI/CD Automation
A CI/CD pipeline using GitHub Actions automates the build process. On every push, the pipeline builds a Docker image, ensuring deployments are repeatable and reliable.

Automation reduces human error and ensures consistency across environments.

### Cloud Deployment (AWS/Azure)
The Docker image can be deployed to AWS (EC2 or Elastic Beanstalk) or Azure App Service. The cloud platform pulls the image and runs it as a container, exposing it via a public endpoint.

Environment variables and secrets are injected securely at runtime instead of being hardcoded.

### Secrets Management
Sensitive information such as database URLs and API keys are never committed to the repository. Secrets are stored using GitHub Secrets or cloud secret managers and injected during deployment.

### Case Study: QuickServe Deployment Issues
QuickServe faced deployment failures due to missing environment variables, port conflicts, and old containers continuing to run.

These issues occur when the deployment chain is broken between Docker, CI/CD, and cloud runtime.

A proper workflow ensures:
- Versioned Docker images
- Old containers are stopped before new ones start
- Required environment variables are validated
- CI/CD pipelines fail early on misconfiguration

### Reflection
This exercise showed that most deployment failures are caused by configuration and orchestration issues rather than application code. Docker and CI/CD help enforce consistency, security, and reliability in cloud deployments.
