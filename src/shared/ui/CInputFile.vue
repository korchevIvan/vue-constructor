<script setup>
import axios from 'axios'
import {XMarkIcon} from "@heroicons/vue/20/solid/index.js";

defineProps({
  label: {
    type: String
  },
})

const model = defineModel()

const emits = defineEmits(['change'])

const fileUpload = async (file) => {
  const formData = new FormData()

  formData.append("media", file)

  await axios.post(
      `https://api.myfalke.ru/api/v1/content/media`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
  ).then((response) => {
    model.value = response.data.data.links.source
  }).catch(() => {
    alert('Произошла ошибка, повторите позднее')
  })
}

const onChangeFile = async (e) => {
  const target = e.target
  await fileUpload(target.files[0])
}
</script>

<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <div class="relative">
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" v-model="model" @input="emits('change')" readonly>
      <label class="inline-block absolute right-0 top-0 bottom-0">
        <div style="height: 100%;" class="inline-flex justify-center rounded-md bg-indigo-600 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-30 text-sm px-3 py-1.5 cursor-pointer">
          Загрузить файл
        </div>
        <input type="file" @change="onChangeFile" class="hidden">
      </label>
      <button class="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white" v-if="(model !== '') && (typeof model !== 'undefined')" @click="model = ''">
        <XMarkIcon/>
      </button>
    </div>
    <img :src="model" alt="" class="mt-5">
  </div>
</template>

<style scoped>
.is-disabled {
  opacity: 0.3;
  pointer-events: none;
}
</style>