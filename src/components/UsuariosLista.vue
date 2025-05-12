

<template>
  
<h2>Usuarios</h2>
 
 <table>

  <tr>
    <th>id</th>
    <th>Usuario</th>
    <th>Email</th>
    <th>Password</th>
    <th>Rol</th>
    <th>Nombre</th>
  </tr>
 
  <tr v-for="usuario in usuarios" :key="usuario.id">

    <td>{{ usuario.id }}</td>
    <td>{{ usuario.usuario }}</td>
    <td>{{ usuario.email }}</td>
    <td>{{ usuario.password }}</td>
    <td>{{ usuario.rol }}</td>
    <td>{{ usuario.nombre }}</td>
    <td>
        <button @click="eliminar(usuario.id)">Eliminar</button>
        <button @click="editar(usuario.id)">Editar</button>
    </td>

  </tr>
 </table>
 
</template>

<script>

export default{

    name: "UsuariosLista",
    emits: ['usuarios'],
    data(){
        return{

          usuarios :[],
                }
    },
    methods:{
            async getUsuarios(){
                const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/users");
             
                const data = await response.json();
                console.log("Usuarios:"+data);
                this.usuarios = data;

              this.$emit('usuarios', data);
            },
           
           async eliminar(id){
                  const response = await fetch("https://supreme-engine-qxqjp5wwvv52x545-3003.app.github.dev/users/"+id,
                    {
                      method:"DELETE"
                    }
                  );

                  console.log("Eliminado, con id: "+id);

            },
            editar(id){

              this.$router.push({name: 'UsuariosEditar', params: {id}});
            }
    },
    mounted(){
      this.getUsuarios();

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
  color: #142d29;
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
