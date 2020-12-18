<template>
    
    <div id="login">
        <TheLogin/>
    </div>

</template>

<script>
// @ is an alias to /src
import TheLogin from '@/components/TheLogin.vue'

export default {
  name: 'Login',
  components: {
    TheLogin
  }
}
</script>

<style scoped>
 #login {
        width: 80vw;
        min-height: 100vh;
        margin: 0 auto;
 /*        background-color: #1A5276 ; */
     /*    background-color: #E4F1F1; */
    /*  background-color:  #F5F5F5; */
    background-color: #458787;
             display: flex;
        justify-content: center;
        align-items: center;
    }

    
</style>>