<template>
    <TodoHeader class="mb-16" @addTodo="addTodo" />
    <TodoList v-if="todos.length" :todos="todos" @removeTodo="removeTodo" />
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import TodoHeader from "@/components/TodoHeader.vue"
import TodoList from "@/components/TodoList.vue"
import { Todo } from "@/types/Todo"

const todos: Ref<Todo[]> = ref([])

function addTodo(todo: Todo) {
    todos.value.push(todo)
}

function removeTodo(index: number) {
    todos.value.splice(index, 1)
}
</script>
