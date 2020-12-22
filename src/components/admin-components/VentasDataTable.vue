<template>
  <v-data-table
    :headers="headers"
    :items="ventas"
    sort-by="ID"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      'items-per-page-text': 'Ventas por página',
      itemsPerPageOptions: [5, 10, 15, 20],
    }"
  >
  <template slot="no-data">
   <v-alert :value="true" color="#72A4A4">
     No existen datos.
   </v-alert>
 </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>VENTAS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar Ventas
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      label="Descripción"
                      auto-grow
                      no-resize
                      counter="254"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cerrar">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="guardar">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >¿Desea cambiar el estado?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cerrarDialogoEstado"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="cambiarEstado"
                >Aceptar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.estado="{ item }">
      <v-switch
        v-model="item.estado"
        readonly
        color="#72A4A4"
        @change="item.estado"
      ></v-switch>
    </template>
    <template v-slot:item.acciones="{ item }">
      <v-icon large class="mr-2 iconify" @click="editarCategoria(item)">
        mdi-pencil-box
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>


export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Descripción", value: "descripcion" },
      { text: "", value: "acciones", sortable: false },
    ],
    ventas: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      descripcion: "",
      estado: 0,
    },
    defaultItem: {
      nombre: "",
      descripcion: "",
      estado: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Venta" : "Editar Venta";
    },
  },
  watch: {
    dialog(val) {
      val || this.cerrar();
    },
    dialogDelete(val) {
      val || this.cerrarDialogoEstado();
    },
  },
  created() {
   
  },
  methods: {

    editarCategoria(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    seleccionarEstado(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    cambiarEstado() {
      this.listar();
      this.cerrarDialogoEstado();
    },
    cerrar() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    cerrarDialogoEstado() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    guardar() {
   
      this.cerrar();
    },
  },
};
</script>

<style scoped>
.iconify {
  color: rgb(232, 192, 62);
}
</style>