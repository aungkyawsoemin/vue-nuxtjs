<template>
  <div class="container">
    <div class="card-header-title" @click="$router.push({ name: 'Profile' })">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              style="border-radius: 50%"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ user.firstName }} {{ user.lastName }}</p>
          <p class="subtitle is-6">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <div class="card-content" style="padding: 0.75rem">
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <router-link to="/search"> My Vouchers </router-link>
          </li>

          <li>
            <a @click="logout()"> Logout </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState('auth', {
      user: (state) => state.user,
    })
  },
  mounted() {
    this.checkToken()
  },
  methods: {
    ...mapActions({
      checkToken: 'auth/checkToken',
    }),
    logout() {
      this.$store.commit("auth/CLEAR_AUTH");
      this.$router.push('/');
    },
  },
};
</script>