<template>
    <div class="flex justify-between">
        <h1>To do list</h1>
        <button class="flex h-16 w-16 items-center justify-center rounded-full bg-green" @click="addTodo">
            <PlusIcon class="bg-yellow fill-white" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import PlusIcon from "@/components/icons/PlusIcon.vue"
import { Todo } from "@/types/Todo"

const emit = defineEmits(["addTodo"])

const baseTodo: Ref<Todo> = ref({
    title: "",
    description: "",
    creationDate: Date.now(),
    priority: "Medium",
    isEditing: true,
    isCompleted: false,
    id: new Date().getTime(),
})

function addTodo() {
    emit("addTodo", baseTodo.value)
}
</script>
