<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
     <v-list flat>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          :to="{name: item.ruta}"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
      <!--   <v-row> -->
          <router-view />
      <!--     <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template> -->
       <!--  </v-row> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      selectedItem: 1,
      items: [
        { text: 'Categorías', icon: 'mdi-clock', ruta: 'categorias' },
        { text: 'Artículos', icon: 'mdi-account', ruta: 'articulos' },
        { text: 'Usuarios', icon: 'mdi-account', ruta: 'usuarios' },
      ],
    }),
  }
</script>