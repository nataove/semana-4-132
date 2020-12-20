<template>

    <div>
        <center class="card">

            <v-card
                max-width="390"
              color="#316060"
              dark
              class="card-side"
            >
              <v-img :src="testimonio.image" v-bind:alt="testimonio.nombre"></v-img>
              <v-card-title  class="headline" >
                <h3>Testimonio de:</h3>
              </v-card-title>
                <v-spacer/>
              <v-card-subtitle><h2  class="font-weight-black" style="color: #00FFFF">{{testimonio.nombre}}</h2></v-card-subtitle>
               <v-spacer/>
              <v-card-text>{{testimonio.descripcion}}</v-card-text>
            </v-card>

               <div class="card-back card-side">
              <img :src="testimonio.imagePersona" alt="">
            </div>

        </center>
     </div>
</template>

<script>
export default {
     name: "CasosExito",
     props: ['testimonio']
}
</script>


<style scoped>



 .card {
   position: relative;
   perspective: 1500px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   position: relative;
 }

  .v-card {
   width: 310px;
   height: 550px;
 }

 .card-back {
   width: 310px;
   height: 550px;
   transform: rotateY(180deg);
   position: absolute;
 }

 .card:hover .v-card {
   transform: rotateY(-180deg);
 }

 .card:hover .card-back {
   transform: rotateY(0);
 }

.card-side {
transition: all 1.4s linear;
  backface-visibility: hidden;
  margin-left: auto; 
  margin-right: auto; 
}

.card-back img {
  height: 100%;
  object-fit: cover;
  filter: grayscale(1.2)
}


</style>