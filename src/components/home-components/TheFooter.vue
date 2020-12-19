<template>
  <footer class="footer">
    <div class="footer__info">

      <div class="footer__item">
        <h3>Contactenos</h3>
        <ul>
          <li>safsafasdfsdfasdf</li>
          <li>gdsadfgsagsd</li>
          <li>wrewrewrerere</li>
        </ul>
      </div>

      <div class="footer__item">
        <h3>Ciudades</h3>
        <ul>
          <li>Cali</li>
          <li>Bogotá</li>
          <li>Cartagena</li>
          <li>Medellín</li>
        </ul>
      </div>
      <div class="footer__item">
        <h3>GitHub Repository</h3>
        https://github.com/nataove/semana-4-132.git
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "TheAboutUs",
  props: {},
  data: () => ({
    model: 0,
    colors: [
      "indigo darken-3",
      "warning",
      "pink darken-3",
      "red lighten-1",
      "deep-purple",
    ],
  }),
};
</script>

<style scoped>
.footer {
  margin-top: 13rem;
  height: 250px;
  width: 100vw;
  background-color: var(--main-color-oscuro6);
  color: white;
  padding: 2rem 0;
}

.footer__info{
  width: 90%;
  margin: 0 auto;
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center
  ;
}

.footer__item{
  display: flex;
  flex-direction: column;
  width: 150px;
}

h3 {
  color: rgb(255,213,154);
  margin: 1.7rem;
}

ul li {
  padding-bottom: 1rem;
   text-align: left;
}

</style>
