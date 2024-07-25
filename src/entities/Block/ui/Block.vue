<script setup>
import {XMarkIcon} from '@heroicons/vue/20/solid'
import CButton from "../../../shared/ui/CButton.vue";
import {PencilSquareIcon, Bars3Icon} from "@heroicons/vue/20/solid/index.js";
import {inject, provide, ref} from "vue";
import BlockEditMainData from "../../../widgets/Block/ui/BlockEditMainData.vue";
import BlockEditData from "../../../widgets/Block/ui/BlockEditData.vue";

defineProps({
  block: {
    type: Object
  },
  index: {
    type: Number
  }
})

const show = ref(false)
const blockCRUD = inject('blockCRUD')

</script>

<template>
  <div>
    <div class="p-4 bg-gray-100 flex relative items-center">
      <div class="text-xl handle me-3 cursor-move">
        <div class="w-6 h-6">
          <Bars3Icon/>
        </div>
      </div>
      <div class="text-xl me-auto">
        {{ block.name }}
      </div>
      <div>
        <CButton @click="show = !show">
          <span class="w-6 h-6"><PencilSquareIcon/></span>
        </CButton>
      </div>
      <button class="absolute -top-2.5 -right-2.5 w-5 h-5 bg-red-500 rounded-full text-white"
              @click="blockCRUD.removeBlock(index)">
        <XMarkIcon/>
      </button>
    </div>
    <div class="mt-5" v-if="show">
      <BlockEditMainData :block="block" :index="index"/>
      <BlockEditData :block="block" :index="index" :type="block.type" v-if="block.type"/>
    </div>
  </div>
</template>

<style scoped>

</style>