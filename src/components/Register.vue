<template>
  <section class="grid grid-cols-2 min-h-dvh">
    <div class="max-sm:hidden right"></div>
    <div
      class="w-full h-full grid content-center justify-items-center lightyellow"
    >
      <h1 class="text-3xl mb-2 font-semibold">Social Media</h1>
      <h1 class="text-xl mb-8">Create an account</h1>
      <form @submit.prevent="() => register(user)" class="grid gap-4">
        <div class="form-group">
          <label for="">Name</label>
          <input type="text" v-model="user.name" placeholder=" " required />
        </div>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" v-model="user.username" placeholder=" " required />
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input type="text" v-model="user.email" placeholder=" " required />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            v-model.trim="user.password"
            name="password"
            placeholder=" "
            required
          />
        </div>
        <div class="form-group">
          <label for="">Confirm Password</label>
          <input
            type="password"
            v-model.trim="cpassword"
            placeholder=" "
            required
          />
        </div>
        <button :disabled="!isMatching">Register</button>
        <RouterLink to="/auth/login" class="text-sm text-black/70"
          >Already have an account?
          <span class="font-semibold text-black">Log in</span></RouterLink
        >
        <div class="text-center text-black/70 my-4">or</div>
        <div
          class="flex items-center gap-4 justify-center border border-gray-400 p-2.5 text-center text-sm rounded-md cursor-pointer"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
            class="size-6"
          />
          Continue with google
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { register } from "../store/user.store";
import { RegisterUser } from "../interfaces/user.interface";
import { ref, computed, reactive } from "vue";
const user = reactive<RegisterUser>({
  name: "",
  username: "",
  email: "",
  password: "",
});

const cpassword = ref("");
const isMatching = computed(() => {
  if (user.password.length && cpassword.value.length)
    return user.password == cpassword.value;
});
</script>

<style scoped>
@import "../css/auth.css";
</style>
../store/user2.store
