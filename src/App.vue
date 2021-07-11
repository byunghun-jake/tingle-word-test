<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"

export default {
  name: "App",
  components: { TheHeader },
}
</script>

<style lang="scss">
* {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
