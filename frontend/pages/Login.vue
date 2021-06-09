<template>
  <div class="container-fluid">
    <div class="box" style="padding-top: 50px; margin-top: 50px">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
      </div>

      <a @click="postLogin(form)" class="button is-primary is-fullwidth"
        >Login</a
      >
      <hr />
    </div>

    <div class="box">
      Don't have an account yet?
      <router-link to="/register">Sign up</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapState("auth", {
      auth: (state) => state.auth,
    }),
  },
  watch: {
    auth(newValue) {
      if(newValue === true) this.$router.push("/account");
    }
  },
  mounted() {
    this.$store.commit('auth/CLEAR_AUTH')
  },
  methods: {
    ...mapActions({
      postLogin: "auth/postLogin",
    })
  },
};
</script>

<style scoped>
.container-fluid {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 50px;
}
.container-fluid .logo {
  margin: 0 auto;
  display: block;
  margin-bottom: 2em;
}
</style>