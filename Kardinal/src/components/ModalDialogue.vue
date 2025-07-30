<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
  import { nextTick } from 'vue';

  const props = defineProps<{
    isOpen: boolean
  }>()

  const emit = defineEmits<{(e:'close'):void}>()

  const titleInput = ref<HTMLInputElement | null>(null)

  const modalElement = ref<HTMLDivElement | null>(null)

  const {activate, deactivate} = useFocusTrap(modalElement)

  watch(() => props.isOpen, async (isOpen) => {
    if (isOpen) {
      await nextTick()
      activate()
      setTimeout(() => titleInput.value?.focus(), 0)
    } else{
      deactivate()
    }
  })

</script>


<template>

  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center" role="dialog" aria-modal="true" v-if="isOpen" @keydown.esc="emit('close')" ref="modalElement">
    <div class="bg-white p-5 rounded max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Add New Card</h2>
      <input type="text" placeholder="Card Title"
      aria-label="Card Title" class ="w-full p-2 mb-4 border rounded" ref="titleInput"/>

      <textarea class ="w-full p-2 mb-4 border rounded" placeholder="description" aria-label="Card Description"/>
      <div class="flex justify-end gap-2">
        <button class="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded" @click="emit('close')">
          Cancel
        </button>

        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="emit('close')">
          Save
        </button>

      </div>
    </div>
  </div>

</template>
