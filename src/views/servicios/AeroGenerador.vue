<template>

<div class="">
  <the-header :completo="false"/>

  <section class="section servicio">

    <div class="section-title">
      <h1>AEROGENERADOR</h1>
      <div class="underline"></div>
    </div>

    <div class="section-center">

      <div class="service-info">


     

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur corrupti voluptatem alias ipsum dignissimos aspernatur ex sit cupiditate, accusamus tempora, rem eum deleniti, facere totam placeat a id quas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur corrupti voluptatem alias ipsum dignissimos aspernatur ex sit cupiditate, accusamus tempora, rem eum deleniti, facere totam placeat a id quas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur corrupti voluptatem alias ipsum dignissimos aspernatur ex sit cupiditate, accusamus tempora, rem eum deleniti, facere totam placeat a id quas.
      </p>

      <div class="service__gallery">
        <div class="img__container">
          <img :src="serviceInfo[0].image" alt="">
        </div>
         <div class="img__container">
          <img :src="serviceInfo[1].image" alt="">
        </div>
         <div class="img__container">
          <img :src="serviceInfo[2].image" alt="">
        </div>
       <!--   <div class="img__container">
          <img src="" alt="">
        </div> -->
      </div>
       </div>
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
  name: 'AeroGenerador',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      serviceInfo: [
        {
          image: require('@/assets/aerogeneradores/aerogenerador1.jpg')
        },
        {
          image: require('@/assets/aerogeneradores/aerogenerador2.jpg')
        },
        {
          image: require('@/assets/aerogeneradores/aerogenerador3.jpg')
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