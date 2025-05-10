import { createMemoryHistory, createRouter } from 'vue-router'



import PanelHeroe from '../views/PanelHeroe.vue'
import PanelVillano from '../views/PanelVillano.vue'
import PanelMaestro from '../views/PanelMaestro.vue'


const routes = [
  { path: '/heroes', component: PanelHeroe },
  { path: '/villanos', component: PanelVillano },
  { path: '/maestros', component: PanelMaestro },
  
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

