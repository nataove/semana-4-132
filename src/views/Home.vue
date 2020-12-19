<template>

  <div class="home">

     

   <!--  <div class="home__container"> -->
  
  
<the-header/>
<div class="home__container">
    <the-carousel/>

<the-about-us/>

<the-services/>


  <section  id="Testimonios">
    <div class="section-title">
            <h2>TESTIMONIOS CASOS DE EXITO</h2>
            <div class="underline"></div>
        </div>
        <v-row >
         <v-layout row justify-space-between>
        
            <v-col col="4" offset="1"  v-for="(item,index) in casos" :key="index">
                 <casos-exito v-bind:testimonio="item"> </casos-exito>
            </v-col> 
            
         </v-layout>
        </v-row>
          
      </section>

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
             image: require('@/assets/empresa1.jpg')}, 
             {
              nombre: 'PEOPLE SAS',
             descripcion: 'Uno de los objetivos de nuestra empresa es evolucionar concientizándonos de la importancia de los cambios ecológicos que se necesitan en el mundo, por lo cual implementamos HomeBioGas para obtener gas natural que es usado en las preparaciones químicas a partir de los desechos orgánicas, estamos reutilizando!',
             image: require('@/assets/empresa2.png')}, 
             {
              nombre: 'FINCA GONZÁLES',
             descripcion: 'Vivir en el campo es más que compartir con la naturaleza, es valorarla y cuidarla, por eso la mejor decisión fue implementar páneles solares en el techo, nuestra casa es autosostenible! Estamos súper agradecidos porque además ahorramos y podemos invertir en más cositas para la finquita. ',
             image: require('@/assets/empresa3.jpg')}
          ]
        
    }}
}
</script>

<style scoped>
  
  .home {
    width: 100vw;
  }

  .home__container {
    width: 90%;
    margin: 0 auto;
  }

  #Testimonios {
    margin-top: 8rem;
  }

</style>>


