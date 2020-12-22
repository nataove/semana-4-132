<template>

<div class="">
  <the-header :completo="false"/>

  <section class="section servicio">

    <div class="section-title">
      <h1>Planta Biogas</h1>
      <div class="underline"></div>
    </div>

    <div class="section-center">

      <div class="service-info">

      <p>{{serviceInfo }}</p>

      <div class="service__gallery">
        <div class="img__container">
          <img :src="serviceImages[0].image" alt="">
        </div>
         <div class="img__container">
          <img :src="serviceImages[1].image" alt="">
        </div>
         <div class="img__container">
          <img :src="serviceImages[2].image" alt="">
        </div>
       <!--   <div class="img__container">
          <img src="" alt="">
        </div> -->
      </div>

       </div>
    </div>

     <div class="servicio__beneficios">
        <h3>Beneficios</h3>
        <ul>
            <li>
 <strong>Renovable:</strong> 
 <p> 
     Podemos considerar al biogás como una energía renovable ya que se aprovechan los residuos que se generan en el día a día de cualquier actividad, tanto en nuestra vida doméstica, como en las granjas de animales, como en la agricultura.
 </p>
            </li>
            <li>
<strong>Aprovechamiento de residuos:</strong> <p> Debemos tener en cuenta que se aprovechan lo que hasta hace poco tiempo se consideraban desechos, y se les da un valor económico como materia prima para generación de un bien económicamente rentable como es el biogás.</p> 
            </li>
            <li>
               <strong>Sustituto de gasolina y diésel:</strong> <p> El biogás podría conseguir sustituir a los combustibles derivados del petróleo que, además de tener un precio muy elevado, perjudican notablemente la naturaleza. También puede sustituir al GLP que es el gas de cocina, también muy contaminante..</p>
            </li>
        </ul>
    </div>
  </section>

  <the-footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/home-components/TheHeader'
import TheFooter from '@/components/home-components/TheFooter'

export default {
  name: 'PlantaBiogas',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
     serviceInfo: `Las plantas que producen el BIOGAS son instalaciones diseñadas para recibir los residuos y restos orgánicos para un tratamiento que desemboque en la producción de energía y enmiendas orgánicas.El gas forma parte de las energías renovables y, entre sus ventajas, destacan el beneficio económico en la venta y ahorro de energía eléctrica y calor, la disminución de residuos orgánicos potencialmente contaminantes, la reducción de malos olores o de los peligros que suponen las aguas orgánicas o las industriales respecto a la contaminación de los acuíferos.`,
      serviceImages: [
        {
          image: require('@/assets/planta-biogas/biogas1.jpg')
        },
        {
          image: require('@/assets/planta-biogas/biogas2.jpg')
        },
        {
          image: require('@/assets/planta-biogas/biogas3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>

    .servicio {
      margin-top: 6rem
    }

    .section-center {
      background-color: var(--main-white2);
    }

  .service-info {
      padding-top: 3rem;
        padding-bottom: 3rem;
  }

    .service-info p {
      line-height: 2rem;
      width: 80%;
      text-align: center;
      font-weight: bold;
      font-size: 1.2rem;
    }


    .service__gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: .5rem;
    }

    .img__container:nth-of-type(1) {
      grid-row: 1 / -1;

    }

    .img__container:nth-of-type(2) {
      grid-column: 2 / -1;
    }


.img__container:nth-of-type(3) {
      grid-row: 2 / -1;
      grid-column: 2 / -1;
    }

    img {
      height: 100%;
      object-fit: cover;
    }

    .servicio__beneficios {
        margin-top: 5rem;
    }

    .servicio__beneficios h3 {
        font-weight: bold;
        font-size: 2.5rem;
        margin: 0 auto;
        color: var(--main-color-oscuro4);
        width: 60vw;
    }

    .servicio__beneficios h3::after {
        content: '';
        width: 100px;
        height: 5px;
        display: block;
        background: var(--main-color4);
    }

    strong {
        font-size: 1.6rem;
    }

     .servicio__beneficios ul {
            background-color: rgb(239,222,205);
            padding: 2rem 3rem;
        margin-top: 3rem;
        margin-right: auto;
        margin-left: auto;
        width: 60vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

       .servicio__beneficios li {
           margin-top: 3rem;
          margin-bottom: 4rem;
    }

      .servicio__beneficios p {
          margin-top: 3rem;
          line-height: 2rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 90%;
          padding: 1rem 2rem;
         background:  var(--main-white3);
         font-size: 1.2rem;
    }

    strong {
        text-transform: uppercase;

    }


    @media screen and (min-width: 800px) {
      
      .service-info {
        width: 85vw;
        max-width: 1150px;
        margin: 0 auto ;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      
      }

    }

</style>