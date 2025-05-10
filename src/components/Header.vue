

<template>
  <div>
     <nav>
    <router-link to="./maestros">Maestros</router-link>
    <router-link to="./villanos">Villanos</router-link>
    <router-link to="./heroes">Heroes</router-link>
  </nav>
  </div>
 
</template>


<script >
import { RouterLink } from 'vue-router';


export default{

    name: "HeaderComponent",
    data(){
        return{


        }
    }


}
</script>

<style scoped>

</style>
