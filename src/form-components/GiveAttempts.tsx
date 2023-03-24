import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numRequest, setNumRequests] = useState<string>("");
    const val = parseInt(numRequest) || 0;

    function incAttempts(): void {
        setAttempts(attempts + val);
    }
    function decAttempts(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of attempts: {attempts}</span>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Add More Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRequests(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={decAttempts} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={incAttempts}>gain</Button>
        </div>
    );
}
