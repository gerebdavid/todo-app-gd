<template>
    <button @click="clearTodos">Clear</button>
    <form>
        <input v-model="todo" />
        <button @click.prevent="addTodo">Submit</button>
    </form>

    <ul v-if="todos.length">
        <div v-for="(todo, index) in todos" :key="index" class="my-2 flex items-center gap-x-2">
            <li>
                {{ todo }}
            </li>
            <button @click="removeTodo(index)">Remove</button>
        </div>
    </ul>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue"

const todo = ref("")
const todos: Ref<string[]> = ref([])

function addTodo() {
    if (!todo.value) {
        return
    }

    todos.value.push(todo.value)
    todo.value = ""
}

function removeTodo(index: number) {
    todos.value.splice(index, 1)
}

function clearTodos() {
    todos.value = []
}
</script>
