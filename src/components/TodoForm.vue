<template>
    <form>
        <input v-model="todo" />
        <button @click.prevent="addTodo">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(["addTodo"])

const todo = ref("")

function addTodo() {
    if (!todo.value) {
        return
    }

    emit("addTodo", todo.value)
    todo.value = ""
}
</script>
