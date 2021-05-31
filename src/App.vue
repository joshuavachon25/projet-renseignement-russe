<template>
  <div id="nav">
    <router-link :to="{name: 'Accueil'}"><img class="icon" src="@/assets/home.svg"/><span class="titrebtn">Accueil</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/globe.svg"/><span class="titrebtn">SIG</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/marker.svg"/><span class="titrebtn">Storymaps 1</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/trajet.svg"/><span class="titrebtn">Storymaps 2</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/reseau.svg"/><span class="titrebtn">Asie</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/livre.svg"/><span class="titrebtn">Bagdadbahn</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/info.svg"/><span class="titrebtn">Information</span></router-link>
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
