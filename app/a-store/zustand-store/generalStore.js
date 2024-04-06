import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    user: { phone: "9078787646" },
    setUser: (user) => set(() => ({ user: user })),

    menuClicked: false,
    setMenuClicked: (payload) => set(() => ({ menuClicked: payload })),

    selectedAccordion: "home",
    setSelectedAccordion: (payload) => set(() => ({ selectedAccordion: payload })),
  };
});
