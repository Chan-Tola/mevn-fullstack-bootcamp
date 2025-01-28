import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    Users: [
      {
        id: 1,
        imageSrc: "",
        name: "Tola",
        email: "chantola@gmail.com",
        password: "12345",
        username: "@renchantola",
      },
      {
        id: 2,
        imageSrc: "",
        name: "tong",
        email: "tong@gmail.com",
        password: "12345",
        username: "@tong",
      },
      {
        id: 3,
        imageSrc: "",
        name: "Seang sakmai",
        email: "sakmaitmey@gmail.com",
        password: "12345",
        username: "@maikdorthom",
      },
    ],
    currentUser: null,
    authToken: null,
  }),
  actions: {
    login(email, password) {
      // console.log("Email:", email, "Password:", password);
      const user = this.Users.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.password === password
      );
      if (user) {
        const token = `token-${user.id}-${Date.now()}`;
        this.currentUser = user;
        this.authToken = token;

        localStorage.setItem("authToken", token);
        localStorage.setItem("currentUserId", user.id);
        return true;
      } else {
        return false;
      }
    },
    logOut() {
      this.currentUser = null;
      this.authToken = null;
      // clear localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("Id");
    },
    refreshWeb() {
      const token = localStorage.getItem("authToken");
      const userId = localStorage.getItem("currentUserId");

      if (token && userId) {
        const user = this.Users.find((u) => u.id === parseInt(userId, 10));
        if (user) {
          this.currentUser = user;
          this.authToken = token;
        }
      }
    },
  },
});
