<template>

  <h2>Misiones</h2>


  <table>

    <tr>

      <th>id</th>
      <th>Titulo</th>
      <th>Estado</th>
      <th>Persononaje ID</th>
      <th>Recompensa</th>

    </tr>

    <tr v-for="mision in misiones" :key="mision.id">

      <td>{{ mision.id }}</td>
      <td>{{ mision.titulo }}</td>
      <td>{{ mision.estado }}</td>
      <td>{{ mision.personajeId }}</td>
      <td>{{ mision.recompensa }}</td>

      <td v-if="id > 0"><button @click="asignar(mision)">Asignar</button></td>
      <td v-else>
        <button @click="eliminar(mision.id)">Eliminar</button>
        <button @click="editar(mision.id)">Editar</button>
      </td>



    </tr>
  </table>

</template>


<script>

export default {

  name: "MisionesLista",
  emits: ['misiones'],
  data() {
    return {
      id: 0,
      misiones: []
    }
  },
  methods: {
    async getMisiones() {
      const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones");

      const data = await response.json();
      console.log("Respuesta de getMisiones:" + JSON.stringify(data));
      this.misiones = data;

      this.$emit("misiones", data)
    },



    async asignar(mision) {

      mision.personajeId = this.id;


      const response = fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones/" + mision.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(mision)
      });
      console.log("Asignado!!");

    },
    eliminar(id) {


      const response = fetch("https://supreme-engine-qxqjp5wwvv52x545-3001.app.github.dev/misiones/" + id, {
        method: "DELETE",
      });

    },
    editar(id) {
      this.$router.push({ name: 'MisionesEditar', params:{id }});



    }

  },

  mounted() {
    this.id = this.$route.params.id;

    console.log("Id:" + this.id);
    this.getMisiones();
  }

}
</script>
<style scoped>
/* Título */
h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #00ffd5;
  text-shadow: 0 0 5px #00ffd5aa;
  margin-bottom: 1rem;
}

/* Tabla */
table {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

/* Encabezados */
th {
  background-color: #00ffd522;
  color: #00ffd5;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #00ffd544;
}

/* Filas */
td {
  padding: 10px 12px;
  border-bottom: 1px solid #00ffd511;
  color: #737373;
}

/* Última celda (botones) */
td:last-child {
  display: flex;
  gap: 10px;
}

/* Botones */
button {
  background: linear-gradient(145deg, #00ffd5, #00c2ff);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 255, 213, 0.4);
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 12px rgba(0, 255, 213, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  table {
    font-size: 0.9rem;
  }

  td:last-child {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>
