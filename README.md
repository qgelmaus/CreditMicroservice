# CreditAccount Microservice

Velkommen til **CreditAccount Microservice** projektet!

Dette system håndterer kreditkonti og transaktioner for RaskRask platformen og er lavet i forbindelse med hovedopgaven på 5. semester af Datamatikeruddannelsen. 
Det er bygget med fokus på domænedrevet design, høj kvalitet og fleksibilitet.

## Funktioner
- Opret og administrer kreditkonti (Prepaid- og Gavekort).
- Registrer alle ændringer via transaktioner.
- Hent og vis alle transaktioner med søgning og summering.
- Opdeling i kunde- og adminflows.

## Teknologier
- TypeScript
- GraphQL API
- Prisma ORM (databaseadgang)
- React frontend
- Apollo Client (GraphQL queries/mutationer)

## Arkitektur
Projektet følger principperne fra **Domain-Driven Design**:
- **Aggregate Root**: `CreditAccount` (arver til `PrepaidAccount` og `GiftAccount`).
- **Value Objects**: `Credits` og `Money`.
- **CreditTransaction** oprettes hver gang saldo ændres.

