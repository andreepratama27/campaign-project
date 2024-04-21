import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { mockCampaignData } from "./campaign-card.mock";
import CampaignCard from "..";

describe("CampainCard", () => {
  it("should render correctly", () => {
    render(<CampaignCard {...mockCampaignData} />);
    expect(screen.getByTestId("campaign-card")).toBeDefined();
  });

  it("Should render `Campaign Test` title", () => {
    const customMockData = { ...mockCampaignData, title: "Campaign Test" };
    render(<CampaignCard {...customMockData} />);

    expect(screen.getByTestId("campaign-card-title").textContent).toBe(
      "Campaign Test"
    );
  });
});
