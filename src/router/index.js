import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
    meta: {
      auth: true,
      roles: ['Administrador', 'Almacenero', 'Vendedor']
    },
    children: [
      {
        path: '/admin/categorias',
        name: 'categorias',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categorias" */ '../views/admin/Categorias.vue'),
        meta: {
          auth: true,
          roles: ['Administrador', 'Almacenero']
        }
      },
      {
        path: '/admin/articulos',
        name: 'articulos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "articulos" */ '../views/admin/Articulos.vue'),
        meta: {
          auth: true,
          roles: ['Administrador', 'Almacenero']
        }
      },
      {
        path: '/admin/usuarios',
        name: 'usuarios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usuarios" */ '../views/admin/Usuarios.vue'),
        meta: {
          auth: true,
          roles: ['Administrador']
        }
      },
      {
        path: '/admin/ventas',
        name: 'ventas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "ventas" */ '../views/admin/Ventas.vue'),
        meta: {
          auth: true,
          roles: ['Administrador', 'Vendedor']
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/servicio/2',
    name: 'aerogenerador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aerogenerador" */ '../views/servicios/AeroGenerador.vue'),
  },
  {
    path: '/servicio/1',
    name: 'panelsolar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "panelsolar" */ '../views/servicios/PanelSolar.vue'),
  },
  {
    path: '/servicio/3',
    name: 'plantabiogas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "plantabiogas" */ '../views/servicios/PlantaBiogas.vue'),
  }
]

const router = new VueRouter({
  
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next();
  }
  else if (to.matched.some(record => record.meta.auth)) {
    if (store.state.token != null) {
      if (to.meta.roles.includes(store.state.usuario.rol)) {
        next();
      }
      else {
        next()
      }
    }
    else {
      next()
    }
  }
  else {
    next({
      name: 'Login'
    });
  }
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.pageTitle || 'Portafolio de Servicios';
  });
});

export default router
