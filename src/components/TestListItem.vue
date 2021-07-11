<template>
  <div>
    <router-link
      :to="{ name: 'TestDetail', params: { id: test.id } }"
      class="flex flex-col border border-gray-300 p-4 shadow-sm rounded-lg transition-all duration-200 hover:shadow-lg focus:bg-100 focus:drop-shadow-md"
    >
      <h3 class="text-lg font-bold mb-6">{{ test.title }}</h3>
      <p class="text-gray-600">{{ test.user }} 선생님</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TestItem",
  props: {
    test: {
      type: Object,
    },
  },
}
</script>

<style></style>
