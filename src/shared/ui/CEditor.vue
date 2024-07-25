<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import {ref} from "vue";
import CButton from "./CButton.vue";

defineProps({
  label: {
    type: String
  },
})

const model = defineModel()

const emits = defineEmits(['change'])

const showHtml = ref(false)
</script>

<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <QuillEditor
        contentType="html"
        theme="snow"
        v-model:content="model"
        placeholder="Введите текст"
        style="height: 200px"
        :modules="[

        ]"
        :toolbar="['bold', 'italic', 'underline', { 'list': 'ordered'}, { 'list': 'bullet' }]"
        v-if="!showHtml" />

    <textarea
        v-if="showHtml"
        v-model="model"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    />

    <CButton class="mt-1.5 mb-10" @click="showHtml = !showHtml">
      Поменять на {{ showHtml ? 'визуальный редактор' : 'HTML редактор' }}
    </CButton>
  </div>
</template>

<style scoped>

</style>