<template>
  <section class="container py-10">
    <p>테스트 View</p>
    <router-view :testdetail="testdetail"></router-view>
  </section>
</template>

<script>
import { testdetail } from "@/dummyData/testlist"

export default {
  name: "Test",
  data() {
    return {
      testdetail,
    }
  },
}
</script>

<style></style>
