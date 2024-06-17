import React from 'react';

interface TimerProps {
    timeLeft: number;
    initialTime: number;
}

export default function Timer({ timeLeft, initialTime }: TimerProps) {
    return (
        <div className="w-full bg-gray_light h-2 rounded">
            <div
                className="bg-yellow h-2 rounded"
                style={{ width: `${(timeLeft / initialTime) * 100}%` }}
                role="progressbar"
            ></div>
        </div>
    );
};
