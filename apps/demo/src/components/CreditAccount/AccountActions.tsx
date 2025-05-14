import { useState } from "react";

import { Button } from "../../ui/Button";

interface AccountActionsProps {
  code: string;
  isActive: boolean;
  useCredits: (
    creditCode: string,
    cost: number,
    note?: string,
  ) => Promise<void>;
  transferCredits: (
    fromCode: string,
    toCode: string,
    amount: number,
    note?: string,
  ) => Promise<void>;
  refundCredits: (
    creditCode: string,
    cost: number,
    note?: string,
  ) => Promise<void>;
  refundMoney: (
    creditCode: string,
    money: number,
    note?: string,
  ) => Promise<void>;
  nullifyAccount: (creditCode: string, note?: string) => Promise<void>;
}

export function AccountActions({
  code,
  isActive,
  useCredits,
  transferCredits,
  refundCredits,
  refundMoney,
  nullifyAccount,
}: AccountActionsProps) {
  const [useCreditsAmount, setUseCreditsAmount] = useState<number>(0);
  const [transferCreditsAmount, setTransferCreditsAmount] = useState<number>(0);
  const [transferCreditsToCode, setTransferCreditsToCode] =
    useState<string>("");
  const [transferCreditsNote, setTransferCreditsNote] = useState<string>("");
  const [refundCreditsAmount, setRefundCreditsAmount] = useState<number>(0);
  const [refundMoneyAmount, setRefundMoneyAmount] = useState<number>(0);
  const [useCreditsNote, setUseCreditsNote] = useState<string>("");
  const [refundCreditsNote, setRefundCreditsNote] = useState<string>("");
  const [refundMoneyNote, setRefundMoneyNote] = useState<string>("");
  const [nullifyNote, setNullifyNote] = useState<string>("");

  const handleUseCredits = async () => {
    await useCredits(code, useCreditsAmount, useCreditsNote);
    setUseCreditsAmount(0);
    setUseCreditsNote("");
  };

  const handleTransferCredits = async () => {
    await transferCredits(
      code,
      transferCreditsToCode,
      transferCreditsAmount,
      transferCreditsNote,
    );
    setTransferCreditsAmount(0);
    setTransferCreditsToCode("");
    setTransferCreditsNote("");
  };

  const handleRefundCredits = async () => {
    await refundCredits(code, refundCreditsAmount, refundCreditsNote);
    setRefundCreditsAmount(0);
    setRefundCreditsNote("");
  };

  const handleRefundMoney = async () => {
    await refundMoney(code, refundMoneyAmount, refundMoneyNote);
    setRefundMoneyAmount(0);
    setRefundMoneyNote("");
  };

  const handleNullify = async () => {
    await nullifyAccount(code, nullifyNote);
    setNullifyNote("");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Hver "handling" er én række */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="number"
          value={useCreditsAmount}
          onChange={(e) => setUseCreditsAmount(Number(e.target.value))}
          placeholder="Antal kreditter"
          style={{ maxWidth: "150px", flex: "1 1 100px" }}
        />
        <input
          type="text"
          value={useCreditsNote}
          onChange={(e) => setUseCreditsNote(e.target.value)}
          placeholder="Note"
          style={{ flex: "2 1 100px" }}
        />
        <Button disabled={!isActive} onClick={handleUseCredits}>
          Brug Kreditter
        </Button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="number"
          value={transferCreditsAmount}
          onChange={(e) => setTransferCreditsAmount(Number(e.target.value))}
          placeholder="Antal kreditter"
          style={{ maxWidth: "150px", flex: "1 1 100px" }}
        />
        <input
          type="text"
          value={transferCreditsToCode}
          onChange={(e) => setTransferCreditsToCode(e.target.value)}
          placeholder="Overfør til"
          style={{ flex: "2 1 100px" }}
        />
        <input
          type="text"
          value={transferCreditsNote}
          onChange={(e) => setTransferCreditsNote(e.target.value)}
          placeholder="Note"
          style={{ flex: "2 1 100px" }}
        />
        <Button disabled={!isActive} onClick={handleTransferCredits}>
          Overfør Kreditter
        </Button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="number"
          value={refundMoneyAmount}
          onChange={(e) => setRefundMoneyAmount(Number(e.target.value))}
          placeholder="Beløb i DKK"
          style={{ maxWidth: "150px", flex: "1 1 150px" }}
        />
        <input
          type="text"
          value={refundMoneyNote}
          onChange={(e) => setRefundMoneyNote(e.target.value)}
          placeholder="Note"
          style={{ flex: "2 1 200px" }}
        />
        <Button onClick={handleRefundMoney}>Refunder Penge</Button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="number"
          value={refundCreditsAmount}
          onChange={(e) => setRefundCreditsAmount(Number(e.target.value))}
          placeholder="Antal kreditter"
          style={{ maxWidth: "150px", flex: "1 1 150px" }}
        />
        <input
          type="text"
          value={refundCreditsNote}
          onChange={(e) => setRefundCreditsNote(e.target.value)}
          placeholder="Note"
          style={{ flex: "2 1 200px" }}
        />
        <Button onClick={handleRefundCredits}>Refunder Kreditter</Button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="text"
          value={nullifyNote}
          onChange={(e) => setNullifyNote(e.target.value)}
          placeholder="Note"
          style={{ flex: "1 1 300px" }}
        />
        <Button onClick={handleNullify}>Nulstil Konto</Button>
      </div>
    </div>
  );
}
