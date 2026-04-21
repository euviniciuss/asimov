import { render, screen } from "@testing-library/react";

import { Typography } from "./index";

describe("Typography", () => {
  it("should render paragraph variant by default", () => {
    render(<Typography>Default text</Typography>);

    const textElement = screen.getByText("Default text");

    expect(textElement.tagName).toBe("P");
    expect(textElement).toHaveClass("text-p");
  });

  it("should render chosen semantic element with as prop", () => {
    render(
      <Typography as="h1" variant="h1-mobile">
        Hero
      </Typography>
    );

    const textElement = screen.getByRole("heading", { level: 1, name: "Hero" });

    expect(textElement).toHaveClass("text-h1-mobile");
  });

  it("should apply selected color variant", () => {
    render(<Typography color="green">Highlight</Typography>);

    const textElement = screen.getByText("Highlight");

    expect(textElement).toHaveClass("text-green");
  });
});
