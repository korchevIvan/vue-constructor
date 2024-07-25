<script setup>
import {inject, ref} from "vue";
import draggable from 'vuedraggable'
import BlockItem from "./BlockItem.vue";
import CButton from "../CButton.vue";

const props = defineProps({
  items: {
    type: Array
  },
  fields: {
    type: Object
  },
})

const blockItems = ref(props.items ?? [])

const emits = defineEmits(['change'])

const addItem = () => {
  let itemFields = {}

  for (const field in props.fields) {
    const type = props.fields[field].type

    if (field === 'name') {
      itemFields[field] = 'Новый элемент'
    } else if (field === 'order') {
      itemFields[field] = blockItems.value.length
    } else if(type === 'text') {
      itemFields[field] = ''
    } else if(type === 'select') {
      itemFields[field] = ''
    }
  }

  blockItems.value.push(itemFields)

  emits('change', blockItems.value)
}

const removeItem = (index) => {
  blockItems.value.splice(index, 1)
}
</script>

<template>
  <div>
    <draggable
        v-model="blockItems"
        item-key="order"
        handle=".handle-block-item"
        @change="emits('change', blockItems)">
      <template #item="{element, index}">
        <BlockItem :blockItem="element" :index="index" :fields="fields" class="mb-3" @remove="removeItem" />
      </template>
    </draggable>
    <div class="mt-2">
      <CButton @click="addItem">Добавить Элемент</CButton>
    </div>
  </div>
</template>

<style scoped>

</style>