<template>
    <div v-for="todo in todos" :key="todo.id" class="my-2 flex items-center gap-x-2">
        <BaseTodo v-if="todo.id" :todo="todo" @removeTodo="removeTodo" />
    </div>
</template>

<script setup lang="ts">
import BaseTodo from "@/components/base-components/BaseTodo.vue"
import { Todo } from "@/types/Todo"

interface Props {
    todos: Todo[]
}

defineProps<Props>()

const emit = defineEmits(["removeTodo"])

function removeTodo(index: number) {
    emit("removeTodo", index)
}
</script>
