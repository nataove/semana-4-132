<template>
  <div class="home">

    <the-header/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/home-components/TheHeader.vue'

export default {
  name: 'Home',
  components: {
    TheHeader
  }
}
</script>
