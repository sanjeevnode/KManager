import { MySecretsNav, NavIndex } from "@/types";
import { create } from "zustand";

type NavigationState = {
  navIndex: NavIndex;
  setNavIndex: (index: NavIndex) => void;
  mySecretsNav: MySecretsNav;
  setMySecretsNav: (index: MySecretsNav) => void;
};

const navigationStore = create<NavigationState>((set) => ({
    navIndex: NavIndex.MYSECRETS,
    setNavIndex: (index) => set({ navIndex: index }),
    mySecretsNav: MySecretsNav.ALL,
    setMySecretsNav: (index) => set({ mySecretsNav: index }),
}));

export { navigationStore };
