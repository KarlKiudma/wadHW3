import { createStore } from "vuex";
import postsJson from "@/data/posts.json";

export default createStore({
  strict: true,

  state: {
    posts: postsJson
  },

  getters: {
    allPosts: state => state.posts
  },

  mutations: {
    IncreaseLikes(state, id) {
      state.posts.forEach(post => {
        if (post.id === id) {
          post.likes += 1;
        }
      });
    },
  
    ResetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
  
  actions: {

    IncreaseLikeAct: (act, id) => {
      setTimeout(function() {
          act.commit("IncreaseLikes", id);
      }, 300);
  },
  
  ResetLikesAct: act => {
    setTimeout(function() {
        act.commit("ResetLikes");
    }, 300);
  }
}
});