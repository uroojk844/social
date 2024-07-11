import { ref, watch } from "vue";
import { router } from "../router";

let _id = ref<null | string>(localStorage.getItem("_id") || null);

function isLogin() {
  return _id.value != null;
}

watch(_id, () => {
  isLogin() ? router.push("/") : router.push("login");
});

function login(id: string) {
  localStorage.setItem("_id", id);
  _id.value = id;
}
function logout() {
  localStorage.removeItem("_id");
  _id.value = null;
}

export { isLogin, login, logout };
