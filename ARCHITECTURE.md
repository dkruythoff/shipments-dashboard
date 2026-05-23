# Architecture

## Overview

This project is a showcase of simplicity and portability. Anything that can be 
shared will be shared, or at least added in a manner that facilitates sharing later on.

As a subject it's become a shipments dashboard — concrete enough to build something real, open-ended enough to expand on.

Initially a full frontend (Vue) project with a simple REST API based on Deno and Hono. 
The plan is to add styling in a shareable manner, then additional frontends: 
React (Vite), Nuxt, possibly Next.

## Shared types

Types live in `services/api/types/index.ts` and are defined as Zod models. 
Whenever a consumer of the API needs the definitions, they can be imported from there. In the case that another backend would be added, the types should be extracted into a shared space.

## Component library as a local package

In order to speed up development, and not be tied down by release cycles, the styleguide gets published as a local package (`@shipments/ui`). This also proves that the architecture works, without the overhead of publishing.

## Shared CSS

Styles live in `shared/css/` — a plain CSS folder outside of any service.
Each service mounts it as a Docker volume and imports it via a Vite alias
(`@shipments/css`). No package manager, no build step, no framework coupling.

This approach was chosen over alternatives like npm workspace packages or
CSS-in-JS because it keeps styling framework-agnostic by default. Any future
frontend — React, Svelte, or otherwise — can consume the same design tokens
and component styles with a single import and a volume mount.

The tradeoff is that the alias setup needs to be repeated per service, but
this is a small, explicit cost compared to the coupling that heavier solutions
introduce. 
