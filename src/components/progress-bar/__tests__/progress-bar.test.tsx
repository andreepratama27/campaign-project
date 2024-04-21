import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgressBar from "..";

describe("ProgressBar", () => {
  test("ProgressBar should render correctly", () => {
    render(<ProgressBar percentage={0} />);
    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar).toBeDefined();
  });

  test.todo("ProgressBar should have 10 percentage", () => {});
  test.todo("ProgressBar should have pink background if completed", () => {});
});
