import { reactive, ref, watch } from "vue";
import { Id } from "../../convex/_generated/dataModel";
import { useAuth0 } from "@auth0/auth0-vue";
import { useConvexMutation } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";

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

export function getData() {
  const auth0 = useAuth0();
  const { mutate } = useConvexMutation(api.users.addUser);

  mutate({
    user: {
      name: auth0.user.value!.name!,
      email: auth0.user.value!.email!,
      picture: auth0.user.value?.picture,
    },
  }).then((id) => {
    user._id = id!;
    user.name = auth0.user.value!.name!;
    user.email = auth0.user.value!.email!;
    user.picture = auth0.user.value!.picture;
  });
}

watch(user, () => {
  userLoading.value = false;
});
