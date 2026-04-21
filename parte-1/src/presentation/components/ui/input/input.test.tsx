import { render, screen } from "@testing-library/react";

import { Input } from "./index";

describe("Input", () => {
  it("should render input with text type by default", () => {
    render(<Input aria-label="Nome" />);

    const inputElement = screen.getByRole("textbox", { name: "Nome" });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("should accept custom input type", () => {
    render(<Input aria-label="Email" type="email" />);

    const inputElement = screen.getByRole("textbox", { name: "Email" });

    expect(inputElement).toHaveAttribute("type", "email");
  });
});
