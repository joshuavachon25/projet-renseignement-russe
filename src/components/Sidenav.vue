<template>
  <div id="nav">
    <router-link :to="{name: 'Accueil'}"><img class="icon" src="@/assets/home.svg"/><span class="titrebtn">Accueil</span></router-link>
    <router-link :to="{name: 'Sig'}"><img class="icon" src="@/assets/globe.svg"/><span class="titrebtn">SIG</span></router-link>
    <router-link :to="{name: 'Question'}"><img class="icon" src="@/assets/marker.svg"/><span class="titrebtn">Question d'orient</span></router-link>
    <router-link :to="{name: 'Petersbourg'}"><img class="icon" src="@/assets/trajet.svg"/><span class="titrebtn">Saint-Petersbourg à Calcutta</span></router-link>
    <router-link :to="{name: 'Ressources'}"><img class="icon" src="@/assets/livre.svg"/><span class="titrebtn">Ressources additionnelles</span></router-link>
    <router-link :to="{name: 'Apropos'}"><img class="icon" src="@/assets/info.svg"/><span class="titrebtn">À propos</span></router-link>
  </div>
</template>
