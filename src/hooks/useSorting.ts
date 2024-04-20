import { create } from "zustand";

export enum SORT_KEY {
  "donation_target",
  "days_remaining",
}

interface State {
  sortKey: keyof typeof SORT_KEY;
}

interface Action {
  changeSort: (key: keyof typeof SORT_KEY) => void;
}

const useSorting = create<State & Action>()((set, get) => ({
  sortKey: "donation_target",
  changeSort(key) {
    set(() => ({
      sortKey: key,
    }));
  },
}));

export default useSorting;
