<template>

<h2>Form</h2>
  <form @submit.prevent = "setPersonaje">
   
    <label>Nombre</label>
    <input v-model="this.nuevoPersonaje.nombre" type="text"/>
     <label>Tipo</label>
     <select v-model="this.nuevoPersonaje.tipo">

      <option value="heroe">Heroe</option>
      <option value="villano">Villano</option>
      <option value="maestro">Maestro</option>
     </select>
   

    <button type="submit">Save</button>
  </form>

</template>


<script>

export default {

  name: "PersonajeFormulario",
  props:{
    personajesExistentes : []
  },
  data() {
    return {
        id : 0,
      nuevoPersonaje: {
        id: 0,
        nombre: "",
        tipo: ""

      },
    }
  },
  methods: {
    async setPersonaje() {


      if(this.id > 0){
        
          const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3002.app.github.dev/personajes/"+this.id, {
        method: "PUT",
        body: JSON.stringify(this.nuevoPersonaje)

      });





      }else{

 this.nuevoPersonaje.id =""+ (this.personajesExistentes.length + 1);

    let perJson =  JSON.stringify(this.nuevoPersonaje);


    console.log(perJson);

      const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3002.app.github.dev/personajes", {
        method: "POST",
        body: JSON.stringify(this.nuevoPersonaje)

      });

      const data = await response.json();
      console.log("Respuesta de setPersonje:" + JSON.stringify(data));

      }
       
    },

 
  },
  mounted(){
    this.id = this.$route.params.id;

  }
  
}
</script>

<style scoped></style>
