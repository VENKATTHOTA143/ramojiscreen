import { apis } from "@/shared/apiUrls.js";
import { ref } from "vue";
import axios from "axios";

export const num = ref(1);

export async function posts() {
   const response = await axios.get(apis.posts);
   // const data = response.data;

   return response
}

// posts().then(result => console.log(result));