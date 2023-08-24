<template>
    <textarea
        v-if="isEditing"
        v-model="description"
        placeholder="Description"
        type="text"
        class="todo-title placeholder-black"
    />
    <p v-else class="todo-title text-gray-300">{{ description }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    modelValue: string
    isEditing: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])

const description = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emit("update:modelValue", value)
    },
})
</script>
