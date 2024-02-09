<script setup lang="ts">
import { ref, watch } from 'vue'

const modelValue = defineModel<boolean>()
const emits = defineEmits<{
  onClickDelete: []
}>()

const dialogRef = ref<{ showModal: () => void }>({ showModal: () => {} })

watch(
  () => modelValue.value,
  (isOpen) => {
    if (isOpen) {
      dialogRef.value.showModal()
    }
  }
)

function onClickDelete() {
  modelValue.value = false
  emits('onClickDelete')
}
</script>

<template>
  <dialog ref="dialogRef" class="z-50 bg-white">
    <div>test</div>
  </dialog>
</template>
