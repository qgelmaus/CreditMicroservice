#  TODO

## Projekt
 - [x] Lav et script der starter alle services 

##  Tests
- [x] Opret testsetup (Jest + tsconfig + `test-utils`)
- [x] Unit tests for domænemodeller (`Credits`, `Money`, `CreditAccount`)
- [x] Service-lag tests med mocks (`CreditAccountService`, `PaymentService`, osv.)
- [x] GraphQL integration tests (mutationer og queries)
- [x] RabbitMQ publisher/consumer tests (evt. med fake channel)
- [x] CI-kompatibel testkørsel (lokalt og evt. GitHub Actions)

## Customer-web
- [x] Flow til oprettelse af kreditbeholdning
  - [x] Typevalg (GIFT_CARD / PREPAID_CARD)
  - [x] Email + evt. validering
  - [x] Udfyldning af klip, pris osv.
  - [x] Valg og udførsel af betaling
- [x] GraphQL-integration via Apollo Client
- [x] UI-feedback (spinners, fejlbeskeder)
- [x] Tilstandshåndtering (fx state machine eller React context)
- [ ] Mulighed for at få vist sin kreditkonto?

## Admin-web
- [ ] Login og autentifikation (evt. hardcoded i første omgang)
- [ ] Overblik over eksisterende konti
- [ ] Oprettelse af konti uden betaling
- [ ] Mulighed for at sende QR-kode / faktura (placeholder funktionalitet)
- [ ] Mulighed for at refundere (via mutationer)
- [ ] Intern note-visning og redigering?

## Zod eller anden form for validering
- [ ] Brug Zod til inputvalidering i customer-web og admin-web
  - [ ] Email validering
  - [ ] Antal credits ≥ 1
  - [ ] Money skal være positiv
- [ ] Del skemaer op i steps (type → detaljer → betaling)
- [ ] Delte valideringsskemaer mellem frontend og backend?
- [ ] Vis valideringsfejl i UI og blokér navigation/submit ved fejl

## Payment-service
- [ ] Omdøb PaymentDetails til Payment
