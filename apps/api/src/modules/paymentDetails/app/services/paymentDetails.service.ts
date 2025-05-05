import {
  toDomain,
  toDTO,
} from "../../infrastructure/mappers/paymentdetails.mapper";
import { PaymentDetailsRepository } from "../../infrastructure/repository/paymentDetails.repository";
import type { PaymentDetailsDTO } from "../dto/paymentDetails.types";

export class PaymentDetailsService {
  private paymentrepo = new PaymentDetailsRepository();

  async createPaymentDetails() {}

  async changePaymentStatus() {}

  async findById(id: string): Promise<PaymentDetailsDTO> {
    const paymentDetails = await this.paymentrepo.findById(id);
    if (!paymentDetails) throw new Error("Details not found");
    return toDTO(toDomain(paymentDetails));
  }
}
