<template>
  <section class="container py-6">
    <h1 class="text-2xl font-bold mb-4">메인 페이지</h1>
    <div class="grid gap-4">
      <TestItem v-for="test in testlist" :key="test.id" :test="test" />
    </div>
  </section>
</template>

<script>
import TestItem from "@/components/TestItem"
import {testlist} from "@/dummyData/testlist"

export default {
  name: 'Home',
  components: {
    TestItem,
  },
  data() {
    return {
      testlist,
    }
  }
}
</script>
