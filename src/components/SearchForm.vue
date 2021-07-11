<template>
  <div class="relative mb-6">
    <input
      v-model="inputValue"
      class="border border-gray-500 rounded-sm w-full py-2 px-4"
      placeholder="선생님 이름으로 검색할 수 있어요"
      type="text"
      @input="handleInput"
    />
    <button class="absolute top-2 right-2" @click="clearInputValue">
      <span v-if="inputValue" class="material-icons">
        close
      </span>
      <span v-else class="material-icons">
        search
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      inputValue: "",
    }
  },
  methods: {
    clearInputValue() {
      this.inputValue = ""
    },
    handleInput(event) {
      this.inputValue = event.target.value
      this.$emit("onSearch", this.inputValue)
    },
  },
}
</script>

<style></style>
