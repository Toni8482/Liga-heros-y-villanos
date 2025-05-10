<template>
 <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
</template>


<script >
import { RouterView } from 'vue-router';
import HeaderComponent from './components/Header.vue'

export default {

  name: "AppComponent",
  components: {
    HeaderComponent
  },
  data() {
    return {



    }
  },

}
</script>

<style scoped></style>
