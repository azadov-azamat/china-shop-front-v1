import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import {sendRequest} from "../../config/api.ts";
import CountdownTimer from "../../components/count-down-timer";
import CardForm from "../../components/form/payment";

// interface Plan {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     durationInDays: number;
// }

interface SendingData {
    phone: string;
    wait: number;
}

const Payment: React.FC = () => {
    const params = useParams();
    const {orderId} = params;
    // const [plan, setPlan] = useState<Plan | null>(null);
    const [cardData, setCardData] = useState<any>(null);
    const [sendingData, setSendingData] = useState<SendingData | null>(null);
    const [receipt, setReceipt] = useState<any>(null);
    const [remainingSeconds, setRemainingSeconds] = useState<number>(0);
    const [code, setCode] = useState<string>("");
    const [countdownFinished, setCountdownFinished] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (remainingSeconds > 0) {
            const timer = setTimeout(() => {
                setRemainingSeconds((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setCountdownFinished(true);
        }
    }, [remainingSeconds]);

    const getVerifyWithToken = async () => {
        if (!cardData?.token) return;
        const body = { token: cardData.token };

        const {result} = await sendRequest("/cards/verify-code", body);

        if (result) {
            setSendingData(result);
            setRemainingSeconds(result.wait);
        }
    };

    const getVerifyCode = async () => {
        setLoading(true);
        const body = {
            token: cardData?.token,
            code,
        };

        const {result} = await sendRequest("/cards/verify", body);

        if (result) {
            setCardData(result.card);
            createReceipt();
        }
        setLoading(false);
    };

    const createReceipt = async () => {
        const body = { orderId };

        const {result} = await sendRequest("/receipts", body);
        if (result) {
            setReceipt(result.receipt);
            receiptPay();
        }
    };

    const receiptPay = async () => {
        const body = { checkId: receipt._id, token: cardData?.token };

        const {result} = await sendRequest("/receipts/pay", body);
        if (result) {
            alert("Payment Successful!");
            navigate("/success-payment");
        } else {
            alert("Payment Error!");
            navigate("/error-payment");
        }
    };

    return (
        <div className="container mx-auto mt-10 min-h-screen">
            <div className="max-w-xl mx-auto">
                {sendingData ? (
                    <CountdownTimer
                        code={code}
                        setCode={setCode}
                        remainingSeconds={remainingSeconds}
                        countdownFinished={countdownFinished}
                        getVerifyCode={getVerifyCode}
                        getVerifyWithToken={getVerifyWithToken}
                    />
                ) : (
                    <CardForm
                        loading={loading}
                        setCardData={setCardData}
                        setSendingData={setSendingData}
                        setRemainingSeconds={setRemainingSeconds}
                        setLoading={setLoading}
                    />
                )}
            </div>
        </div>
    );
};

export default Payment;
