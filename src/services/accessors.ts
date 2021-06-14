// /services/accessors.ts
import { getAccessorType } from "typed-vuex";
import * as todo from "@/store/todo";

const initialStore = () => ({
  modules: {
    todo
  }
});

export const accessorType = getAccessorType(initialStore());
