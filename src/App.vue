<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style>
#app {
  font-family: "Museo Sans Cyrl", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1920px;
  margin: 0 auto;
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

body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}

@font-face {
  font-family: "Bebas Neue";
  src: url("./assets/fonts/BebasNeueBold.woff2") format("woff2"),
    url("./assets/fonts/BebasNeueBold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("./assets/fonts/MuseoSansCyrl-700.woff2") format("woff2"),
    url("./assets/fonts/MuseoSansCyrl-700.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("./assets/fonts/MuseoSansCyrl-300.woff2") format("woff2"),
    url("./assets/fonts/MuseoSansCyrl-300.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
</style>
