<template>
  <div class="container py-10">
    <h1 class="">{{ testResult.testerName }}양의 영어 단어 시험 결과는?</h1>
    <p>{{ testResult.created_at }}</p>
    <p>점수: {{ testResult.score }}</p>
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 p-10">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="table__head">영어 단어</th>
            <th class="table__head">한글 뜻</th>
            <th class="table__head">내 답</th>
            <th class="table__head">맞았을까요?</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="result in testResult.results"
            :key="result.id"
            class="table__row"
            :class="{
              correct: result.isCorrect,
              incorrect: !result.isCorrect,
            }"
          >
            <td class="table__cell">{{ result.en_word }}</td>
            <td class="table__cell">{{ result.ko_word }}</td>
            <td class="table__cell">{{ result.answer }}</td>
            <td class="table__cell">
              {{ result.isCorrect }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { testResults } from "@/dummyData/testResults.json"
export default {
  name: "TestResult",
  props: {
    resultId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      testResult: {},
    }
  },
  beforeMount() {
    this.testResult = testResults[this.resultId]
  },
}
</script>

<style lang="scss" scoped>
.table__head {
  @apply px-4 py-2;
}
.table__row {
  &.correct {
    @apply bg-green-100 text-green-600;
  }
  &.incorrect {
    @apply bg-red-100 text-red-600;
  }
}
.table__cell {
  @apply border border-green-500 px-4 py-2 font-medium;
}
</style>
