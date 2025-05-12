

<template>
  <h1>Heroes</h1>
 <PersonajeLista :filtroHeroes = 'heroes'></PersonajeLista>
 
</template>


<script >

import PersonajeLista from "../components/PersonajeLista.vue";


export default{

    name: "PanelHeroe",
    components: {
      PersonajeLista 
    },
    data(){
        return{

          heroes: true,
        }
    }


}
</script>

<style scoped>

</style>
