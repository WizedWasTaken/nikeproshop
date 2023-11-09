<template>
  <div>
    <nav>
      <router-link to="/">
        <img
          id="nikeLogoNav"
          src="../assets/Nike-logo-clean.png"
          alt="Nike Logo"
        />
      </router-link>
      <div class="anchorLi">
        <router-link to="/">Forside</router-link>
        <router-link to="/history">Historien om nike</router-link>
        <router-link to="/about">Om nike pro shop</router-link>
        <router-link to="/contact">kontakt os</router-link>
      </div>
      <img
        :src="hamburgerIconSrc"
        alt="Open hamburger menu"
        @click="toggleHamburgerMenu"
        id="hamburgerIcon "
      />
    </nav>
    <HamburgerMenu v-if="showHamburgerMenu" @close="toggleHamburgerMenu" />
  </div>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu.vue";

export default {
  data() {
    return {
      showHamburgerMenu: false,
    };
  },
  computed: {
    hamburgerIconSrc() {
      return this.showHamburgerMenu
        ? require("@/assets/times-solid.svg")
        : require("@/assets/bars-solid.svg");
    },
  },
  components: {
    HamburgerMenu,
  },
  methods: {
    toggleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;

      if (this.showHamburgerMenu) {
        document.body.classList.add("disable-scroll");
      } else {
        document.body.classList.remove("disable-scroll");
      }
    },
  },
};
</script>

<style lang="scss">
$background-color: #ffa500;

nav {
  height: calc(7vh - 20px);
  background-color: $background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  #nikeLogoNav {
    width: 100px;
    height: 40px;
  }

  img {
    height: 90%;
    aspect-ratio: 1 / 1;
    display: block;
  }

  .anchorLi {
    display: none;
  }
}

@media screen and (min-width: 923px) {
  nav {
    img {
      &:last-child {
        display: none !important;
      }
    }

    #nikeLogoNav {
      display: block !important;
    }
  }

  .anchorLi {
    display: flex !important;
    margin-left: -100px;
    width: calc(100vw);
    justify-content: center;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
      padding: 0 2rem;
      text-transform: uppercase;
    }
  }
}
</style>
