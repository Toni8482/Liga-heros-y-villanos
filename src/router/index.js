import { createMemoryHistory, createRouter } from 'vue-router'



import PanelHeroe from '../views/PanelHeroe.vue'
import PanelVillano from '../views/PanelVillano.vue'
import PanelMaestro from '../views/PanelMaestro.vue'
import FormComponent from "../components/PersonajeFormulario.vue";
import MisionesLista from "../components/MisionLista.vue";
import MisionesFormulario from "../components/MisionFormulario.vue";
import UsuariosFormulario from "../components/UsuarioForm.vue";
import LoginView from "../views/Login.vue";


const routes = [
   {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  { path: '/heroes',name: 'Heroes', component: PanelHeroe },
  { path: '/villanos',name: 'Villanos', component: PanelVillano },
  { path: '/maestros',name: 'Maestros', component: PanelMaestro },
  { path: '/form', component: FormComponent },
   { path: '/form:id',name: 'PersonajesEditar', component: FormComponent },

   { path: '/misiones', name: 'MisionesSinId', component: MisionesLista },
  { path: '/misiones/:id', name: 'MisionesLista', component: MisionesLista },
   { path: '/formMision',name: 'MisionesFormulario', component: MisionesFormulario },
   { path: '/formMision:id',name: 'MisionesEditar', component: MisionesFormulario },
   { path: '/formUser',name: 'UsuariosFormulario', component: UsuariosFormulario },
   { path: '/formUser:id',name: 'UsuariosEditar', component: UsuariosFormulario },

]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

