<template>
  <h1>Maestros</h1>
  <button @click="botonCrearPersona">Crear personaje</button>
  <PersonajeFormulario v-if="vistaForm" :personajesExistentes="personajes" />

  <PersonajeLista @personajes="getPersonajes"></PersonajeLista>

  <button @click="botonMisiones">Crear mision</button>
  <MisionesFormulario v-if="vistaMisiones" :misionesExistentes="misiones" />
  <MisionesLista @misiones = "getMisiones"></MisionesLista>


   <button @click="botonUsuarios">Crear usuario</button>
   <UsuarioForm v-if="vistaUsers" :usuariosExistentes = 'usuarios'></UsuarioForm>
<UsuariosLista @usuarios = 'getUsuarios'></UsuariosLista>

</template>


<script>


import PersonajeFormulario from "../components/PersonajeFormulario.vue";
import PersonajeLista from "../components/PersonajeLista.vue";
import MisionesLista from "../components/MisionLista.vue";
import MisionesFormulario from "../components/MisionFormulario.vue";
import UsuariosLista from "../components/UsuariosLista.vue";
import UsuarioForm from "../components/UsuarioForm.vue";



export default {

  name: "PanelMaestro",
  components: {
    PersonajeLista,
    PersonajeFormulario,
    MisionesLista,
    MisionesFormulario,
    UsuariosLista,
    UsuarioForm
  },
  data() {
    return {
      vistaForm: false,
      vistaMisiones: false,
      vistaUsers : false,
      personajes: [],
      misiones: [],
      usuarios: []
    }
  },
  methods: {
    botonCrearPersona() {
      this.vistaForm = true;
    },
    botonMisiones() {
      this.vistaMisiones = true;
    },
    botonUsuarios(){
      this.vistaUsers = true;
    },
    getPersonajes(personajes) {
      this.personajes = personajes;

    },
    getMisiones(misiones){
      this.misiones = misiones;
    },
    getUsuarios(usuarios){
      this.usuarios = usuarios;
    }


  },
  mounted() {

  
  }



}
</script>

<style scoped>
/* Fondo general */
:host, body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
  color: #f0f0f0;
  min-height: 100vh;
}

/* Título */
h1 {
  text-align: center;
  font-size: 3rem;
  margin-top: 1rem;
  color: #00ffd5;
  text-shadow: 0 0 10px #00ffd5aa;
}

/* Botones */
button {
  display: inline-block;
  margin: 1rem auto;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #0f0f0f;
  background: linear-gradient(145deg, #00ffd5, #00c2ff);
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 255, 213, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0, 255, 213, 0.6);
}

/* Formularios y listas */
PersonajeFormulario,
MisionesFormulario,
UsuarioForm,
PersonajeLista,
MisionesLista,
UsuariosLista {
  display: block;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
