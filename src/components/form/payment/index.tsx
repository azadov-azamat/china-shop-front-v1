import React, { useState } from "react";
import {sendRequest} from "../../../config/api.ts";

interface CardFormProps {
    loading: boolean;
    setCardData: (data: any) => void;
    setSendingData: (data: any) => void;
    setRemainingSeconds: (seconds: number) => void;
    setLoading: (loading: boolean) => void;
}

const CardForm: React.FC<CardFormProps> = ({
                                               loading,
                                               setCardData,
                                               setSendingData,
                                               setRemainingSeconds,
                                               setLoading,
                                           }) => {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiry, setExpiry] = useState<string>("");

    const createCard = async () => {
        setLoading(true);
        const body = {
            number: cardNumber.replace(/\D/g, ""),
            expire: expiry.replace(/\D/g, ""),
        };

        const {result} = await sendRequest("/cards", body);

        if (result) {
            setCardData(result.card);
            const verifyResult = await sendRequest("/cards/verify-code", {
                token: result.card.token,
            });

            if (verifyResult.result) {
                setSendingData(verifyResult.result);
                setRemainingSeconds(verifyResult.result.wait);
            }
        }
        setLoading(false);
    };

    return (
        <div className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Card Number</label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 border rounded"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Expiry</label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 border rounded"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                />
            </div>
            <button
                onClick={createCard}
                disabled={!cardNumber || !expiry || loading}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
                Continue
            </button>
        </div>
    );
};

export default CardForm;
