<template>
  <div class="app-wrapper">
    <div class="app">
      <!-- <Home /> -->
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
// import Home from "./views/Home.vue";
export default {
  name: "app",
  components: { Navigation },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  scroll-behavior: smooth;
  color: #2C2C2C;
}

.container {
  width: 88%;
  max-width: 1440px;
  margin: 0 auto;
}

li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: inherit;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  display: inline-block;
}

.link-light {
  color: #fff;
}

.blog-cards {
    display: grid;
    gap: 5.2rem;
    grid-template-columns: 1fr;
    @media (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1310px) {
      grid-template-columns: repeat(3, 35rem);
      justify-content: space-between;
    }
  }

.blog-card {
  position: relative;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    padding: .8rem;
    max-width: 35rem;
    margin: 0 auto;
    &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.blog-info {
  padding-bottom: 4rem;
  padding-top: 2rem;

  h3 {
    font-size: 2.2rem;
  }
}
.blog-footer {
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;

  img {
    position: relative;
    top: .5rem;
  }
}
p.blog-author {
  color: #4B4B4B;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0 !important;
  span {
    color: #6E6E6E;
  }
}
// img {
//   width: 100%;
// }
p {
  color: #6E6E6E;

}

.read-full {
  color: #1473E6;
  margin-top: -.5rem;
}

</style>
