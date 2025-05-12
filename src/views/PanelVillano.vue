

<template>
  <h1>Villanos</h1>
 
 <PersonajeLista :filtroVillanos = 'villanos'></PersonajeLista>
</template>


<script >
import PersonajeLista from "../components/PersonajeLista.vue";


export default{

    name: "PanelVillano",
    components:{
      PersonajeLista
    },
    data(){
        return{
          villanos : true

        }
    }


}
</script>

<style scoped>

</style>
