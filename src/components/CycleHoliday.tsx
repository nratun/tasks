import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HOLIDAY_CHANGES1: Record<string, string> = {
    "🎆": "💕",
    "💕": "🌙",
    "🌙": "🎃",
    "🎃": "🦃",
    "🦃": "🎆"
};

const HOLIDAY_CHANGES2: Record<string, string> = {
    "🌙": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "💕",
    "💕": "🌙"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setType] = useState<string>("🌙");

    function switchYear(): void {
        const newType = HOLIDAY_CHANGES1[holiday];
        setType(newType);
    }

    function switchAlph(): void {
        const newType = HOLIDAY_CHANGES2[holiday];
        setType(newType);
    }
    return (
        <div>
            <span data-testid="holiday">Holiday: {holiday}</span>
            <Button onClick={switchAlph}> Advance by Alphabet</Button>
            <Button onClick={switchYear}> Advance by Year</Button>
        </div>
    );
}
