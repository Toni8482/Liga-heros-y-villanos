<template>

    <h2>Form</h2>
    <form @submit.prevent="setMision">

        <label>Titulo</label>
        <input v-model="this.nuevaMision.titulo" type="text" />
        <label>Estado</label>
        <input v-model="this.nuevaMision.estado" type="text" />
        <label>Personaje Id</label>
        <input v-model="this.nuevaMision.personajeId" type="text" />
        <label>Recompensa</label>
        <input v-model="this.nuevaMision.recompensa" type="text" />


        <button type="submit">Save</button>
    </form>

</template>


<script>

export default {

    name: "MisionFormulario",
    props: {
        misionesExistentes: []
    },
    data() {
        return {
            id: 0,
            nuevaMision: {
                id: "0",
                titulo: "",
                estado: "",
                personajeId: "",
                recompensa: ""

            },
        }
    },
    methods: {
    async setMision() {
    // Si la misión tiene un id mayor que 0, actualizamos
    if (this.nuevaMision.id > 0) {
        console.log("Editando misión con id:", this.nuevaMision.id);
        
        const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones/" + this.nuevaMision.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.nuevaMision) // Usamos el objeto misión convertido a JSON
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
        this.nuevaMision.id = "" + (this.misionesExistentes.length + 1); // Generamos un id basado en la longitud de misionesExistentes

        console.log("Creando misión nueva:", JSON.stringify(this.nuevaMision));

        const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.nuevaMision) // Enviamos el objeto misión convertido a JSON
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            const data = await response.json();
            console.log("Misión creada con éxito:", JSON.stringify(data));
        } else {
            console.error("Error al crear la misión:", response.statusText);
        }
    }
},

        async getMision() {


            const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones/" + this.id);
            const data = await response.json();
            this.nuevaMision = data;

        }


    },
    mounted() {
        this.id = this.$route.params.id;
        this.getMision()
    }

}
</script>

<style scoped></style>
