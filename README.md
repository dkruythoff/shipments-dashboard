# Shipment dashboard: A polyglot architecture & integration showcase

A code showcase and playground for several different front- and back-ends. 
Meant to display and log my architectural choices for web projects.

## Architecture
A modular monorepo designed for pluggable frontend and backend services. Current baseline implementation includes:

* **api/** — A REST API delivering shipment data contracts (Port 8000).
* **styleguide-vue/** — A Vue-based component library and isolated Storybook showcase (Port 6006).
* **app-vue/** — A Vue SPA consuming the API contracts and styleguide modules to render the dashboard (Port 5173).

## Development
The entire ecosystem is orchestrated via Docker Compose.

To spin up the default development environment (including continuous test-watchers and visual regression testing modules):

`docker compose up`

To boot only the core application stack without background automated testing layers:

`docker compose up api app-vue styleguide-vue`

## Prerequisites
- Docker
- Docker Compose

## Roadmap
- Set up shared CSS foundation
- Port frontend to React
- Port frontend to Nuxt
- Keep contracts, styling, and semantics aligned across implementations
- Experiment with Tailwind styling alongside the CSS setup
- Stress-test abstractions with more complex workflows

## Contributors
- [Darius Kruythoff](https://linkedin.com/in/dkruythoff)

## Development notes
Built with [Claude](https://claude.ai) as an AI pair programmer.
