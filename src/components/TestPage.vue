<template>
  <div >
    <form class="flex flex-col items-center justify-center" @submit.prevent="submitAnswer">
      <div v-if="test.type === 1">
        <p>
          영어 단어를 보고 한글 뜻을 적어주세요.
        </p>
        <p>{{ test.en_word }}</p>
      </div>
        <div v-else>
          <p>
            한글 뜻을 보고 영어 단어를 적어주세요.
          </p>
          <p>{{ test.ko_word }}</p>
        </div>
      <input v-model.trim="answer" class="border border-gray-400" type="text">
      <button>다음</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  props: {
    test: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      answer: "",
    }
  },
  methods: {
    submitAnswer() {
      this.$emit("submitAnswer", this.answer)
      this.answer = ""
    }
  }
}
</script>

<style>

</style>