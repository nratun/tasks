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
    let win = "";

    return (
        <div>
            <span data-testid="won">{win}</span>
            <span data-testid="left-die">{left_die}</span>
            <span data-testid="right-die">{right_die}</span>
            <Button
                onClick={() => {
                    setValue1(d6);
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setValue2(d6);
                }}
            >
                Roll Right
            </Button>
            {left_die === right_die
                ? left_die === 1
                    ? (win = "Lose")
                    : (win = "Win")
                : (win = "")}
        </div>
    );
}
