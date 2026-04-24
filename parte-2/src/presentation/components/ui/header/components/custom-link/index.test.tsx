import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CustomLink } from "./index";

describe("CustomLink", () => {
	it("should render with default variant", () => {
		render(<CustomLink href="/about">About</CustomLink>);
		expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
	});

	it("should render with active variant", () => {
		render(
			<CustomLink href="/home" variant="active">
				Home
			</CustomLink>,
		);
		expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
	});

	it("should render with default variant", () => {
		render(
			<CustomLink href="/courses" variant="default">
				Courses
			</CustomLink>,
		);
		expect(screen.getByRole("link", { name: /courses/i })).toBeInTheDocument();
	});

	it("should have correct href attribute", () => {
		render(<CustomLink href="/test">Test Link</CustomLink>);
		expect(screen.getByRole("link", { name: /test link/i })).toHaveAttribute("href", "/test");
	});

	it("should apply custom className", () => {
		render(
			<CustomLink href="/custom" className="custom-class">
				Custom Link
			</CustomLink>,
		);
		const link = screen.getByRole("link", { name: /custom link/i });
		expect(link).toHaveClass("custom-class");
	});

	it("should render children correctly", () => {
		render(<CustomLink href="/test">Test Content</CustomLink>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});
