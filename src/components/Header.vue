

<template>
  <div>
     <nav>
    <router-link :to="{ name: 'Maestros' }">Maestros</router-link>
    <router-link :to="{ name: 'Heroes'}">Heroes</router-link>
    <router-link :to="{ name: 'Villanos'}">Villanos</router-link>


     <span class="usuario">Bienvenido, {{ usuario }}</span>


  </nav>
  </div>
 
</template>


<script >



export default{

    name: "HeaderComponent",
    data(){
        return{
          usuario: ""

        }
    },
    mounted(){
      this.usuario =  localStorage.getItem("usuario");

    }


}
</script>
<style scoped>
div {
  background-color: #1a1a1a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0, 255, 170, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: #00ffd5;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(145deg, #222, #111);
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 255, 213, 0.3);
}

a:hover {
  background: #00ffd5;
  color: #000;
  transform: scale(1.05);
  box-shadow: 0 0 10px #00ffd5;
}
.usuario {
  margin-left: auto;
  padding: 10px;
  color: #00ffd5;
  font-weight: bold;
}
</style>
