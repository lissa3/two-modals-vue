import { createStore } from 'vuex'
import posts from "@/store/modules/posts";
import items from "@/store/modules/items";
import user from "@/store/modules/user";

export default createStore({
  state: {    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    items,
    user
  }
})
