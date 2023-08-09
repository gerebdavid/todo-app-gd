<template>
    <button @click="clearTodos">Clear</button>
    <TodoForm @addTodo="addTodo" />
    <TodoList v-if="todos.length" :todos="todos" @removeTodo="removeTodo" />
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import TodoForm from "@/components/TodoForm.vue"
import TodoList from "@/components/TodoList.vue"

const todos: Ref<string[]> = ref([])

function addTodo(todo: string) {
    todos.value.push(todo)
}

function removeTodo(index: number) {
    todos.value.splice(index, 1)
}

function clearTodos() {
    todos.value = []
}
</script>
