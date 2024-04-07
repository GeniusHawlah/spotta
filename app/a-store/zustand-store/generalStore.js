import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    // user: { phone: "9078787646" },
    // setUser: (user) => set(() => ({ user: user })),

    isLoggedIn: false,
    setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),

    searchTerm: "",
    setSearchTerm: (value) => set(() => ({ searchTerm: value })),

    addressList: [],
    setAddressList: (value) => set(() => ({ addressList: value })),

    reviews: [],
    setReviews: (value) => set(() => ({ reviews: value })),

    searchSuggestions: [],
    setSearchSuggestions: (value) => set((state) => ({ searchSuggestions: value })),
  };
});
