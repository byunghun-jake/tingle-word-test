<template>
  <section class="container py-10">
    <router-view :testdetail="testdetail"></router-view>
  </section>
</template>

<script>
import {testdetail} from "@/dummyData/testlist"

export default {
  name: "Test",
  data() {
    return {
      testdetail,
    }
  }
}
</script>

<style>

</style>