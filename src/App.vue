<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

:root {
  --golden: #d0af51;
  --lightgray: #a4a2a2;
  --darkgray: #505050;
  --dark: #181818;
  --black: #000000;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
}
button {
  border: none;
  outline: none;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
