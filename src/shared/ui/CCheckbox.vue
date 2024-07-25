<script setup>
defineProps({
  label: {
    type: String
  },
})

const model = defineModel()
</script>

<template>
  <label class="md:w-2/3 block">
    <input class="mr-2" type="checkbox" v-model="model">
    <span class="text-sm">{{label}}</span>
  </label>
</template>

<style scoped>

</style>