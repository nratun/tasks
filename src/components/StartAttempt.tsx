import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [status, setStatus] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function changeStatus(): void {
        setStatus(status === false ? true : false);
    }
    function incAttempts(): void {
        setAttempts(attempts + 1);
    }
    function dec_change(): void {
        setAttempts(attempts - 1);
        setStatus(status === false ? true : false);
    }
    return (
        <div>
            <div>
                <Button onClick={dec_change} disabled={status || attempts <= 0}>
                    Start Quiz
                </Button>
                <Button onClick={changeStatus} disabled={!status}>
                    Stop Quiz
                </Button>
                <Button onClick={incAttempts} disabled={status}>
                    Mulligan
                </Button>
                <span> {attempts} </span>
            </div>
        </div>
    );
}
