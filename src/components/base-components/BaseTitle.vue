<template>
    <input v-if="isEditing" v-model="title" placeholder="Title" type="text" class="todo-title placeholder-black" />
    <p v-else class="todo-title">{{ title }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    modelValue: string
    isEditing: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])

const title = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emit("update:modelValue", value)
    },
})
</script>
