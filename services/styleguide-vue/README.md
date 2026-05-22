# Shipment dashboard: Style guide (Vue)

The living style guide for the shipment dashboard. 
Consists of a collection of components, and a Storybook setup to display and edit them. 
Meant to be packaged as `@shipments/ui` for usage in any Vue apps.

## Stack
- [Vue](https://vuejs.org)
- [TypeScript](https://typescriptlang.org)
- [Vite](https://vite.dev)
- [Storybook](https://storybook.js.org)

## Development
Run the Storybook service: `docker compose up styleguide-vue`
The Storybook can be viewed at `http://localhost:6006`

## Adding components
Use the component generator to scaffold a new component:
`docker compose run styleguide-vue npm run add-component -- <ComponentName>`

## Components
- **vLayout** — page layout with header, aside, and main slots
- **vNavigation** — sidebar navigation supporting links and actions
- **vPage** — full page composition combining vLayout and vNavigation
- **vPageShipmentsList** — page variant displaying a shipments table
- **vTable** — data table with optional head and foot sections

## Testing
Run the testing service: `docker compose up styleguide-vue-test-watch` 
This service will run tests in watch mode and auto-update any visual regression screenshots. 
