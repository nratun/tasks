import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [text, setText] = useState<string>("");
    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                The text is {text}{" "}
                <span>{text == expectedAnswer ? "✔️" : "❌"}</span>
            </div>
            <Form.Group controlId="formCheckAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Enter Answer:
                </Form.Label>
                <Col>
                    <Form.Control value={text} onChange={updateText} />
                </Col>
            </Form.Group>
        </div>
    );
}
