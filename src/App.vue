<template>
  <Sidenav/>
  <router-view id="wrap"/>
</template>

<script>
import Sidenav from "@/components/Sidenav";
export default {
  components: { Sidenav }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
