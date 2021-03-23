import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import App from "../App";
import userEvent from "@testing-library/user-event";

jest.mock("http://localhost:3000/")

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<App />)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<App />)

  userEvent.type()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading