<template>
  <section class="container py-10">
    <TestInfo v-if="mode === 'info'" @startTest="startTest" :testdetail="testdetail" />
    <TestPage v-else-if="mode === 'test'" :test="currentTest" @submitAnswer="submitAnswer" />
  </section>
</template>

<script>
import {testdetail} from "@/dummyData/testlist"
import TestInfo from "@/components/TestInfo.vue"
import TestPage from "@/components/TestPage.vue"

export default {
  name: "TestDetail",
  components: {
    TestInfo,
    TestPage,
  },
  data() {
    return {
      testdetail,
      mode: "info",
      testIndex: 0,
    }
  },
  methods: {
    startTest() {
      // Setup Test
      this.testdetail.tests.forEach(test => {
        test.type = Math.floor(Math.random() * 2) + 1
      })
      // ChangeMode
      this.mode = "test"
    },
    submitAnswer(answer) {
      if (this.isLastIndex) {
        alert("마지막 문제입니다.")
        // 답안지 제출
      } else {
        // 답 저장
        this.testdetail.tests[this.testIndex].answer = answer
        this.testIndex++;
      }
    }
  },
  computed: {
    currentTest() {
      return this.testdetail.tests[this.testIndex]
    },
    isLastIndex() {
      return this.testIndex === this.testdetail.word_count - 1
    }
  }
}
</script>

<style>

</style>