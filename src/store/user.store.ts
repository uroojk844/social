import { ref } from "vue";
import { Id } from "../../convex/_generated/dataModel";

interface IUser {
  _id: Id<"users"> | null | undefined;
  name: string;
  email: string;
  username?: string;
  picture?: string;
}

export const user = ref<IUser>({
  _id: null,
  name: "",
  email: "",
});
