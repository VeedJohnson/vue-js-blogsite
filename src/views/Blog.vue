<template>
  <div class="blog-wrapper">
    <div v-if="loading" class="loader"></div>
    <div class="container">
        <article>
            <div class="blog-note">
                <p><span>By {{post.author}}</span> <span>{{ new Date(post.date).toLocaleString("en-us", { dateStyle: "long" }) }}</span></p>
            </div>
            <h2 v-html="post.title"></h2>
            <div class="blog-content" v-html="post.fullPost">
            </div>
        </article>

        <section class="other-articles">
            <h3 class="title">More Articles</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in posts.slice(0,3)" :key="index"/>
            </div>
        </section>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import globalMixin from "../components/globalMixin";
import BlogCard from '../components/BlogCard.vue';

export default {
    name: "Blog",
    components: { BlogCard,
  },
    mixins: [globalMixin],
    props: {
        id: String,
    },
    data() {
        return {
            post: {},
            loading: false
        }
    },
    mounted () {
        this.getPost(this.id); 
    },
    methods: {
        async getPost(id) {
            this.loading = true
            try {
                const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?include[]=${id}`)
                const postExtract = response.data.map(({
                                        id,
                                        date,
                                        title,
                                        excerpt,
                                        content,
                                        parsely,
                                        }) => ({
                                        id,
                                        date,
                                        title: title.rendered,
                                        shortPost: `${excerpt.rendered.replace('<p>',"").slice(0, 100).trim()}`,
                                        fullPost: content.rendered,
                                        image: parsely.meta.image.url,
                                        author: parsely.meta.author[0].name
                                        }))
                this.post = postExtract[0];
                this.loading = false;
            } catch (error){
                        console.log(error);
                        this.loading = false;
                }
        }
    }
}
</script>

<style lang="scss">
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
  margin: 5rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
    article {
        max-width: 71rem;
        margin: 5rem auto 0 auto;

        p {
            margin-bottom: 3rem;
        }
        h2 {
            font-size: 3rem;
            margin: 1rem 0 2rem 0;
        }
        .blog-note > p {
            margin-bottom: 0;
        }
    }
    .blog-content .wp-caption {
        text-align: center;
        margin: 0 auto;
        @media(max-width: 766px) {
            width: 80% !important;
            img {
                width: 100% !important;
                height: auto;
                object-fit: cover;
            }
        }
    }

    .other-articles {
        padding: 2rem 0 10rem 0;
        .title {
                font-size: 2.4rem;
                margin-top: 7rem;
                margin-bottom: 2rem;
            }
    } 
</style>