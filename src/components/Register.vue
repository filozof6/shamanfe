<template>
  <section class="well">
    <form id="register-form" role="form" @submit.prevent="register">
      <div class="form-group">
        <input
          type="text"
          v-model="name"
          id="name"
          tabindex="1"
          class="form-control"
          placeholder="Username"
          value
          required
          autofocus
        >
      </div>
      <div class="form-group">
        <input
          type="email"
          v-model="email"
          id="email"
          tabindex="1"
          class="form-control"
          placeholder="Email Address"
          value
          required
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          id="password"
          tabindex="2"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="confirm_password"
          id="confirm-password"
          tabindex="2"
          class="form-control"
          placeholder="Confirm Password"
          required
        >
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <input
              type="submit"
              name="register-submit"
              id="register-submit"
              tabindex="4"
              class="form-control btn btn-register"
              value="Register Now"
            >
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      is_admin: null
    };
  },
  register: function() {
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
          is_admin: this.is_admin
    };
    this.$store
      .dispatch("register", data)
      .then(() => this.$router.push("/"))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
