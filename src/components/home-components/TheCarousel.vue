<template>

    <v-app>
        <v-carousel v-model="model">
    <v-carousel-item
      v-for="(item, i) in imagenes"
      :key="i"
      :src="item.imagen"
    >
    </v-carousel-item>
  </v-carousel>
  </v-app>

</template>

<script>
  export default {
    name: 'TheCarousel',
    props:{},
    show: false,
    data: () => ({
      model: 0,
      imagenes: [
        {
          imagen: require('@/assets/energia-solar.jpg')
        },
        {
          imagen: 'https://www.enelgreenpower.com/content/dam/enel-egp/immagini/learning-hub/energia-eolica/pagine-di-dettaglio/Article-Media-parco.eolico.jpg'
        },
    {
      imagen: 'https://albarenova.com/wp-content/uploads/2018/06/paneles-molinos.jpg'
    }
      ],
    }),
  }
</script>

<style scoped>

.v-carousel {
    /* width: 400px; */
    /* margin: 110px auto; */
}

</style>