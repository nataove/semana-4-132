<template>

    <div class="about-us">

        <div class="section-center">

            <div class="about-us__info">

                <article class="info-main">
                <p>
                    Bienvenidos a BIOENERGY, somos una empresa dedicada al diseño y contrucción de soluciones eficientes basadas en el ambito de las energias renovables. Si tu fabrica o empresa necesita reducir costes sin ver afectado el rendimiento en la producción de sus productos es ahí cuando las energias renovables aparacen, cada vez son más las empresas que optan por respetar el medio ambiente y se dan cuenta que los grandes beneficios que trae unirse a esta ola de energía verde.  
                </p>
                </article>
            </div>

            <div class="about-us__reasons">

            <article class="about-us__reason">
              <!--   <h4>razon</h4> -->
                <p>
                    Transformamos el suministro energético impulsando la transición energética y ecológica
                </p>
                <span class="number">
                    1
                </span>
            </article>

            <article class="about-us__reason">
              <!--   <h4>razon</h4> -->
                <p>
                    Reparación y suministro de pequeños y grandes componentes, logística de repuestos y servicio de broker de aerogeneradores.
                </p>
                <span class="number">
                    2
                </span>
            </article>

            <article class="about-us__reason">
               <!--  <h4>razon</h4> -->
                <p>
                    Auditorías energéticas de acuerdo a RD 56/2016. Mejora de la eficiencia energética y uso racional de la energía orientado a cualquier tipo de actividad.
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
    margin-top: 1rem;
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
    line-height: 1.9rem;
    color: white;
   /*  font-weight: bold; */
    font-size: 1.3rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
   -webkit-box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    text-align: center;
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
    font-size: 1.3rem;
    text-align: center;
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
background-color: var(--main-white);
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