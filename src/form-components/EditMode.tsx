import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEmode] = useState<boolean>(false);
    //const [isStudent, setStudent] = useState<boolean>(True);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEmode(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateMode}
            />
        </div>
    );
}
