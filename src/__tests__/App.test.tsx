import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 2, name: /build\. test\. deploy\./i })
    ).toBeInTheDocument();
  });

  it("renders the header brand name", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /ci\/cd pipeline/i })
    ).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /explore pipeline/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /github/i })).toBeInTheDocument();
  });

  it("renders the status cards (Build, Test, Deploy)", () => {
    render(<App />);
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Deploy")).toBeInTheDocument();
  });
});
