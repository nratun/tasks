import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [status, setStatus] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function changeStatus(): void {
        setStatus(status === false ? true : false);
    }
    return (
        <div>
            <div>
                <Button onClick={changeStatus} disabled={status}>
                    Start Quiz
                </Button>
                <Button onClick={changeStatus} disabled={!status}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
