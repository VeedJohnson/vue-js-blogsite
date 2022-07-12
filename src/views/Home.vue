<template>
  <main class="home">
   <div class="blog-card-wrap">
    <div class="container">
      <div v-if="posts.length">
        <article class="blog-card big-blog-card">
          <div class="img-container">
            <img :src="posts[0].image" alt="{{posts[0].title}}">
          </div>
          <div class="blog-info-wrap">
            <div class="blog-info big-blog-info">
              <p class="blog-author">{{posts[0].author}} <span>&#x2022;</span> <span>{{ new Date(posts[0].date).toLocaleString("en-us", { dateStyle: "long" }) }}</span></p>
              <h3 v-html="posts[0].title"></h3>
              <p v-html="posts[0].fullPost.slice(0, 450) + '...'"></p>
            </div>
            <div class="blog-footer">
                <p class="blog-length">{{posts[0].readingTime}}</p>
                <router-link class="read-full" :to="`/posts/${posts[0].id}`">
                    Read Full <span><img aria-hidden="true" :src="Arrow" alt="" ></span>
                </router-link>
            </div>
          </div>
        </article>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in posts.slice(1)" :key="index"/>
        </div>
        <Pagination :pagination="pagination"
            @prev="--postsData.page; getPosts();"
            @next="postsData.page++; getPosts();">
        </Pagination>
      </div>
      <div v-else class="load-info">
        <h5>Fetching Articles . . .</h5>
      </div>
    </div>
   </div>
   <section class="join-section">
      <div class="container">
        <h2 class="join-header">Join our Team of Writers</h2>
        <p>
          On dasdas, writers earn a living doing what they love.<br> 
          Getting started is easy. Just pay a one time $25 fee and everything is ready to go.
        </p>
        <button @click="makePayment" class="join-btn">Join Us</button>
         
      </div>
   </section>
  </main>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import Pagination from "../components/Pagination.vue";
import globalMixin from "../components/globalMixin";

import Arrow from "../assets/Icons/arrow.svg";

export default {
  name: "Home",
  setup() {
    return {
      Arrow
    };
  },
  mixins: [globalMixin],
  components: { BlogCard,
  'Pagination': Pagination
  },
  data() {
      return {
      }
  },
  methods: {
    makePayment() {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-e29d68123d9e1c8de055d1a5e241e056-X",
        tx_ref: "new-sale"+ new Date(),
        amount: 25,
        currency: "USD",
        country: "NG",
        payment_options: "card",
        customer: {
          email: "demoCustomer@email.com",
          phone_number: "+2340000000",
          name: "Demo Customer",
        },
        callback(data) {
          if (data.status === "successful") {
            setTimeout(() => {
              console.log(data);
              }, 3000)
          }
        },
        onclose() {},
        customizations: {
          title: "DasDas",
          description: "Payment for Das Das membership",
        }
  })}},
  created() {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 6rem 0;
}

.load-info {
  text-align: center;
  padding: 20rem 0;
}

@media (min-width: 767px) {
  .big-blog-info h3 {
    margin-top: .5rem;
    margin-bottom: 2rem;
  }
  .big-blog-info p {
    margin-bottom: 2rem;
  }
  .big-blog-card {
    display: flex;
    width: 100%;
    max-width: 100%;
    min-height: 28rem;
    margin-bottom: 5.2rem;

    .img-container {
      width: 40%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .blog-info-wrap {
      width: 60%;
      padding: 1.2rem;
    }
  }
}

.join-section {
  text-align: center;
  padding: 15rem 0;
  h2 {
    font-weight: 500;
  }
  p {
    margin: 2rem 0;
  }
}

.join-btn {
  border: none;
  background: black;
  color: #fff;
  padding: 1rem 5rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 300ms ease-in-out;
  }
}

</style>
