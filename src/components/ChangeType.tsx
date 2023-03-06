import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QUESTION_CHANGES: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};

export function ChangeType(): JSX.Element {
    const [questType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    function switchType(): void {
        const newType = QUESTION_CHANGES[questType];
        setType(newType);
    }
    return (
        <div>
            {questType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
            <Button onClick={switchType}>Change Type</Button>
        </div>
    );
}
