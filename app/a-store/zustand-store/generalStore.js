import { create } from "zustand";
import { ADDRESSES } from "../content-store/content-store";

export const generalStore = create((set) => {
  return {
    // user: { phone: "9078787646" },
    // setUser: (user) => set(() => ({ user: user })),

    isLoggedIn: false,
    setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),

    showProfileDropdown: false,
    setShowProfileDropdown: (value) =>
      set(() => ({ showProfileDropdown: value })),

    searchTerm: "",
    setSearchTerm: (value) => set(() => ({ searchTerm: value })),

    focusedSearchBar: "landing",
    setFocusedSearchBar: (value) => set(() => ({ focusedSearchBar: value })),

    addressList: ADDRESSES,
    setAddressList: (value) => set(() => ({ addressList: value })),

    searchSuggestions: [],
    setSearchSuggestions: (value) => set(() => ({ searchSuggestions: value })),

    selectedAddress: {},
    setSelectedAddress: (value) => set(() => ({ selectedAddress: value })),
  };
});
