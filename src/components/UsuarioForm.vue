<template>

    <h2>Form</h2>
    <form @submit.prevent="setUsuario">

        <label>Titulo</label>
        <input v-model="nuevoUsuario.usuario" type="text" />
        <label>Email</label>
        <input v-model="nuevoUsuario.email" type="text" />

        <label>Estado</label>
        <input v-model="nuevoUsuario.password" type="text" />
        <label>Personaje Id</label>
        <input v-model="nuevoUsuario.rol" type="text" />
        <label>Recompensa</label>
        <input v-model="nuevoUsuario.nombre" type="text" />


        <button type="submit">Save</button>
     
    </form>

</template>


<script>

export default {

    name: "UsuariosFormulario",
    props: {
        usuariosExistentes: Array
    },
    data() {
        return {
            id: 0,
            nuevoUsuario: {
                id: "0",
                usuario: "",
                email: "",
                password: "",
                rol: "",
                nombre: ""

            },
    }
      
    },
    methods: {
    async setUsuario() {
    // Si la misión tiene un id mayor que 0, actualizamos
    if (this.nuevoUsuario.id > 0) {
        console.log("Editando misión con id:", this.nuevoUsuario.id);
        
        const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/users/" + this.nuevoUsuario.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.nuevoUsuario) // Usamos el objeto misión convertido a JSON
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();
            console.log("Misión editada con éxito:", JSON.stringify(data));
        } else {
            console.error("Error al editar la misión:", response.statusText);
        }
    } else {
        // Si la misión no tiene id (es una misión nueva), creamos una nueva misión
        this.nuevoUsuario.id = "" + (this.usuariosExistentes.length + 1); // Generamos un id basado en la longitud de misionesExistentes

        console.log("Creando misión nueva:", JSON.stringify(this.nuevoUsuario));

        const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.nuevoUsuario) // Enviamos el objeto misión convertido a JSON
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();
            console.log("Usuario creada con éxito:", JSON.stringify(data));
        } else {
            console.error("Error al crear el usuario:", response.statusText);
        }
    }
},

        async getUsuario() {


            const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/users/" + this.id);
            const data = await response.json();
            this.nuevoUsuario = data;

        }


    },
    mounted() {
        this.id = this.$route.params.id;
        this.getUsuario()
    }

}
</script>

<style scoped></style>
