<template>
  <div class='login'>
    <form class='login__form' action=''>
      <p><div class='login__form-title'>Login</div></p>
      <p><input class='login__form-input' type='text' placeholder='username'></p>
      <p><input class='login__form-input' type='password' placeholder='password'></p>
      <button class='login__form-submit' type='submit'>Login</button>
    </form>

    <div v-for="(auth, key) in auth">
      <div>username: {{ auth.username }}</div>
      <div>userpass: {{ auth.userpass }}</div>
    </div>

    <div class="container">
      <h1>Please login to see the secret content</h1>
      <form v-if="!$store.state.authUser" @submit.prevent="login">
        <p class="error" v-if="formError">{{ formError }}</p>
        <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
        <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
        <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
        <button type="submit">Login</button>
        <button @click="logout">Logout</button>
      </form>
      <div v-else>
        Hello {{ $store.state.authUser.username }}!
        <pre>I am the secret content, I am shown only when the use is connected.</pre>
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout">Logout</button>
      </div>
      <p><nuxt-link to="/admin">Super secret page</nuxt-link></p>
    </div>

  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  head: {
    title: 'login',
    meta: [
      { name: 'description', content: 'login page description' }
    ]
  },
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  async asyncData() {
    const { data } = await axios.get('auth.json')
    return {
      auth: data
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.formUsername,
        password: this.formPassword
      })
      .then(() => {
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      })
      .catch((e) => {
        this.formError = 'Bad credentials'
      })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss">
.login {

  &__form {
    max-width: 300px;
    margin: 0 auto 3em;

    &-title {
    }

    &-input {
      width: 100%;
    }

    &-submit {
    }
  }
}
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
