<template>
  <div class="header">
    <nav class="menu">
      <div class="menu__center">
        <div class="menu__header">
          <img src="@/assets/logo.png" width="50px" class="menu__logo" alt="logo" />
          <button class="menu__btn" id="menu-btn" @click="showSidemenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul class="menu__links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#conocenos">Conocenos</a>
          </li>
          <li>
            <a href="#servicios">servicios</a>
          </li>
          <li>
            <a href="#testimonios">Testimonios</a>
          </li>
           <li class="menu__login">
             <router-link to="login">
               <a>login</a>
             </router-link>
          </li>
        </ul>
      </div>
    </nav>

<!-- MENU PANTALL PEQUEÑA -->
    <aside class="sidemenu" id="sidemenu">
        <div class="">
            <button class="close-btn" id="close-btn" @click="hideSidemenu">
                X
            </button>
                <ul class="sidemenu__links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">section 2</a>
          </li>
          <li>
            <a href="">section 3</a>
          </li>
          <li>
            <a href="">section 4</a>
          </li>
           <li>
            <a href="">login</a>
          </li>
        </ul>
        </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {},
  methods: {
      onResize(){
  if (window.pageYOffset > 80) {
        document.querySelector('.menu').classList.add('menu-fixed');
    } else {
        document.querySelector('.menu').classList.remove('menu-fixed');
    }
    if (document.documentElement.clientWidth > 760) {
    document.getElementById('sidemenu').classList.remove('show-sidemenu');
  }
      },
      showSidemenu: () => {
          document.getElementById('sidemenu').classList.add('show-sidemenu');
      },

      hideSidemenu: () => {
          document.getElementById('sidemenu').classList.remove('show-sidemenu');
      }
  },
  mounted() {
  window.addEventListener('resize', this.onResize)
},

beforeDestroy() {

  window.removeEventListener('resize', this.onResize)
}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .menu__links {
        display: none;
    }

    .menu {
        height: 6rem;
        padding: 1rem;
        background: var(--main-white2);
        display: grid;
        align-items: center;
        transition: var(--transition);
    }

    .menu__center {
        width: 90%;
        max-width: 1150px;
        margin: 0 auto;
        /* background-color: green; */
    }

    .menu__header {
      /*   background: rebeccapurple; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .menu__btn {
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        justify-self: end;
        height: 2rem;
        border: none;
    }

    .menu__btn span {
      width: 30px;
      border: 2px solid var(--main-color2);
      margin: .2rem;
      display: block;
    }


    @media screen and (min-width: 800px) {
        
        .menu {
            background-color: var(--main-color-oscuro6);
        }

        .menu__btn {
            display: none;
        }

        .menu__links {
            display: grid;
            grid-template-columns: repeat(4, 1fr) 100px;
            justify-items: center;
            align-items: center;
            gap: 2rem;
            justify-self: end;
            padding: 1rem 0;
        }

        .menu__links a {
            text-transform: capitalize;
            color:var(--main-grey3);
            font-weight: bold;
            letter-spacing: var(--letter-spacing);
            transition: var(--transition);
        }

        .menu__links a:hover {
          color: white;
        } 

        .menu__center {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
        }
        .menu__login {
           margin-left: 4rem;
          background-color: var(--main-grey3);
          padding: .5rem 2rem;
       /*    color: var(--main-color-oscuro4); */
          border-radius: 2px;
        }

        .menu__login a {
          color: var(--main-color-oscuro4);
       
        }
    }

    .sidemenu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 600px;
        height: 100%;
        background: var(--main-grey2);
        z-index: 4;
        display: grid;
        /* place-items: center; */
        justify-content: center;
        transition: var(--transition);

        transform: translateX(-100%);
    }

    .sidemenu__links {
        text-align: center;
        margin: 6rem;
    }

    .show-sidemenu {
        transform: translateX(0);
    }

    .sidemenu__links a {
        font-size: 2rem;
        text-transform: capitalize;
        transition: var(--transition);
        letter-spacing: var(--spacing);
        display: inline-block;
        margin-bottom: 1.5rem;
        color: var(--main-color-oscuro6);

    }

    .sidemenu__links a:hover {
        
    }

    .close-btn {
        background: transparent;
        border: none;
        color: brown;
        font-size: 3rem;
        position: absolute;
        top: 1rem;
        right: 2rem;
        transition: var(--transition);
        cursor: pointer;
    }

    .close-btn:hover {
        color: #e66b6e;
    }

    .menu-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        /* background-color: ; */
        box-shadow: var(--light-shadow);
    }

</style>
