<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { onMounted } from 'vue';

onMounted(() => {
  const auth0 = useAuth0();
  auth0.loginWithRedirect();
})
</script>