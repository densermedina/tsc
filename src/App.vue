<template>
  <div id="app">
    <div id="contenedor">
      <h1>Tu Celular Seguro</h1>
      <router-link to="/" class="item">Home</router-link> 
      <router-link to="/part" class="item">Repuestos</router-link> 
      <router-link to="/repair" class="item">Reparacion</router-link> 
      <router-link to="/client" class="item">Clientes</router-link> 
      <router-link to="/sale" class="item">Ventas</router-link> 
      <router-link to="/buy" class="item">Compras</router-link>
      <router-link to="/technical" class="item">Tecnicos</router-link>
      <router-link to="/report" class="item">Reportes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#contenedor {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  border: solid 1px black;
  float: left;
}


.item{
  /* background: #343a40; */
  margin: 10% 0;
}

#contenedor a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  text-align: left;

}

#contenedor a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

.head{
    border: solid 1px black;
    width: 72%;
    float: left;
}

</style>
