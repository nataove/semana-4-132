<template>

  <div class="servicio">

    

 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

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


</style>