import React from "react";
import type { CreditAccount } from "../../types/CreditAccount";

type Props = {
  account: CreditAccount;
};

export const FullAccountSummaryTable = ({ account }: Props) => {
  return (
    <table
      style={{
        margin: "1rem auto",
        borderCollapse: "collapse",
        width: "100%",
        maxWidth: "500px",
        fontSize: "1rem",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Kode:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.creditCode}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Type:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.type === "GIFT_CARD" ? "Gavekort" : "Klippekort"}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Email:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.email}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Originale kreditter:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.originalCredits}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Original pris:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.originalMoney} DKK
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Tilgængelige kreditter:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.availableCredits}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Tilgængelige penge:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.availableMoney} DKK
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Status:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.isActive ? "Aktiv" : "Inaktiv"}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Oprettet:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {new Date(account.createdAt).toLocaleDateString()}
          </td>
        </tr>
        <tr>
          <td
            style={{ fontWeight: "bold", padding: "0.5rem", textAlign: "left" }}
          >
            Udløbsdato:
          </td>
          <td style={{ padding: "0.5rem", textAlign: "right" }}>
            {account.expiresAt
              ? new Date(account.expiresAt).toLocaleDateString()
              : "Ukendt"}
          </td>
        </tr>

        {/* Kun for PREPAID_CARD */}
        {account.type === "PREPAID_CARD" && (
          <tr>
            <td
              style={{
                fontWeight: "bold",
                padding: "0.5rem",
                textAlign: "left",
              }}
            >
              Antal behandlinger:
            </td>
            <td style={{ padding: "0.5rem", textAlign: "right" }}>
              {account.treatmentCount}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
