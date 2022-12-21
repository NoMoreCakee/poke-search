<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    <h2>{{ pokemon.description }}</h2>
  </div>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>

<style>

</style>