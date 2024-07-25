<script setup>
defineProps({
  options: {
    type: Object
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
    default: 'Выберите'
  }
})
const model = defineModel()

const emits = defineEmits(['change'])
</script>

<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <select v-model="model"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            @change="emits('change')">
      <option disabled selected>{{ placeholder }}</option>
      <option v-for="(option, key) in options" :value="key">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>

</style>