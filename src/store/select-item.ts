import { create } from "zustand";

interface Props {
  item: number;
  setItem: (state: number) => void;
}

const useItem = create<Props>((set) => ({
  item: 1,
  setItem: (newState: number) => set({ item: newState }),
}));

export { useItem };
