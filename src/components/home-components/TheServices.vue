<template>

    <section id="servicios" class="services">

  <div class="section-title">
            <h2>SERVICIOS</h2>
            <div class="underline"></div>
        </div>


        <div class="section__center">

              <v-card
    class="mx-auto"
    v-for="(service, i) in services" :key="i"
  >
    <v-img :src="require(`../../assets/${service.imagen}`)"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ service.nombre.toUpperCase() }}
    </v-card-title>
    
        <v-card-text>
          {{ service.descripcion }}
        </v-card-text>
        <v-card-actions>
      <v-btn
        color="#458787"
        text
        :to="'servicio/' + (i + 1) "
      >
        Conocer más...
      </v-btn>

      <v-spacer></v-spacer>


    </v-card-actions>

  </v-card>
    </div>
    </section>

</template>

<script>

  import axios from 'axios';

  export default {
    name: 'TheServices',
    props:{},
    data: () => ({
      services: []
    }),
      methods: {
    listServices() {
      axios
        .get("http://localhost:3000/api/articulo/list-all")
        .then((response) => {

          this.services = response.data;
          console.log(this.services);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
    mounted(){
        this.listServices();
    },
  }
</script>

<style scoped>

.services {
    margin-top: 10rem;
}

.section__center {
    background: rgb(2,0,36);
background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(29,57,57,0.8631827731092436) 35%, rgba(82,161,161,1) 100%);
    width: 80vw;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    -webkit-box-shadow: 0px 3px 11px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 11px 3px rgba(0,0,0,0.75);
box-shadow: 0px 3px 11px 3px rgba(0,0,0,0.75);
}


.v-card {
    margin:0 auto;
    margin-bottom: 2rem;
    background: red;
    width: 300px;
    transition: var(--transition);
}

.v-card:hover {
    transform: scale(1.07);
}


@media screen and (min-width: 800px) {
    
    .section__center {
    
}

}

</style>