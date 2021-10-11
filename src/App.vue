<template>
  <div id="app">
      <Header></Header>
      <div class="container">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

import Header from "./components/Header/Header";
export default {
  name: 'App',
    components: {Header},
}
</script>

<style>
* {
    color: #F9F9F9;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.container {
    margin: 0 20%;
}

#app {

  font-family: "Roboto Light" ,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background-color: #034C8C;
}
</style>
