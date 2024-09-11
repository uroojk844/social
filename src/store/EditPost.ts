import { ref } from "vue";
import { Id } from "../../convex/_generated/dataModel";

export const editModelAction = ref<boolean | null>(null);
export const editModelText = ref("");
export const postId = ref<Id<"posts"> | null>(null);
export const isOpen = ref(false);

export function openPost(id: Id<"posts">, text: string) {
  isOpen.value = true;
  postId.value = id;
  editModelText.value = text;
}
