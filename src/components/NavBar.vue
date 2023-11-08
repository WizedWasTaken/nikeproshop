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
      <img
        :src="hamburgerIconSrc"
        alt="Open hamburger menu"
        @click="toggleHamburgerMenu"
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
  }
}
</style>
