<template>

  <div class="login__outside">

  <div class="login__container">
    <form action="#" class="login">
    <div class="login__avatar">

    </div>
     <!--  <div class="login__fields"> -->
       <div v-if="!loginSucceded" class="login__error">usuario y/o password incorrectos</div>
        <div class="login__field">
          <label for="user" class="login__label">correo</label>
          <input type="email" id="user" class="login__input" v-model="login.user" />
        </div>
        <div class="login__field">
          <label for="" class="login__label">password</label>
          <input type="password" id="password" class="login__input" v-model="login.password"/>
        </div>
        <button type="submit" class="login__button" @click.prevent="loginUser">Ingresar</button>
  <!--     </div> -->
    </form>
  </div>

  </div>
</template>

<script>

  /* import axios from 'axios'; */

export default {
  name: 'TheLogin',
  data() {
    return {
      login: {
        user: '',
        password: ''
      },
      loginSucceded: true
    }
  },
  methods: {
    async loginUser() {
      this.$router.push('/admin');
  /*     axios
      .post('http://localhost:3000/api/auth/signin', 
      { email: this.login.user,
        password: this.login.password 
      })
      .then(response => {
        console.log(response.data);
        let token = response.data.accessToken;
        localStorage.setItem('jwt', token);
        this.$router.push('/home');
      })
      .catch(err => {
        console.log(err);
        this.loginSucceded = false;
        setTimeout(() => {
          this.loginSucceded = true;
        }, 5000);
      }); */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.login__outside {
 /*  background: #D0D0D0; */
  height: 500px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

    .login__container {
        width: 30vw;
        max-width: 600px;
        min-width: 370px;
        height: 35vh;
        min-height: 300px;
        background-color: #FFFAFA;
     -webkit-box-shadow: 0px 2px 19px 6px rgba(0,0,0,0.83);
-moz-box-shadow: 0px 2px 19px 6px rgba(0,0,0,0.83);
box-shadow: 0px 2px 19px 6px rgba(0,0,0,0.83);
padding: 5rem 1rem 1rem;
position: relative;
    }

    .login {
        /* background-color: red; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
    }

    .login__avatar {
        height: 90px;
        width: 90px;
      /*   background: olive; */
        border-radius: 50%;
        border: 4px solid #B8B8B8;
        position: absolute;
        top: -15%;
        background-image: url('../assets/perfil.jpg');
        background-size: contain;
    }

    .login__field {
        display: flex;
        flex-direction: column;
        /* background: rebeccapurple; */
        margin-bottom: 1.2rem;
        width: 80%;
    }

    .login__label {
        align-self: flex-start;
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 900;
        letter-spacing: .08rem;
        color: f;
    }

    .login__input {
        background: none;
        border: none;
        border-bottom: 1px solid var(--main-color);
        color: var(--main-color);
        height: 1.5rem;
        outline: none;
        font-size: .9rem;
    }

    .login__button {
        padding: .7rem 1.5rem;
        border: transparent;
        margin-top: .5rem;
        background-color: var(--main-color); 
        color: var(--main-white);
        font-size: 1.2rem;
        letter-spacing: .1rem;
        font-weight: bold;
        transition: background-color .2s ease-in-out;
        border-radius: 3px;
    }

    .login__button:hover {
        color: var(--main-white);
        background-color:#3b7575;
        cursor: pointer;
      /*   border: 1px solid var(--main-blue); */
    }

    .login__error {
      width: 100%;
      color: red;
      margin-bottom: 1rem;
      text-align: left;
      padding-left: 2rem;
   /*    display: none; */
    }

</style>






