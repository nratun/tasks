import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEmode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEmode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Switch
                    type="switch"
                    id="is-edit-switch"
                    label={editMode ? "Edit Mode" : "Default Mode"}
                    checked={editMode}
                    onChange={updateMode}
                />
            </div>
            <span>
                {editMode ? (
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                        <Form.Group controlId="formStudentName">
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={updateName}
                                disabled={!editMode}
                            />
                        </Form.Group>
                    </div> // eslint-disable-next-line prettier/prettier, no-extra-parens
                ) : ("") }
            </span>
            <span style={{ visibility: editMode ? "hidden" : "visible" }}>
                {name} {isStudent ? "is a" : "is not a"} student
            </span>
        </div>
    );
}
