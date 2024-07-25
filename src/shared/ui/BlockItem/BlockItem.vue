<script setup>
import {Bars3Icon, PencilSquareIcon, XMarkIcon} from "@heroicons/vue/20/solid/index.js";
import CButton from "../CButton.vue";
import {ref} from "vue";
import CInput from "../CInput.vue";
import CCheckbox from "../CCheckbox.vue";
import CSelect from "../CSelect.vue";
import CInputFile from "../CInputFile.vue";
import CEditor from "../CEditor.vue";

const props = defineProps({
  blockItem: {
    type: Object
  },
  fields: {
    type: Object
  },
  index: {
    type: Number
  }
})

const show = ref(false)

const emits = defineEmits(['remove'])

</script>

<template>
  <div>
    <div class="p-2 px-4 bg-gray-200 flex relative items-center mb-2">
      <div class="text-xl handle-block-item me-3 cursor-move">
        <div class="w-4 h-4">
          <Bars3Icon/>
        </div>
      </div>
      <div class="text-sm me-auto">
        {{ blockItem.name }}
      </div>
      <div>
        <CButton @click="show = !show">
          <span class="w-4 h-4"><PencilSquareIcon/></span>
        </CButton>
      </div>
      <button class="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white" @click="emits('remove', index)">
        <XMarkIcon/>
      </button>
    </div>
    <div class="mt-5" v-if="show">
      <template v-for="(field, key) in fields">
        <CInput v-model="blockItem[key]" :label="field.label" class="max-w-xl mb-2" v-if="field.type === 'text'"/>
        <CCheckbox v-model="blockItem[key]" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'checkbox'"/>
        <CSelect v-model="blockItem[key]" :label="field.label" :options="field.options" class="max-w-xl mb-2" v-else-if="field.type === 'select'"/>
        <CInputFile v-model="blockItem[key]" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'file'"/>
        <CEditor v-model="blockItem[key]" :label="field.label" class="max-w-4xl mb-2" v-else-if="field.type === 'editor'"/>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>