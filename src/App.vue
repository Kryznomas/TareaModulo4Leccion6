<template>
  <div id="app">
    <h1>Ejemplo de Routing</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Router1">Router1</router-link>|
      <router-link to="/Router2">Router2</router-link>|
      <router-link to="/Router3">Router3</router-link>|
      <router-link to="/Router4">Router4</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 1rem;

    &.router-link-exact-active {
      color: $Rojo; 
    }
  }
}
</style>
