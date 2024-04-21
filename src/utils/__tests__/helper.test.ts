import { expect, it } from "vitest";
import { sortAsc } from "../helper";
import { Campaign } from "@/types/campaign";

describe("formatCurrency", () => {
  it.todo("Should return correct format for Positive value");
  it.todo("Should return correct format for Negative value");
  it.todo("Should return correct format for Zero value");
});

describe("sortAsc", () => {
  it("should sorting the array correctly with ASC", () => {
    const mockData = [
      { id: 1, donation_target: 256 },
      { id: 2, donation_target: 120 },
      { id: 3, donation_target: 250 },
    ];
    const sortedData = mockData.sort(
      (a, b) => a.donation_target - b.donation_target
    );

    expect(sortAsc(mockData as Campaign[], "donation_target")).toEqual(
      sortedData
    );
  });
});
