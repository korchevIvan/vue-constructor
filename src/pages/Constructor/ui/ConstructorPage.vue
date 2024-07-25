<script setup>
import {onMounted, provide, ref} from "vue";
import CButton from "../../../shared/ui/CButton.vue";
import Block from "../../../entities/Block/ui/Block.vue";
import draggable from 'vuedraggable'
import {useThrottledRefHistory} from "@vueuse/core";
import {ArrowUturnLeftIcon, ArrowUturnRightIcon} from '@heroicons/vue/20/solid'
import useSaveBlock from "../../../shared/api/blocks/useSaveBlock.js";
import useGetPage from "../../../shared/api/blocks/useGetPage.js";
import Loader from "../../../shared/ui/Loader.vue";

const url = new URL(window.location.href),
      pageId = url.searchParams.get("pageId"),
      isPending = ref(false)

const blocks = ref([])

const blockCRUD = {
  updateBlock: (index, data) => {
    blocks.value[index] = data
  },
  removeBlock: (index) => {
    blocks.value.splice(index, 1)
  }
}

provide('blockCRUD', blockCRUD)

const addBlock = () => {
  blocks.value.push({
    name: 'Новый блок',
    type: '',
    order: blocks.value.length,
    data: {}
  })
}

const {undo, redo, canRedo, canUndo} = useThrottledRefHistory(blocks, {
  deep: true,
  throttle: 1000
})

const showJSON = ref(false)

const saveHandler = async () => {
  await useSaveBlock(blocks.value, pageId)
}

const getPage = () => {
  useGetPage(pageId)
      .then((response) => {
        blocks.value = response?.data?.data?.blocks[0]?.data ?? []
      })
      .finally(() => {
        isPending.value = true
      })
}

onMounted(() => {
  getPage()
})
</script>

<template>
  <div>
    <div v-if="isPending">
      <div class="flex mb-5">
        <div class="me-2">
          <CButton @click="saveHandler">Сохранить</CButton>
        </div>
        <div class="me-2">
          <CButton @click="addBlock">Добавить блок</CButton>
        </div>
        <div class="me-2">
          <CButton
              @click="undo()"
              :disabled="!canUndo"
          >
            <span class="w-6 h-6"><ArrowUturnLeftIcon/></span>
          </CButton>
        </div>
        <div>
          <CButton
              @click="redo()"
              :disabled="!canRedo"
          >
            <span class="w-6 h-6"><ArrowUturnRightIcon/></span>
          </CButton>
        </div>
      </div>
      <draggable
          v-model="blocks"
          item-key="order"
          handle=".handle"
          v-if="blocks.length">
        <template #item="{element, index}">
          <Block :block="element" :index="index" class="mb-10"/>
        </template>
      </draggable>
      <div v-else>
        <div class="text-lg my-10">Добавьте блоки</div>
      </div>


      <div class="mt-5">
        <CButton @click="showJSON = !showJSON">Показать JSON</CButton>
      </div>
      <pre v-if="showJSON">{{ blocks }}</pre>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<style scoped>

</style>