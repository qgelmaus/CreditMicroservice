#  TODO

##  Tests
- [x] Opret testsetup (Jest + tsconfig + `test-utils`)
- [x] Unit tests for domænemodeller (`Credits`, `Money`, `CreditAccount`)
- [x] Service-lag tests med mocks (`CreditAccountService`, `PaymentService`, osv.)
- [x] GraphQL integration tests (mutationer og queries)
- [x] RabbitMQ publisher/consumer tests (evt. med fake channel)
- [ ] CI-kompatibel testkørsel (lokalt og evt. GitHub Actions)

## Customer-web
- [ ] Flow til oprettelse af kreditbeholdning
  - [ ] Typevalg (GIFT_CARD / PREPAID_CARD)
  - [ ] Email + evt. validering
  - [ ] Udfyldning af klip, pris osv.
  - [ ] Valg og udførsel af betaling
- [ ] GraphQL-integration via Apollo Client
- [ ] UI-feedback (spinners, fejlbeskeder)
- [ ] Tilstandshåndtering (fx state machine eller React context)
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
