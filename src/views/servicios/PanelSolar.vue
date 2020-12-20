<template>

<div class="">
  <the-header :completo="false"/>

  <section class="section servicio">

    <div class="section-title">
      <h1>Paneles Solares</h1>
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
        <h3>Beneficios Energia Solar</h3>
        <ul>
            <li>
 <strong>Ahorro económico:</strong> <p> La producción de energía a partir del sol supone un ahorro económico importante, ya que es una fuente inagotable de energía que no está sujeta a las fluctuaciones del mercado. Aunque requiere un desembolso inicial importante, este se ve compensado por una rápida amortización de la inversión.</p>
            </li>
            <li>
<strong>Competitividad:</strong> <p>Ser responsableamigable con el medio ambiente, innovador y sostenible son características que contribuyen a que su empresa cuente con una buena reputación y, por lo tanto, que su negocio sea más competitivo.</p> 
            </li>
            <li>
               <strong>Venta del excedente:</strong> <p> La nueva resolución 030 de la CREG (Comisión de Regulación de Energía y Gas) le permite vender el excedente de energía que genera con sus paneles solares a las comercializadoras.</p>
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
  name: 'PanelSolar',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
     serviceInfo:'Las fábricas requieren una enorme cantidad de electricidad para hacer funcionar sus equipos, sistemas HVAC e iluminación industrial.Los sistemas fotovoltaicos además de ahorrar dinero también satisfacen sus necesidades energéticas. Los sistemas fotovoltaicos tienen como objetivo reducir las emisiones de CO2. Se instala un sistema fotovoltaico solar conectado a la red en los tejados del edificio de la fábrica. Toda la energía generada se consumirá dentro del complejo de la fábrica. ',
      serviceImages: [
        {
          image: require('@/assets/paneles-solares/panel-solar1.jpg')
        },
        {
          image: require('@/assets/paneles-solares/panel-solar2.jpg')
        },
        {
          image: require('@/assets/paneles-solares/panel-solar3.jpg')
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
    }


    .service__gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: .5rem;
    }

    .img__container:nth-of-type(1) {
      background-color: red;
      grid-row: 1 / -1;

    }

    .img__container:nth-of-type(2) {
      background-color:green;
      grid-column: 2 / -1;
    }


.img__container:nth-of-type(3) {
      background-color: black;
      grid-row: 2 / -1;
      grid-column: 2 / -1;
    }

    img {
      height: 100%;
    }

    .servicio__beneficios {
        margin-top: 5rem;
    }

    .servicio__beneficios h3 {
        font-weight: bold;
        font-size: 2.5rem;
        color: var(--main-color-oscuro4);
    }

    strong {
        font-size: 1.6rem;
    }

     .servicio__beneficios ul {
            background-color: rgb(239,222,205);
            padding: 1rem 3rem;
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
    }

      .servicio__beneficios p {
          margin-top: 3rem;
          line-height: 2rem;
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