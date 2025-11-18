<template>
  <div class="main-page">
    <Posts></Posts>
    <button v-on:click="ResetLikesAct"> Reset Likes </button>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";

export default {
  components: { Posts },

  methods: {
    ResetLikesAct: function() {
      this.$store.commit("ResetLikes")
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;  
}

button{
background:  rgb(31, 163, 163);
border: 0;
padding: 10px 20px 10px 20px;
margin-top:  20px;
margin-bottom:  20px;
margin-right:  10px;
color: white;
border-radius: 20px;
}
button:hover {
  background: #163f6f;
}
</style>