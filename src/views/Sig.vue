<template>
  <div v-if="loader">
    <iframe @load="loading" src="mil1/militaire/russe.html" id="frame" frameborder="0"></iframe>
  </div>
  <div v-else >
    <div width="400" height="400" style="background-color: #333;">T</div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
export default{
  setup(){
    const loader = ref(true)

    const loading = (e) => {
      console.log(e)
    }

    return { loader, loading }
  }
}
</script>
