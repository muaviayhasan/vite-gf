class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticatedAdmin() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (
      (user && user.role && user.role === "admin") ||
      (user && user.role && user.role === "manager")
    ) {
      this.authenticated = true;
    }
    return this.authenticated;
  }
}

export default new Auth();
