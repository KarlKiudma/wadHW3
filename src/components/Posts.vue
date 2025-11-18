<template>
    <div class="posts">
      <div
        class="post"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="post-header">
          <div class="author-info">
            <img
              class="profile-picture"
              :src="imageUrl(post.profileImage)"
              alt="Profile"
            />
            <p class="author-name">{{ post.author }}</p>
          </div>
          <p class="date">{{ post.date }}</p>
        </div>
  
        <div class="post-content">
  
          <img
            v-if="post.image"
            :src="imageUrl(post.image)"
            class="post-image"
            :alt="post.title"
          />
  
          <h3>{{ post.title }}</h3>
  
          <p>{{ post.text }}</p>
  
          <p class="info">📍 {{ post.location }}</p>
  
        
        <button class="like-button" v-on:click="like(post.id)">Like 👍 {{ post.likes }}</button>
          <strong class="tags">
            <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
          </strong>
  
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
name: "PostList",
data: function() {
return {
}},
computed: {
    posts() {
    return this.$store.getters.allPosts;
    }
},
  
methods: {
    like(id) {
        this.$store.dispatch("IncreaseLikeAct", id);
    },
  
    imageUrl(fileName) {
    try {
        return require(`@/assets/images/${fileName}`);
    } catch (e) {
        console.warn("Missing image:", fileName);
        return "";
    }
    }
}
};
</script>
<style scoped>
.posts {
  max-width: 600px;
  margin: 20px auto;
  padding: 0 15px;
  color: black;
  display: flex;
  flex-direction: column;
}

.post {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.post + .post {
  margin-top: 40px;
  border-top: 2px dashed #aaa;
}

.post ~ .post {
  border-top: 2px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding-top: 20px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-header .author-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.date {
  font-size: 0.9em;
}
.post-content {
  flex-direction: column;
}

.post-content p {
  padding-bottom: 15px;
  margin: 0;
  font-size: 1em;
  line-height: 1.5;
}
.post-content img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
}
.like-button {
    background:  rgb(31, 163, 163);
    border: 0;
    padding: 10px 20px 10px 20px;
    margin-top:  20px;
    margin-bottom:  20px;
    margin-right:  10px;
    color: white;
    border-radius: 20px;
}
.like-button:hover {
  background: #163f6f;
}

.tags {
  display: block;
  font-weight: bold;
  margin-top: 5px;
}
  </style>