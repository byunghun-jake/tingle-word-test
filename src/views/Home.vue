<template>
  <section class="container py-6">
    <SearchForm @onSearch="handleSearch" />
    <div class="grid gap-4">
      <TestListItem v-for="test in testlist" :key="test.id" :test="test" />
    </div>
  </section>
</template>

<script>
import TestListItem from "@/components/TestListItem"
import SearchForm from "@/components/SearchForm"
import { testlist } from "@/dummyData/testlist"

export default {
  name: "Home",
  components: {
    TestListItem,
    SearchForm,
  },
  data() {
    return {
      testlist,
    }
  },
  methods: {
    handleSearch(inputValue) {
      this.testlist = testlist.filter((test) => {
        return test.user.includes(inputValue)
      })
      console.log(inputValue)
    },
  },
}
</script>
