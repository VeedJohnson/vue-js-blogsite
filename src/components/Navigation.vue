<template>
  <header>
    <nav class="container">
      <div class="brand">
        <router-link class="header" :to="{ name: 'Home' }">
          <img src="../assets/Dasdas-Logo.png" alt="DasDas"/>
        </router-link>
        <p class="menu-btn" @click="toggleMobileNav">
          <span className="menu-btn_burger"  ref="toggleButton"></span>
        </p>
      </div>
      <ul class="nav-menu" ref="mobileNav">
          <li class="nav-menu_link link" aria-label="twitter">
            <a href=""><img :src="twitter" alt="twitter"></a>
          </li>
          <li class="nav-menu_link link" aria-label="dribbble">
            <a href=""><img :src="dribbble" alt="dribbble"></a>
          </li>
          <li class="nav-menu_link link" aria-label="figma">
            <a href=""><img :src="figma" alt="figma"></a>
          </li>
          <li class="nav-menu_link link" aria-label="github">
            <a href=""><img :src="github" alt="github"></a>
          </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import twitter from "../assets/Icons/twitter.svg";
import dribbble from "../assets/Icons/dribbble.svg";
import figma from "../assets/Icons/figma.svg";
import github from "../assets/Icons/github.svg";
export default {
    name:  "Navigation",
    setup() {
      return {
        twitter,
        dribbble,
        figma,
        github,
      };
    },
    components: {
    },
    data() {
      return {
      
      }
    },
    methods : {
      toggleMobileNav () {
        this.$refs.mobileNav.classList.toggle('open');
        this.$refs.toggleButton.classList.toggle('open');
      }
    },
};
</script>

<style lang="scss" scoped>
//   nav styling for mobile

nav.container {
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
}
.nav-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 25rem;
    right: 0;
    display: grid;
    padding: 17rem 0;
    justify-content: center;
    transform: translateX(150vw);
    transition: all 0.5s ease-in-out;
    z-index: 100;
    background: rgb(255, 255, 255);

    @media (min-width: 767px) {
      position: unset;
      grid-template-columns: repeat(4, 1fr);
      width: unset;
      padding: unset;
      align-items: center;
      column-gap: 2.5rem;
      transform: translateX(0);
    }
}

.header {
    width: 80px;
    position: relative;
    z-index: 101;

    img {
        -o-object-fit: cover;
           object-fit: cover;
        width: 100%;
    }
}

.brand {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.326);
    @media(min-width: 767px) {
      border-bottom: none;
    }
}
.menu-btn {
    color: #000;
    position: relative;
    z-index: 101;
    height: 20px;
    width: 28px;
    top: 2.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    span {
        
            position: absolute;
            right: 0;
            top: 1.7rem;
            width: 24px;
            height: 3px;
            background: #000;
            transition: all 0.5s ease-in-out;        
    }

    span::before {
        content: "";
        position: absolute;
        top: -8px;
        width: 24px;
        height: 3px;
        background: #000;
        transition: all 0.5s ease-in-out;
    }

    span::after {
        content: "";
        position: absolute;
        top: 8px;
        width: 24px;
        height: 3px;
        background:  #000;
        transition: all 0.5s ease-in-out;
    }

    @media (min-width: 767px) {
      display: none;
    }
  }
  
  .menu-btn_burger.open {
    transform: rotate(360deg);
    background: transparent;
  }
  
  .menu-btn_burger.open::before {
    transform: rotate(45deg) translate(5px, 8px);
  }
  
  .menu-btn_burger.open::after {
    transform: rotate(-44deg) translate(3px, -6px);
  }

  .nav-menu.open {
  transform: translateX(0);
  }

  .nav-menu_link a img:hover {
    transform: scale(1.2);
    transition: 300ms ease-in;
  }

</style>