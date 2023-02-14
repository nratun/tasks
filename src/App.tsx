import React from "react";
import "./App.css";
import image from "./images/baby.jpeg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Rana Tuncer
            </header>
            <h1>
                <span style={{ color: "blue" }}>My cool header</span>
            </h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "223px",
                                height: "35px",
                                backgroundColor: "red"
                            }}
                        >
                            Here{"'"}s my discord picture:
                        </div>
                        <img src={image} alt="My discord profile pic" />
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "223px",
                                height: "35px",
                                backgroundColor: "red"
                            }}
                        >
                            List of My Favorite Foods:
                            <ul>
                                <li>Chicken Tikka Masala</li>
                                <li>Soup</li>
                                <li>Pasta</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
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
