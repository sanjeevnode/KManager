import { create } from "zustand";

type NavigationState = {
    navIndex: number;
    setNavIndex: (index: number) => void;
};

const navigationStore = create<NavigationState>((set) => ({
    navIndex: 0,
    setNavIndex: (index) => set({ navIndex: index }),
}));

export { navigationStore };
