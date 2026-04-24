import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./index";

describe("Button", () => {
	it("should render with default variant and size", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
	});

	it("should render with primary variant", () => {
		render(<Button variant="primary">Primary Button</Button>);
		expect(screen.getByRole("button", { name: /primary button/i })).toBeInTheDocument();
	});

	it("should render with secondary variant", () => {
		render(<Button variant="secondary">Secondary Button</Button>);
		expect(screen.getByRole("button", { name: /secondary button/i })).toBeInTheDocument();
	});

	it("should render with small size", () => {
		render(<Button size="sm">Small Button</Button>);
		expect(screen.getByRole("button", { name: /small button/i })).toBeInTheDocument();
	});

	it("should render with medium size", () => {
		render(<Button size="md">Medium Button</Button>);
		expect(screen.getByRole("button", { name: /medium button/i })).toBeInTheDocument();
	});

	it("should render with large size", () => {
		render(<Button size="lg">Large Button</Button>);
		expect(screen.getByRole("button", { name: /large button/i })).toBeInTheDocument();
	});

	it("should apply custom className", () => {
		render(<Button className="custom-class">Custom Button</Button>);
		const button = screen.getByRole("button", { name: /custom button/i });
		expect(button).toHaveClass("custom-class");
	});

	it("should have correct default type attribute", () => {
		render(<Button>Default Type</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "button");
	});

	it("should accept custom type attribute", () => {
		render(<Button type="submit">Submit Button</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
	});

	it("should be disabled when disabled prop is passed", () => {
		render(<Button disabled>Disabled Button</Button>);
		expect(screen.getByRole("button", { name: /disabled button/i })).toBeDisabled();
	});
});
