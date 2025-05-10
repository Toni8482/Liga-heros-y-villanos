

<template>
  

 
 <form>

    <label>Usuario</label>
    <input type="text"/>
    <label>Password</label>
    <input type="text"/>
    <label>Rol</label>
    <input type="text"/>
    <label>Nombre</label>
    <input type="text"/>
   
 </form>
 
</template>


<script >





export default{

    name: "PersonajeLista",
    data(){
        return{

          nuevoPersonaje :[{
                id: 0,
                usuario: "",
                password: "",
                rol: "",
                nombre: ""

          }  ],
                }
    },
    methods:{
            async getPersonajes(){
                const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3002.app.github.dev/usuarios");

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
