# Shipment dashboard: Style guide (React)
The living style guide for the shipment dashboard.
Consists of a collection of components, and a Storybook setup to display and edit them.
Meant to be packaged as `@shipments/ui` for usage in any React apps.

## Stack
- [React](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Vite](https://vite.dev)
- [Storybook](https://storybook.js.org)

## Development
Run the Storybook service: `docker compose up styleguide-react`

The Storybook can be viewed at `http://localhost:6007`

## Adding components
Use the component generator to scaffold a new component:
`docker compose run styleguide-react npm run add-component -- <ComponentName>`

## Components
- **rHeader** — page header element
- **rLayout** — page layout with header, aside, and main slots
- **rNavigation** — sidebar navigation supporting links and actions
- **rPage** — full page composition combining rLayout and rNavigation
- **rPageShipmentsList** — page variant displaying a shipments table
- **rTable** — data table with optional head and foot sections

## Testing
Run the testing service: `docker compose up styleguide-react-test-watch`

This service will run tests in watch mode and auto-update any visual regression screenshots.
