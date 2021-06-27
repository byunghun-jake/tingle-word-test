<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold mb-6">{{ testdetail.title }}</h1>
    <section class="bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-lg mb-10">
      <h2 class="text-xl font-semibold mb-4">마지막 점검!</h2>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="table-head">영어 단어</th>
            <th class="table-head">한글 뜻</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="test in testdetail.tests" :key="test.id">
            <td class="table-cell">{{ test.en_word }}</td>
            <td class="table-cell">{{ test.ko_word }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2 class="text-xl font-semibold mb-4">시험 준비가 끝났나요?</h2>
      <form class="flex items-center" @submit.prevent="startTest">
        <input v-model.trim="testerName" class="inline-block mr-4 border border-gray-400 px-4 py-2 rounded" placeholder="이름" type="text">
        <button class="py-2 px-4 border border-green-500 rounded-full font-medium">시험보기</button>
      </form>
    </section>
    <hr class="my-10">
  </div>
</template>

<script>

export default {
  name: "TestInfo",
  props: ["testdetail"],
  data() {
    return {
      testerName: ""
    }
  },
  computed: {
  },
  methods: {
    startTest() {
      if (this.testerName === "") {
        return
      }
      this.$store.dispatch("setTesterName", this.testerName)
      this.$emit("startTest")
    }
  },
  beforeMount() {
    console.log(this.$store.getters.testerName)
    this.testerName = this.$store.getters.testerName || ""
  }
}
</script>

<style lang="scss" scoped>
  .table-head {
    @apply px-4 py-2;
  }
  .table-cell {
    @apply border border-green-500 px-4 py-2 font-medium text-green-600;
  }
</style>