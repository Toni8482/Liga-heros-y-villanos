<template>
    <h1>Login</h1>
    <form @submit.prevent="getDatosForm">
        <label>Usuario</label>
        <input type="text" v-model="login.usuario" />
        <label>Password</label>
        <input type="text" v-model="login.password" />
        <button type="submit">Entrar</button>
    </form>
</template>


<script>
import { authService } from '../services/auth.js';


export default {

    name: "LoginView",
    components: {

    },
    data() {
        return {
            login: {
                usuario: "",
                password: ""
            },
            usuarios: []

        }
    },
    methods: {
        async getUsuarios() {
            const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/usuarios");

            const data = await response.json();
            console.log("Usuarios:" + data);
            this.usuarios = data;


        },
        getDatosForm() {

            this.usuarios.forEach(usuario => {
                if (usuario.usuario == this.login.usuario && usuario.password == this.login.password) {

                    console.log("correcto");


                    localStorage.setItem("usuario", usuario.usuario);         // guarda el rol
                    localStorage.setItem("rol", usuario.rol);
                    localStorage.setItem("nombre", usuario.nombre);

                    this.$router.push({ name: 'Maestros' })
                }
            });

        },

         async login() {
        try {
          const token = await authService.login(this.username, this.password);
          console.log('Token obtenido:', token);
          // Redirigir a la página después del inicio de sesión
          this.$router.push('/');
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
        }
      },
      anarRegistrar(){
        this.$router.push('/');
      }
   
    },
    mounted() {
        this.getUsuarios();
    }
}
</script>

<style scoped></style>
