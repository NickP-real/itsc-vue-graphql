<script setup lang="ts">
import { ref, watch } from 'vue'

const modelValue = defineModel<boolean>()
const emits = defineEmits<{
  onClickDelete: []
}>()

const dialogRef = ref<{ showModal: () => void; close: () => void }>({
  showModal: () => {},
  close: () => {}
})

watch(
  () => modelValue.value,
  (isOpen) => {
    if (isOpen) {
      dialogRef.value.showModal()
    } else {
      dialogRef.value.close()
    }
  }
)

function onClickDelete() {
  modelValue.value = false
  emits('onClickDelete')
}
</script>

<template>
  <dialog ref="dialogRef" class="z-50 bg-white divide-y rounded">
    <div class="px-3 py-4 flex gap-8 justify-center">
      Do you want to delete this blog?
      <div class="relative w-4 hover:cursor-pointer" @click="modelValue = false">
        <div class="absolute rotate-45">|</div>
        <div class="absolute -rotate-45">|</div>
      </div>
    </div>
    <div class="px-3 py-4">Are you sure?</div>
    <div class="px-3 py-4 flex justify-end gap-4">
      <button class="bg-secondary rounded px-3 py-2 text-white" @click="modelValue = false">
        Close
      </button>
      <button class="bg-danger rounded px-3 py-2 text-white" @click="onClickDelete">Delete</button>
    </div>
  </dialog>
</template>
