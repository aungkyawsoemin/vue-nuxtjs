<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
      >
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </router-link>
      <router-link
        to="/cart"
        class="navbar-item"
        style="
          right: 55px;
          position: absolute;
          padding-top: 14px;
        "
      >
        <i class="gg-shopping-bag" style="--ggs: 1.2"></i>
      </router-link>
      <router-link
        to="/login"
        class="navbar-item"
        style="
          right: 0px;
          position: absolute;
          padding-top: 13px;
          padding-bottom: 15px;
        "
      >
        <i class="gg-profile"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "top-nav",
  data() {
    return {
      activeRoute: this.$route,
    };
  },
  mounted() {
    this.activeRoute = this.$route;
  },
  watch: {
    $route(to, from) {
      this.activeRoute = to;
    },
  },
};
</script>

<style scoped>
.gg-menu-grid-r,
.gg-profile,
.gg-close-r,
.gg-chevron-left {
  --ggs: 1.25;
}
</style>
