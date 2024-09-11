import { reactive, ref, watch } from "vue";
import { Id } from "../../convex/_generated/dataModel";

interface IUser {
  _id: Id<"users"> | null | undefined;
  name: string;
  email: string;
  username?: string;
  picture?: string;
}

export const userLoading = ref(true);

export const user = reactive<IUser>({
  _id: null,
  name: "",
  email: "",
});

watch(user, () => {
  userLoading.value = false;
});