<template>
  <div class='login'>
    <form class='login__form' action=''>
      <div class='login__form-title'>Login</div>
      <input class='login__form-input' type='email' placeholder='email'>
      <input class='login__form-input' type='password' placeholder='password'>
      <input class='login__form-submit' type='submit' value='Login'>
    </form>
  </div>
</template>

<script>
import axios from '~plugins/axios'

export default {
  head: {
    title: 'login',
    meta: [
      { name: 'description', content: 'login page description' }
    ]
  }
}
</script>

<style lang="scss">
.login {

  &__form {
    max-width: 300px;
    margin: 0 auto;

    &-title {
    }

    &-input {
      width: 100%;
    }

    &-submit {
    }
  }
}
</style>
