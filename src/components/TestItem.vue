<template>
  <div>
    <router-link :to="{name: 'TestDetail', params: { id: test.id }}" class="grid gap-4 p-4 bg-red-200">
      <h3>{{test.title}}</h3>
      <p>{{test.user}} 선생님</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TestItem",
  props: {
    test: {
      type: Object,
    }
  }
}
</script>

<style>

</style>