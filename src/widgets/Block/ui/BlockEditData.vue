<script setup>
import { typesFields } from "../../../shared/config/constants.js";
import CInput from "../../../shared/ui/CInput.vue";
import CCheckbox from "../../../shared/ui/CCheckbox.vue";
import BlockItemList from "../../../shared/ui/BlockItem/BlockItemList.vue";
import {inject, reactive, ref, watch} from "vue";
import CSelect from "../../../shared/ui/CSelect.vue";
import CInputFile from "../../../shared/ui/CInputFile.vue";
import CEditor from "../../../shared/ui/CEditor.vue";

const props = defineProps({
  block: {
    type: Object
  },
  type: {
    type: String
  },
  index: {
    type: Number
  }
})


let blockData = reactive({...props.block})

const blockCRUD = inject('blockCRUD')

const changeFields = () => {
  let updateData = {},
      typeFieldsData = {},
      fields = typesFields[props.type]

  for (const field in fields) {
    typeFieldsData[field] = blockData.data[field]
  }

  updateData = {
    ...blockData
  }
  updateData.data = typeFieldsData

  blockCRUD.updateBlock(props.index, updateData)
}

const changeItems = (items) => {
  blockData.data.items = items
  changeFields()
}

watch(() => props.block, (value) => {
  blockData = value
})
</script>

<template>
  <div>
    <div class="text-xl mb-5">Настройки блока</div>
    <template v-for="(field, key) in typesFields[type]">
      <CInput v-model="blockData.data[key]" :label="field.label" class="max-w-xl mb-2" v-if="field.type === 'text'" @change="changeFields"/>
      <CCheckbox v-model="blockData.data[key]" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'checkbox'" @change="changeFields"/>
      <CSelect v-model="blockData.data[key]" :options="field.options" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'select'" @change="changeItems"  />
      <CInputFile v-model="blockData.data[key]" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'file'" @change="changeFields"/>
      <BlockItemList :items="blockData.data[key]" :fields="field.fields" v-else-if="field.type === 'array'" @change="changeItems" class="mt-5"/>
      <CEditor v-model="blockData.data[key]" :label="field.label" class="max-w-xl mb-2" v-else-if="field.type === 'editor'" @change="changeFields" />
    </template>
  </div>
</template>

<style scoped>

</style>