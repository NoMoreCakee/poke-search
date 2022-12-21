<template>
  <div class="home">
    {{ data }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: undefined
      }
    },
    async mounted() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      this.data = await response.json()
    }
  }
</script>
