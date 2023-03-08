import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left_die, setValue1] = useState<number>(1);
    const [right_die, setValue2] = useState<number>(2);
    const [win, setStatus] = useState<string>("");
    function changeLeft(): void {
        setValue1(d6());
    }
    function changeRight(): void {
        setValue2(d6());
    }
    function result(): void {
        setStatus(
            left_die === right_die ? (left_die === 1 ? "Lose" : "Win") : "Lose"
        );
    }

    return (
        <div>
            <div>
                <span>{left_die}</span>
                <span>{right_die}</span>
                <Button onClick={changeLeft}> Roll Left</Button>
                <Button onClick={changeRight}> Roll Right</Button>
                {result()}
                <span>{win}</span>
            </div>
        </div>
    );
}
