import React from "react";

interface CountdownTimerProps {
    code: string;
    setCode: (code: string) => void;
    remainingSeconds: number;
    countdownFinished: boolean;
    getVerifyCode: () => void;
    getVerifyWithToken: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
                                                           code,
                                                           setCode,
                                                           remainingSeconds,
                                                           countdownFinished,
                                                           getVerifyCode,
                                                           getVerifyWithToken,
                                                       }) => {
    const displayTime = () => {
        const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
        const seconds = String(remainingSeconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Confirm Code</h3>
            <div className="text-gray-600 mb-4">
                Enter the code sent to your phone.
            </div>
            <input
                type="text"
                className="block w-full px-4 py-2 border rounded mb-4"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button
                onClick={getVerifyCode}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
                Confirm
            </button>
            <button
                onClick={getVerifyWithToken}
                disabled={!countdownFinished}
                className="bg-gray-500 text-white px-4 py-2 rounded w-full mt-4"
            >
                Resend Code ({displayTime()})
            </button>
        </div>
    );
};

export default CountdownTimer;
