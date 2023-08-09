<template>
    <div class="flex justify-between">
        <h1>To do list</h1>
        <button class="flex h-16 w-16 items-center justify-center rounded-full bg-green" @click="addTodo">
            <PlusIcon class="bg-yellow fill-white" />
        </button>
    </div>
</template>

<script setup lang="ts">
import PlusIcon from "@/components/icons/PlusIcon.vue"

const emit = defineEmits(["addTodo"])

function addTodo() {
    emit("addTodo")
}
</script>
