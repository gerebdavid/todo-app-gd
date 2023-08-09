<template>
    <ul>
        <div v-for="(todo, index) in todos" :key="index" class="my-2 flex items-center gap-x-2">
            <li>
                {{ todo }}
            </li>
            <button @click="removeTodo(index)">Remove</button>
        </div>
    </ul>
</template>

<script setup lang="ts">
interface Props {
    todos: string[]
}

defineProps<Props>()

const emit = defineEmits(["removeTodo"])

function removeTodo(index: number) {
    emit("removeTodo", index)
}
</script>
