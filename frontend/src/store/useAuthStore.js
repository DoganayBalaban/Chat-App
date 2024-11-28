import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

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
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ user: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
