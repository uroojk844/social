<template>
  <button @click="login('1')">Login</button>
</template>

<script lang="ts" setup>
import { login } from "../store/user.store";
</script>
