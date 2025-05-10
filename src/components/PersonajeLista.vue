

<template>
  

 
 <table>

  <tr>
    
    <th>id</th>
    <th>Usuario</th>
    <th>Password</th>
    <th>Rol</th>
    <th>Nombre</th>
   
  </tr>

  <tr v-for="personaje in personajes" :key="personaje.id">

    <td>{{ personaje.id }}</td>
    <td>{{ personaje.usuario }}</td>
    <td>{{ personaje.password }}</td>
    <td>{{ personaje.rol }}</td>
    <td>{{ personaje.nombre }}</td>

    <td><button>Asignar mision</button></td>


  </tr>
 </table>
 
</template>


<script >





export default{

    name: "PersonajeLista",
    data(){
        return{

          personajes :[],
                }
    },
    methods:{
            async getPersonajes(){
                const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/usuarios");
             
                const data = await response.json();
                console.log("USuarios:"+data);
                this.personajes = data;


            }
    },
    mounted(){
      this.getPersonajes();

    }



}
</script>

<style scoped>

</style>
