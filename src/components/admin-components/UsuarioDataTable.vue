<template>
  <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
    :loading="tablaCargada"
    loading-text="Cargando... Por favor, espera"
    :footer-props="{
      showFirstLastPage: true,
      'items-per-page-text': 'Usuarios por página',
      itemsPerPageOptions: [5, 10, 15, 20],
    }"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>USUARIOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar Usuario
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
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      type="email"
                      v-model="editedItem.email"
                      label="E-mail"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      :items="roles"
                      v-model="editedItem.rol"
                      label="Rol"
                      item-text="nombre"
                      return-object
                    ></v-select>
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
        <v-dialog v-model="dialogoEstado" max-width="500px">
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
      <v-icon large class="mr-2 iconify" @click="editarUsuario(item)">
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
    dialogoEstado: false,
    headers: [
      {
        text: "Usuario",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "E-mail", value: "email" },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "", value: "acciones", sortable: false },
    ],
    usuarios: [],
    roles: ["Administrador", "Vendedor", "Almacenero"],
    rolSeleccionado: "",
    tablaCargada: true,
    editedIndex: -1,
    editedItem: {
      nombre: "",
      email: "",
      rol: "",
      estado: 0,
    },
    defaultItem: {
      nombre: "",
      email: "",
      rol: "",
      estado: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Ingresar Usuario" : "Editar Usuario";
    },
  },
  watch: {
    dialog(val) {
      val || this.cerrar();
    },
    dialogoEstado(val) {
      val || this.cerrarDialogoEstado();
    },
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      axios.get("http://localhost:3000/api/usuario/list" ,{
          headers: {
            token: this.$store.state.token,
          },
        })
          .then((response) => {
            this.tablaCargada = false;
            this.usuarios = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    editarUsuario(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    seleccionarEstado(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogoEstado = true;
    },
    cambiarEstado() {
      console.log("dd " + this.editedItem.estado);
      if (this.editedItem.estado) {
        //put
        axios
          .put(
            "http://localhost:3000/api/usuario/deactivate",
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
            "http://localhost:3000/api/usuario/activate",
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
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    cerrarDialogoEstado() {
      this.dialogoEstado = false;
      this.listar();
    },
    guardar() {
      if (this.editedIndex > -1) {
        //put
        axios
          .put(
            "http://localhost:3000/api/usuario/update",
            {
              id: this.editedItem.id,
              nombre: this.editedItem.nombre,
              email: this.editedItem.email,
              rol: this.editedItem.rol,
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
            "http://localhost:3000/api/usuario/add",
            {
              nombre: this.editedItem.nombre,
              email: this.editedItem.email,
              rol: this.editedItem.rol,
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