import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
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
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr /> Hello World
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
export default App;
