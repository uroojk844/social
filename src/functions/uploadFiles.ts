import { ref } from "vue";
import { storage } from "./firebase";
import { ref as fireRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { PostType } from "../interfaces/post.interface";

export const postType = ref<PostType>("text");
export const isUploading = ref(false);
export const percentage = ref(0);

const files = ref<FileList | null>(null);
export const previews = ref<string[]>([]);

export async function setFile(event: Event, type: PostType) {
  files.value = (event.target as HTMLInputElement).files;
  postType.value = type;
  if (files.value) {
    for (let i = 0; i < files.value?.length; i++) {
      const url = URL.createObjectURL(files.value[i]);
      previews.value.push(url);
    }
  }
}

export async function uploadFiles() {
  isUploading.value = true;
  let urls = [];
  if (files.value) {
    for (let i = 0; i < files.value?.length; i++) {
      urls.push(await uploadFile(files.value[i]));
    }
  }
  return urls;
}

async function uploadFile(file: File) {
  const storageRef = fireRef(storage, "images/" + uuidv4());
  let f = await uploadBytes(storageRef, file);
  return await getDownloadURL(f.ref);
}

export function resetAll() {
  previews.value = [];
  files.value = null;
  postType.value = "text";
}
