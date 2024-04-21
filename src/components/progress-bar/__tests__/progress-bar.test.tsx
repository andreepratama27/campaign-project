import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgressBar from "..";

describe("ProgressBar", () => {
  test("ProgressBar should render correctly", () => {
    render(<ProgressBar percentage={0} />);
    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar).toBeDefined();
  });

  test("ProgressBar should have 10 percentage", () => {
    render(<ProgressBar percentage={0.1} />);
    expect(screen.getByTestId("progress-bar").value).toEqual(10);
  });

  test("ProgressBar should have pink background if completed", () => {
    render(<ProgressBar percentage={10} />);
    expect(screen.getByTestId("progress-bar").className).toContain(
      "progress-bar--full"
    );
  });
});
