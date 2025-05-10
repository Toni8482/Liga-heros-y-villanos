

<template>
 <h1>Maestros</h1>
  <button>Crear personaje</button>
  <PersonajeLista></PersonajeLista>
 
</template>


<script >


import PersonajeLista from "../components/PersonajeLista.vue";



export default{

    name: "PanelMaestro",
    components:{
      PersonajeLista
    },
    data(){
        return{

       
                }
    },
    methods:{
          
    },
    mounted(){
   

    }



}
</script>

<style scoped>

</style>
