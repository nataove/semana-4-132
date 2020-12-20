<template>
  <v-data-table
    :headers="headers"
    :items="articulos"
    sort-by="codigo"
    class="elevation-1"
    :loading="tablaCargada"
    loading-text="Cargando... Por favor, espera"
    :footer-props="{
      showFirstLastPage: true,
      'items-per-page-text': 'Artículos por página',
      itemsPerPageOptions: [5, 10, 15, 20],
    }"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>ARTÍCULOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar Artículo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.codigo"
                      label="Código"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      :items="categorias"
                      v-model="categoria"
                      label="Categoría"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción"
                      auto-grow
                      no-resize
                      counter="254"
                    ></v-textarea>
                  </v-col>
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
        @click="seleccionarEstado(item)"
        @change="item.estado"
      ></v-switch>
    </template>
    <template v-slot:item.acciones="{ item }">
      <v-icon large class="mr-2 iconify" @click="editarArticulo(item)">
        mdi-pencil-box
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Código",
        align: "start",
        sortable: true,
        value: "codigo",
      },
      { text: "Artículo", value: "nombre" },
      { text: "Categoría", value: "categoria.nombre" },
      { text: "Descripción", value: "descripcion" },
      { text: "Estado", value: "estado" },

      { text: "", value: "acciones", sortable: false },
    ],
    articulos: [],
    categorias: [],
    categoria: "",
    tablaCargada: true,
    editedIndex: -1,
    editedItem: {
      codigo: "",
      nombre: "",
      descripcion: "",
      estado: 1,
      categoria: {
        id: 0,
        nombre: "",
      },
    },
    defaultItem: {
      codigo: "",
      nombre: "",
      descripcion: "",
      estado: 1,
      categoria: {
        id: 0,
        nombre: "",
      },
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Artículo" : "Editar Artículo";
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
    this.listarCategoria();
    this.listar();
  },
  methods: {
    listar() {
      axios.get("http://localhost:3000/api/articulo/list",
        {
          headers: {
            token: this.$store.state.token,
          },
        })
          .then((response) => {
            this.tablaCargada = false;
            this.articulos = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    listarCategoria() {
      axios.get("http://localhost:3000/api/categoria/list", {
          headers: {
            token: this.$store.state.token,
          },
        })
        .then((response) => {
          this.categorias = response.data;
          this.tablaCargada = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editarArticulo(item) {
      this.editedIndex = item.id;
      this.categoria = item ? item.categoria : "";
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    seleccionarEstado(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    cambiarEstado() {
      if (this.editedItem.estado) {
        //put
        axios
          .put(
            "http://localhost:3000/api/articulo/deactivate",
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.listar();
            return response;
          })
          .catch((error) => {
            return error;
          });
      } else {
        axios
          .put(
            "http://localhost:3000/api/articulo/activate",
            {
              id: this.editedItem.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.listar();
            return response;
          })
          .catch((error) => {
            return error;
          });
      }
      this.listar();
      this.cerrarDialogoEstado();
    },
    cerrar() {
      this.dialog = false;
      this.categoria = "";
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
      if (this.editedIndex > -1) {
        //put
        axios
          .put(
            "http://localhost:3000/api/articulo/update",
            {
              id: this.editedItem.id,
              codigo: this.editedItem.codigo,
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              categoriaId: this.categoria.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.listar();
            return response;
          })
          .catch((error) => {
            return error;
          });
      } else {
        axios
          .post(
            "http://localhost:3000/api/articulo/add",
            {
              codigo: this.editedItem.codigo,
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              categoriaId: this.categoria.id,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            this.listar();
            return response;
          })
          .catch((error) => {
            return error;
          });
      }
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