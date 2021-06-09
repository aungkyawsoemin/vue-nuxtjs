<template>
  <div class="container-fluid">
    <div class="box" style="padding-top: 50px; margin-top: 50px">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="First Name"
            v-model="form.firstName"
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Last Name"
            v-model="form.lastName"
          />
        </div>
      </div>

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

      <a @click="submit()" class="button is-primary is-fullwidth"
        >Register</a
      >
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapState("auth", {
      auth: (state) => state.auth,
    }),
  },
  mounted() {
    console.log(this.auth);
    console.log(this.$store.state.auth);
  },
  methods: {
    ...mapActions({
      postRegister: "auth/postRegister",
    }),
    async submit() {
      const response = await this.postRegister(this.form);

      if (response !== undefined && response.status === 1) {
        this.$router.push("/login");
      }
    },
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