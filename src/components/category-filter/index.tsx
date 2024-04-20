"use client";
import useSorting, { SORT_KEY } from "@/hooks/useSorting";
import { useStore } from "zustand";

export default function CategoryFilter() {
  const { sortKey, changeSort } = useStore(useSorting);

  return (
    <div className="sorting-wrapper">
      Sorting by:
      <select
        name=""
        id=""
        className="text-sm"
        value={sortKey}
        onChange={({ target }) =>
          changeSort(target.value as keyof typeof SORT_KEY)
        }
      >
        <option value="donation_target">Donation Goal</option>
        <option value="days_remaining">Days Left</option>
      </select>
    </div>
  );
}
