<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gestión</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      icon
      class="mr-5"
      @click="salir()"> 
      <v-icon>mdi-logout</v-icon>
      <span>Salir</span>
      </v-btn>
    </v-app-bar>

   <v-navigation-drawer v-model="drawer" absolute temporary width="300">
      
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="nombreUsuario"> </v-list-item-title>
            <v-list-item-subtitle v-text="rolUsuario"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list nav>
        <v-list-item-group
          color="primary"
        >
        <v-list-item :to="{name: 'Home'}" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

        <v-list-group prepend-icon="mdi-card-text" no-action v-if="this.$store.state.usuario.rol ==='Administrador' || this.$store.state.usuario.rol ==='Almacenero'">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Gestión de Servicios</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item :to="{name: 'categorias'}"
            >
              <v-list-item-content>
                <v-list-item-title>Categorías</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{name: 'articulos'}">
            <v-list-item-content>
              <v-list-item-title>Artículos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-account-circle" no-action v-if="this.$store.state.usuario.rol ==='Administrador'">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Gestión de Acceso</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item :to="{name: 'usuarios'}">
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group></v-list-item-group>
        <v-list-item :to="{name: 'Ventas'}" exact v-if="this.$store.state.usuario.rol ==='Administrador' || this.$store.state.usuario.rol ==='Vendedor'">
            <v-list-item-icon>
              <v-icon>mdi-sale</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ventas</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <v-container>
          <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    create(){
        this.$store.dispatch('autoLogin');
    },
   computed: {
  nombreUsuario: {
    get () {
      return this.$store.state.usuario.nombre
    },
  },
  rolUsuario: {
    get () {
      return this.$store.state.usuario.rol
    },
  }
},
    methods:{
      salir(){
        this.$store.dispatch('salir');
      }
    }
  }
</script>