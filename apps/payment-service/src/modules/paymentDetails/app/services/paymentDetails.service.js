import { toDomain, toDTO, } from "../../infrastructure/mappers/paymentdetails.mapper";
import { PaymentDetailsFactory } from "../../domain/PaymentDetailsFactory";
export class PaymentDetailsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(input) {
        const payment = PaymentDetailsFactory.createNew(input);
        const saved = await this.repo.create(payment);
        return toDTO(saved);
    }
    async createPaymentDetails() { }
    async changePaymentStatus() { }
    async findById(id) {
        const paymentDetails = await this.repo.findById(id);
        if (!paymentDetails)
            throw new Error("Details not found");
        return toDTO(toDomain(paymentDetails));
    }
}
