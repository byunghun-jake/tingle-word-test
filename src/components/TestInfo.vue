<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold mb-6">{{ testdetail.title }}</h1>
    <section
      class="bg-gradient-to-r from-gray-50 to-gray-100 p-10 rounded-lg mb-10"
    >
      <h2 class="text-xl font-semibold mb-4">마지막 점검!</h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="table__head">영어 단어</th>
            <th class="table__head">한글 뜻</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="test in testdetail.tests" :key="test.id">
            <td class="table__cell">{{ test.en_word }}</td>
            <td class="table__cell">{{ test.ko_word }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2 class="text-xl font-semibold mb-4">시험 준비가 끝났나요?</h2>
      <form class="flex items-center" @submit.prevent="startTest">
        <input
          v-model.trim="testerName"
          class="inline-block mr-4 border border-gray-400 px-4 py-2 rounded"
          placeholder="이름"
          type="text"
        />
        <button
          class="py-2 px-4 border border-green-500 rounded-full font-medium"
        >
          시험보기
        </button>
      </form>
    </section>
    <hr class="my-10" />
    <section>
      <h2 class="text-xl font-semibold mb-4">시험 결과</h2>
      <ul>
        <li v-for="testResult in testResults" :key="testResult.id">
          <router-link
            :to="{ name: 'TestResult', params: { resultId: testResult.id } }"
            class="bg-gradient-to-r from-green-50 to-green-200 p-4 w-full flex items-center justify-between"
          >
            <p>{{ testResult.testerName }}</p>
            <p>{{ testResult.score }}점</p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { testResults } from "@/dummyData/testResults.json"

export default {
  name: "TestInfo",
  props: ["testdetail"],
  data() {
    return {
      testerName: "",
      testResults: [],
    }
  },
  computed: {},
  methods: {
    startTest() {
      if (this.testerName === "") {
        return
      }
      this.$store.dispatch("setTesterName", this.testerName)
      this.$emit("startTest")
    },
  },
  beforeMount() {
    console.log(this.$store.getters.testerName)
    this.testerName = this.$store.getters.testerName || ""
    this.testResults = testResults
  },
}
</script>

<style lang="scss" scoped>
.table__head {
  @apply px-4 py-2;
}
.table__cell {
  @apply border border-gray-500 px-4 py-2 font-medium text-gray-900;
}
</style>
