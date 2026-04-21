import { render, screen } from "@testing-library/react";

import { Button } from "./index";

describe("Button", () => {
  it("should render label with primary variant by default", () => {
    render(<Button>Enviar</Button>);

    const buttonElement = screen.getByRole("button", { name: "Enviar" });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-dark");
  });

  it("should apply tertiary variant", () => {
    render(<Button variant="tertiary">Tertiary</Button>);

    const buttonElement = screen.getByRole("button", { name: "Tertiary" });

    expect(buttonElement).toHaveClass("bg-green");
    expect(buttonElement).toHaveClass("text-dark");
  });

  it("should apply secondary variant with border", () => {
    render(<Button variant="secondary">Secondary</Button>);

    const buttonElement = screen.getByRole("button", { name: "Secondary" });

    expect(buttonElement).toHaveClass("border-dark");
    expect(buttonElement).toHaveClass("bg-transparent");
  });

  it("should apply custom size", () => {
    render(
      <Button size="lg" variant="primary">
        Ver mais
      </Button>
    );

    const buttonElement = screen.getByRole("button", { name: "Ver mais" });

    expect(buttonElement).toHaveClass("h-14");
  });
});
