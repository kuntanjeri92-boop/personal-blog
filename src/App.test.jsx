import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Personal Blog App", () => {
  it("renders the blog header and initial post", () => {
    render(<App />);
    expect(screen.getByText("My Personal Blog")).toBeInTheDocument();
    expect(screen.getByText("Welcome to My Blog")).toBeInTheDocument();
  });

  it("allows adding a new blog post", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Post Title"), {
      target: { value: "My Second Post" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Keziah" },
    });
    fireEvent.change(screen.getByPlaceholderText("Write your post here..."), {
      target: { value: "Testing adding a post." },
    });
    fireEvent.click(screen.getByText("Publish Post"));

    expect(screen.getByText("My Second Post")).toBeInTheDocument();
    expect(screen.getByText("Testing adding a post.")).toBeInTheDocument();
  });

  it("allows deleting a blog post", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Welcome to My Blog")).not.toBeInTheDocument();
    expect(screen.getByText("No blog posts yet.")).toBeInTheDocument();
  });
});
