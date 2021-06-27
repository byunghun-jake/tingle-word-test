<template>
  <header>
    <nav class="nav">
      <router-link :to="{name: 'Home'}">Home</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNav"
}
</script>

<style lang="scss" scoped>
  .nav {
    @apply bg-gray-400 p-4;
  }
</style>