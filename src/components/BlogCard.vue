<template>
    <article class="blog-card">
        <div class="img-container">
            <img :src="post.image" alt="{{post.title}}">
        </div>
        <div class="blog-info">
            <p class="blog-author">{{post.author}} <span>&#x2022;</span> <span>{{ new Date(post.date).toLocaleString("en-us", { dateStyle: "long" }) }}</span></p>
            <h3 v-html="post.title"></h3>
            <p v-html="post.shortPost + '...'"></p>
        </div>
        <div class="blog-footer">
            <p class="blog-length">{{post.readingTime}}</p>
            <router-link class="read-full" :to="{ name: 'Blog', params: { id: this.post.id } }">
                Read Full <span><img aria-hidden="true" :src="Arrow" alt="" ></span>
            </router-link>
        </div>
    </article>
</template>

<script>
import Arrow from "../assets/Icons/arrow.svg";
// import axios from 'axios';

export default {
    name: "BlogCard",
    props: ["post"],
    setup() {
      return {
        Arrow
      };
    },
}
</script>

<style lang="scss" scoped>
.img-container {
  max-width: 33rem;
  height: 20rem;
  background-color: #e7e5e5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}
</style>