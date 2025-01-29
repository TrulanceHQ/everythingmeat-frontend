import { create, StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

type StoreState = {
  role: string;
  setRole: (role: string) => void;
  clearRole: () => void;
};

type StorePersist = (
  config: StateCreator<StoreState>,
  options: PersistOptions<StoreState>
) => StateCreator<StoreState>;

export const useStore = create<StoreState>(
  (persist as StorePersist)(
    (set) => ({
      role: "no-role",
      setRole: (role: string) => set({ role }),
      clearRole: () => set({ role: "no-role" }),
    }),
    {
      name: "user-role-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
