<template>

    <div class="about-us">

        <div class="section-title">
            <h2>CONOCENOS</h2>
            <div class="underline"></div>
        </div>

        <div class="section-center">

            <div class="about-us__info">

                <article class="info-main">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quam.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam voluptatum quam dolore a sunt distinctio accusamus voluptas? Asperiores non provident deleniti, in repellat iste quis? Voluptatem corporis architecto officia ipsa molestiae nam commodi 
                </p>
                </article>
                 <article class="info-second">
                
                     

                </article>

            </div>

            <div class="about-us__reasons">

            <article class="about-us__reason">
              <!--   <h4>razon</h4> -->
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut hic vitae magni magnam error neque dolores odit, quis iste impedit, earum blanditiis cumque ea incidunt repellat animi? Fugit, fuga?
                </p>
                <span class="number">
                    1
                </span>
            </article>

            <article class="about-us__reason">
              <!--   <h4>razon</h4> -->
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut hic vitae magni magnam error neque dolores odit, quis iste impedit, earum blanditiis cumque ea incidunt repellat animi? Fugit, fuga?
                </p>
                <span class="number">
                    2
                </span>
            </article>

            <article class="about-us__reason">
               <!--  <h4>razon</h4> -->
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut hic vitae magni magnam error neque dolores odit, quis iste impedit, earum blanditiis cumque ea incidunt repellat animi? Fugit, fuga?
                </p>
                <span class="number">
                    3
                </span>
            </article>

             </div>

        </div>

    </div>

</template>

<script>
  export default {
    name: 'TheAboutUs',
    props:{},
    data: () => ({
      model: 0,
      colors: [
        'indigo darken-3',
        'warning',
        'pink darken-3',
        'red lighten-1',
        'deep-purple',
      ],
    }),
  }
</script>

<style scoped>

.about-us {
    margin-top: 7rem;
}


.section-center {
    width: 80vw;
    max-width: 1100px;
    margin: 0 auto;
}

.about-us__info {
    background: linear-gradient( var(--main-color2), rgba(0,0,0, 0.7)), url('../../assets/naturaleza.jpg');
    background-color: linear-gradient();
    padding: 6rem 4rem;
    line-height: 1.8rem;
    color: white;
   /*  font-weight: bold; */
    font-size: 1.3rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
   -webkit-box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
}

.about-us__reason{
    border: 4px dashed var(--main-color3);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
    width: 80%;
    z-index: 0;
    transition: var(--transition);
}

.about-us__reason:hover {
    transform: scale(1.05);
    z-index: 1;
}

.about-us__reason p {
    margin-bottom: 0;
    margin-top: 1rem;
    line-height: 1.4rem;
  /*   background: red; */
}

/* .about-us__reason h4  */

.about-us__reason:nth-child(2n + 1) {
background-color: rgb(239,222,205);
border-top-right-radius: 2rem;
border-bottom-right-radius: 2rem;
margin-left: 2rem;
border-left: none;
border-bottom: none;
}

.about-us__reason:nth-child(2n) {
background-color: var(--main-white2);
border-top-left-radius: 2rem;
border-bottom-left-radius: 2rem;
margin-right: 2rem;
padding-right: 0;
border-right: none;
    border-bottom: none;
}

.number {
    position: absolute;
    top: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    background-color: var(--main-color3);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: var(--main-white);
    font-weight: bold;
}

.about-us__reason:nth-child(2n) .number{
    left: 0;
}

.about-us__reason:nth-child(2n + 1) .number{
    right: 0;
    transform: translate(50%, -50%);
}



@media screen and (min-width: 800px) {
    
    .section-center{
        display: grid;
        grid-template-columns: 1fr 450px;
        gap: 3rem;
    }

}

</style>