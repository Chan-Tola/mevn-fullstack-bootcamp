import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    Users: [
      { id: 1, name: "Tola", email: "chantola@gmail.com", password: "12345" },
      { id: 2, name: "nana", email: "tola123@gmail.com", password: "12345" },
    ],
  }),
});
