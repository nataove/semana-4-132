<template>
  <v-footer
    dark
    color="#101f1f"
    padless

  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          href="https://github.com/nataove/semana-4-132.git"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 footer__text">

        <div class="">
          <h3>Contacto e-mail:</h3>
          <p>prueba@gmail.com</p>
          <p>prueba2@hotmail.com</p>
        </div>

        <div class="">
          <h3>Ciudades:</h3>
          <p>Cartagena</p>
          <p>Bogotá</p>
           <p>Cali</p>
          <p>Medellín</p>
        </div>

        <div class="">
          <h3>Teléfonos:</h3>
          <p>3105846205</p>
          <p>+57 65 985 652 12</p>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Grupo 132</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-github',
      ],
    }),
  }
</script>


<style scoped>


  .v-footer {
    margin-top: 12rem;
  }

  .footer__text {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

.v-card{
  min-width: 100vw;
}

h3 {
  margin-bottom: 1rem;
}

p{
  margin-bottom: .5rem;
}
</style>