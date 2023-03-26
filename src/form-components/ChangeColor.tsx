import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [colour, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];
    return (
        <div>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-"
                    label={
                        <div style={{ backgroundColor: color }}>{color}</div>
                    }
                    value={color}
                    checked={colour === color}
                />
            ))}
            <h3>Change Color</h3>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colour }}
                >
                    {colour}
                </span>
            </div>
        </div>
    );
}
