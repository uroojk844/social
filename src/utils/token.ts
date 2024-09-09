export function setToken(token: string) {
  return localStorage.setItem("token", token);
}

export function getToken() {
  return "Bearer " + localStorage.getItem("token") || null;
}

export function removeToken() {
  return localStorage.removeItem("token");
}
