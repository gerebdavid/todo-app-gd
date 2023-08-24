<template>
    <div class="w-full rounded-md border-2 border-black px-5.5 py-5">
        <BaseTitle v-model="localTodo.title" :is-editing="todo.isEditing" />
        <BaseDescription v-model="localTodo.description" :is-editing="todo.isEditing" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import BaseTitle from "@/components/base-components/BaseTitle.vue"
import BaseDescription from "@/components/base-components/BaseDescription.vue"
import { Todo } from "@/types/Todo"

interface Props {
    todo: Todo
}

const props = defineProps<Props>()

const localTodo = ref({
    title: props.todo.title,
    description: props.todo.description,
    creationDate: props.todo.creationDate,
    priority: props.todo.priority,
    isEditing: props.todo.isEditing,
    isCompleted: props.todo.isCompleted,
    id: props.todo.id,
})
</script>
