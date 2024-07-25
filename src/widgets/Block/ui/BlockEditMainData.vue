<script setup>
import {spacings, types} from "../../../shared/config/constants.js";
import CSelect from "../../../shared/ui/CSelect.vue";
import CInput from "../../../shared/ui/CInput.vue";
import {inject, reactive, watch} from "vue";

const props = defineProps({
  block: {
    type: Object
  },
  index: {
    type: Number
  }
})

let blockData = reactive({...props.block})

const blockCRUD = inject('blockCRUD')

const changeFields = () => {
  blockCRUD.updateBlock(props.index, blockData)
}

watch(() => props.block, (value) => {
  blockData = value
})
</script>

<template>
  <div class="max-w-xl mb-5">
    <div class="text-xl mb-5">Основные настройки</div>
    <CInput v-model="blockData.name" label="Наименование" class="mb-2" @change="changeFields" />
    <CSelect v-model="blockData.type" label="Тип блока" :options="types" class="mb-2" @change="changeFields"/>
    <CSelect v-model="blockData.spacing" label="Отступ снизу" :options="spacings" @change="changeFields"/>
  </div>
</template>

<style scoped>

</style>