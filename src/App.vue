<script setup>
import { ref } from 'vue'
const text = ref('一句話')
const todos = ref([
  {
    id: 1,
    name: '購買雜貨',
    DueDate: '2027-07-30',
    complete: true
  },
  {
    id: 2,
    name: '購買雜貨',
    DueDate: '2027-07-30',
    complete: true
  }
])
</script>
<template>
  <h1 class="">目前是 App.vue</h1>
  <h2 class="">{{ tex }}</h2>
  <table>
    <thead>
      <tr>
        <th>代辦事項名稱</th>
        <th>到期日</th>
        <th>是否已完成</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>{{ todo.DueDate }}</td>
        <td>{{ todo.complete }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>