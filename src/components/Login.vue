<template>
  <section class="grid grid-cols-2 min-h-dvh">
    <div class="max-sm:hidden right"></div>
    <div class="w-full h-full grid content-center justify-items-center lightyellow">
      <h1 class="text-3xl mb-2 font-semibold">Social Media</h1>
      <h1 class="text-xl mb-8">Welcome back!</h1>
      <form @submit.prevent="" class="grid gap-4">
        <div class="form-group">
          <label for=""> Username </label>
          <input type="text" name="username" placeholder=" " required />
        </div>
        <div class="form-group">
          <label for=""> Password </label>
          <input type="password" name="password" placeholder=" " required />
        </div>
        <button>Login</button>
        <RouterLink to="/auth/register" class="text-sm text-black/70">Don't have an account?
          <span class="font-semibold text-black">Register</span>
        </RouterLink>
        <div class="text-center text-black/70 my-4">or</div>
        <div
          class="flex items-center gap-4 justify-center border border-gray-400 p-2.5 text-center text-sm rounded-md cursor-pointer">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
            class="size-6" />
          Continue with google
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { onMounted } from 'vue';


onMounted(() => {
  const auth0 = useAuth0();
  auth0.loginWithRedirect();
})

</script>

<style scoped>
@import "../css/auth.css";
</style>
