import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  user: null,
  isCheckingAuth: true,
  isSignedIn: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  checkAuth: async () => {
    try {
      const res = axiosInstance.get("/auth/check");
      set({ user: res.data });
    } catch (error) {
      console.error(error);
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
