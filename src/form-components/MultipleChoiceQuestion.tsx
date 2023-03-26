import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currChoice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="userChoices">
                    <Form.Label>Pick an option from the dropdown</Form.Label>
                    <Form.Select value={currChoice} onChange={updateChoice}>
                        {options.map((anOption) => (
                            <option key={anOption} value={anOption}>
                                {anOption.toUpperCase()}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <span>{currChoice == expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
