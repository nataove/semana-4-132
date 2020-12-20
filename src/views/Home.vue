<template>

  <div class="home">

     
  
<the-header :completo="true"/>
<div class="home__container">
    <the-carousel/>


<!-- CONOCENOS -->

 <div id="conocenos" class="section-title">
            <h2>CONOCENOS</h2>
            <div class="underline"></div>
        </div>
<div class="section">  
<the-about-us/>
</div>



<the-services/>  




 <div id="testimonios" class="section-title last-title">
            <h2>TESTIMONIOS CASOS DE EXITO</h2>
            <div class="underline"></div>
        </div>

<div class="section">

  <section  id="Testimonios">
   
        <div class="testimonios__container">
        <v-row >
         <v-layout row  class="container">
        
            <v-col col="4"  v-for="(item,index) in casos" :key="index">

                 <casos-exito v-bind:testimonio="item"> </casos-exito>
          
            </v-col> 
            
         </v-layout>
        </v-row>
        </div>
          
      </section>

      </div>

    </div>

    <the-footer/>

 
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/home-components/TheHeader.vue'
import TheCarousel from '@/components/home-components/TheCarousel.vue'
import TheAboutUs from '@/components/home-components/TheAboutUs.vue'
import TheServices from '@/components/home-components/TheServices.vue'
import TheFooter from '@/components/home-components/TheFooter.vue'
import CasosExito from '@/components/home-components/CasosExito.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheCarousel,
    TheAboutUs,
    TheServices,
    TheFooter,
    CasosExito
  },
    data (){return{ 
            
           casos: [
             {
             nombre: 'COMPANY SAS',
             descripcion: 'Nuestra empresa cuenta con varios edificios en donde diarimente se encuentran trabajando más de 2000 personas, las soluciones usando páneles solares para ciertos actividades comunes como el uso de puntos de carga para celulares nos permiten ahorrar e invertir en nuestros empleados y en el crecimiento de le empresa.',
             image: require('@/assets/empresa1.jpg'),
             imagePersona: require('@/assets/persona3.jpg')}, 
             
             {
              nombre: 'PEOPLE SAS',
             descripcion: 'Uno de los objetivos de nuestra empresa es evolucionar concientizándonos de la importancia de los cambios ecológicos que se necesitan en el mundo, por lo cual implementamos HomeBioGas para obtener gas natural que es usado en las preparaciones químicas a partir de los desechos orgánicas, estamos reutilizando!',
             image: require('@/assets/empresa2.png'),
             imagePersona: require('@/assets/persona1.jpg')
             }, 
             {
              nombre: 'FINCA GONZÁLES',
             descripcion: 'Vivir en el campo es más que compartir con la naturaleza, es valorarla y cuidarla, por eso la mejor decisión fue implementar páneles solares en el techo, nuestra casa es autosostenible! Estamos súper agradecidos porque además ahorramos y podemos invertir en más cositas para la finquita. ',
             image: require('@/assets/empresa3.jpg'),
             imagePersona: require('@/assets/persona2.jpg')}
          ]
        
    }}
}
</script>

<style scoped>
  
  .home {
    width: 100vw;
  }

  .section {
    background-color: #ddeeee;
  }


  /* .home__container {
    width: 90%;
    margin: 0 auto;
  } */

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .last-title {
    margin-top: 12rem;
  }

  #Testimonios {
    margin-top: 8rem;
    max-width: 80vw;
    margin-right: auto;
    margin-left: auto;
  }

  .testimonios__container {
    padding: 3rem 2rem;
/* background-color:rgb(239,222,205); */
/* background-color: #ddeeee; */
/* -webkit-box-shadow: 1px 1px 7px 0px rgba(0,0,0,0.74);
-moz-box-shadow: 1px 1px 7px 0px rgba(0,0,0,0.74);
box-shadow: 1px 1px 7px 0px rgba(0,0,0,0.74); */
  }


</style>


