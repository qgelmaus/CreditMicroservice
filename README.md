# Hovedopgave 2025

Dette projekt er udviklet som en del af hovedopgaven på Datamatikeruddannelsen. Systemet er bygget som en microservice-arkitektur med fokus på Domain-Driven Design og består af flere services, en API Gateway samt to frontend-demo-applikationer.

##  Tech Stack

- TypeScript
- GraphQL
- Prisma
- RabbitMQ
- Stripe (betaling)
- Docker + Docker Compose
- pnpm (monorepo med workspaces)
- Jest (tests)

---

##  Kom i gang

### 1. Krav

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### 2. Installation

Kør følgende i roden af projektet:


pnpm install

Generér Prisma-klienter
pnpm generate:credit
pnpm generate:payment

Generér GraphQL-typer
pnpm codegen:credit
pnpm codegen:payment
pnpm --filter gateway codegen

### 3. Opsætning af miljøvariabler gælder kun hvis projektet hentes fra github.

Opret en `.env`-fil for hver service (fx `apps/credit-service/.env`) baseret på `.env.example`-filerne, hvis de findes. Stripe webhook kræver særligt opsætning og fungerer ikke uden korrekt login og konfiguration. 

### 4. Start hele systemet

Brug scriptet start-all.sh og start herefter gateway i en ny konsol.

pnpm start-all.sh -> ny konsol -> pnpm dev:gateway

Start frontend-applikationer separat:


pnpm dev:customer
pnpm dev:admin


---

##  Tests

Kør tests med:


pnpm test


Ved CI-kørsel uden RabbitMQ:


pnpm test:ci


---

##  Scripts

| Formål                 | Script                                                          |
|------------------------|-----------------------------------------------------------------|
| Start hele systemet    | `pnpm start-all.sh` og derefter pnpm dev:gateway i en ny konsol |
| Start microservice     | fx `pnpm dev:credit`                                            |
| Start frontend         | `pnpm dev:customer` / `dev:admin`                               |
| Generér Prisma klient  | `pnpm generate:credit` / `generate:payment`                     |
| Codegen GraphQL typer  | `pnpm codegen:credit` / `codegen:payment`                       |
| Se database indhold    | `pnpm studio:credit` / `studio:payment`                         |

---

##  Projektstruktur


apps/
  ├── customer-web/        # Demo frontend til kunder
  ├── admin-web/           # Admin demo frontend 
  ├── credit-service/      # Microservice til kreditbeholdning
  ├── payment-service/     # Microservice til betaling (mocked)
  ├── notification-service/# Notifikationsservice (mocked)
  ├── gateway/             # API Gateway


---

##  Bemærkninger

- Stripe-webhooks virker ikke uden korrekt login og opsætning.
- Hvis du støder på problemer med RabbitMQ, kan du sætte `SKIP_RABBITMQ=true` som environment variable i testkørsel.

---

##  Udviklere

- Katrine Clemens Hansen
- Steffen Køhler Lassen
