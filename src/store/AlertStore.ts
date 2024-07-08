import { reactive, watch } from "vue";

export const AlertStore = reactive<{
  type: "error" | "success" | null;
}>({
  type: null,
});

watch(
  () => AlertStore.type,
  () => {
    setTimeout(() => {
      AlertStore.type = null;
    }, 2000);
  }
);
