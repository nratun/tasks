import React from "react";
import "./App.css";
import image from "./images/baby.jpeg";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Rana Tuncer
            </header>
            <h1>
                <span style={{ color: "blue" }}>This is me on discord</span>
            </h1>
            <img src={image} alt="My discord profile pic" />
            <p>
                List of My Favorite Foods:
                <ul>
                    <li>Chicken Tikka Masala</li>
                    <li>Soup</li>
                    <li>Pasta</li>
                </ul>
            </p>
            <div>
                <Button onClick={() => console.log("I am logged")}>
                    Log Hello World
                </Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}
export default App;
