import { create } from "zustand";
import { ADDRESSES } from "../content-store/content-store";

export const generalStore = create((set) => {
  return {
    isLoggedIn: false,
    setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),

    showPostReviewOverlay: false,
    setShowPostReviewOverlay: (value) =>
      set(() => ({ showPostReviewOverlay: value })),

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
