import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    // user: { phone: "9078787646" },
    // setUser: (user) => set(() => ({ user: user })),

    darkMode: false,
    setDarkMode: (value) => set(() => ({ darkMode: value })),
  };
});
