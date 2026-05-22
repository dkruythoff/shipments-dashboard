# Shipment dashboard: API

Tiny Deno REST API to feed the dashboard.

## Stack
- [Deno](https://deno.land)
- [Hono](https://hono.dev)
- [SQLite (in-memory)](https://sqlite.org/)

## Tests
`docker compose run api deno test`

## Endpoints

### /shipments

#### GET response
```
[
  {
    "id": 1,
    "origin": "Imaginary Street 43\n12345 Vaporage\nTestcountry",
    "destination": "Destination Lane 56\n67890 Testage\nFooBar",
    "status": "pending",
    "updatedAt": null,
    "createdAt": 1779398487
  }
]
```

Notes: 
- createdAt is a UNIX timestamp
- status is any of pending | transit | delayed | delivered
