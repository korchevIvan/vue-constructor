<script setup>
defineProps({
  label: {
    type: String
  },
})

const model = defineModel()

const emits = defineEmits(['change'])
</script>

<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" v-model="model" @input="emits('change')">
  </div>
</template>

<style scoped>

</style>