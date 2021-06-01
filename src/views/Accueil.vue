<template>

  <div class="home grid-container">
    <router-link :to="{name: 'Sig'}" class="f1"><div><span class="type">Carte interactive</span><span class="titre">Renseignement militaire russe au XIX<sup>e</sup> siècle</span> </div></router-link>
    <router-link :to="{name: 'Question'}" class="f2"><div><span class="type">Carte narrative</span><span class="titre">La Question d'Orient</span></div></router-link>
    <router-link :to="{name: 'Petersbourg'}" class="f3"><div><span class="type">Carte narrative</span><span class="titre">Voyage de Saint-Pétersbourg à Calcutta</span></div></router-link>
    <router-link :to="{name: 'Ressources'}" class="f4"><div><span class="titre">Ressources additionnelles</span></div></router-link>
    <router-link :to="{name: 'Apropos'}" class="f5"><div><span class="titre">À propos</span></div></router-link>
  </div>
</template>

<script>

export default {
  name: 'Accueil',
  components: {}
}
</script>
