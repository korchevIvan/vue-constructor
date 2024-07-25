<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean
  }
})

let sizeClass = ''

if (props.size === 'medium') {
  sizeClass = 'text-sm px-3 py-1.5'
} else if (props.size === 'large') {
  sizeClass = 'text-sm px-4 py-2'
}

</script>

<template>
  <button
      type="button"
      class="flex justify-center rounded-md bg-indigo-600 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-30"
      :class="[sizeClass]"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<style scoped>

</style>