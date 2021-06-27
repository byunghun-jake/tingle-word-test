<template>
  <div id="app">
    <TheNav />
    <router-view/>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav"

export default {
  name: "App",
  components: {TheNav}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
