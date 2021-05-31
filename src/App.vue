<template>
  <div id="nav">
    <router-link :to="{name: 'Accueil'}"><span class="material-icons">home</span><span class="titrebtn">Accueil</span></router-link>
    <router-link :to="{name: 'Sig'}"><span class="material-icons">map</span><span class="titrebtn">SIG</span></router-link>
  </div>
  <router-view id="wrap"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
