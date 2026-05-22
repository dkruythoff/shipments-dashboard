# Shipment dashboard

A code showcase and playground for several different front- and back-ends. 
Meant to display and log my architectural choices for web projects.

## Architecture
Monorepo consisting of the following services:
- api: A REST API that delivers shipment data - runs on port 8000
- styleguide-vue: A Vue component library with a Storybook showcase - runs on port 6006
- app-vue: A Vue app which consumes the API data and uses the styleguide components to display a shipments dashboard - runs on port 5173

## Development
Run `docker compose up` to start all the services, including the `styleguide-vue-test-watch` service, which will continously run tests on the styleguide, including visual regression tests, and auto-updating screenshots.

To only run the setup, use the following instead: 
`docker compose up api app-vue styleguide-vue`

## Prerequisites
- Docker
- Docker Compose

## Roadmap
The following additions are planned.
- CSS stylesheet
- Add React app
- Add Nuxt app
- Research adding Tailwind styling

## Contributors
- [Darius Kruythoff](https://linkedin.com/in/dkruythoff)

## Development notes
Built with [Claude](https://claude.ai) as an AI pair programmer.
