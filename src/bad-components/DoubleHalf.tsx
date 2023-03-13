import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ValueChange {
    setDhValue: (newValue: number) => void;
    dhValue: number;
}

function PerformMath({ setDhValue, dhValue }: ValueChange): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
        </div>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <PerformMath
                setDhValue={setDhValue}
                dhValue={dhValue}
            ></PerformMath>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
