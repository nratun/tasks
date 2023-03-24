import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numRequest, setNumRequests] = useState<number>(0);
    
    return (
        <div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Add More Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttempts(attempts + numRequest)
                    }
                />
            </Form.Group>
            <h3>Give Attempts</h3>
        </div>
    );
}
