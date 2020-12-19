<template>
    <div>
        <center>
            <v-card
                max-width="390"
              color="#385F73"
              dark
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

        </center>
     </div>
     
    
</template>

<script>
export default {
     name: "CasosExito",
     props: ['testimonio'],
}
</script>