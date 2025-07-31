<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
  import { nextTick } from 'vue';
  import type { Card } from '@/types';

  const props = defineProps<{
    isOpen: boolean
    card : Card | null
    mode : 'add' | 'edit'
  }>()

  const emit = defineEmits<{
    (e:'close'): void
    (e: 'save', card:Card): void
  }>()

  const titleInput = ref<HTMLInputElement | null>(null)

  const modalElement = ref<HTMLDivElement | null>(null)

  const localCard = ref<Card>({id: 0, title:'', description:''})

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

  watch(() => props.isOpen, async (isOpen) => {
    if (isOpen) {
      await nextTick()
      activate()

      // Se for modo "add", zera os campos manualmente
      if (props.mode === 'add') {
        localCard.value = {
          id: 0,
          title: '',
          description: '',
          priority: 'normal'
        }
      }

      setTimeout(() => titleInput.value?.focus(), 0)
    } else {
      deactivate()
    }
  })


</script>


<template>

  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center" role="dialog" aria-modal="true" v-if="isOpen" @keydown.esc="emit('close')" ref="modalElement" @click.self="emit('close')">
    <div class="bg-white p-5 rounded max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">{{ mode === 'add' ? 'Add New Card' :  'Edit Card'}}</h2>
      <input v-model="localCard.title" type="text" placeholder="Card Title"
      aria-label="Card Title" class ="w-full p-2 mb-4 border rounded" ref="titleInput"/>

      <textarea v-model="localCard.description" class ="w-full p-2 mb-4 border rounded" placeholder="description" aria-label="Card Description"/>

      <!-- Priority Dropdown -->
      <label for="priority" class="block mb-1 font-medium">Priority</label>
      <select
        id="priority"
        v-model="localCard.priority"
        class="w-full p-2 mb-4 border rounded"
      >
        <option value="normal">Normal (Yellow)</option>
        <option value="high">High (Orange)</option>
        <option value="urgent">Urgent (Red)</option>
      </select>


      <div class="flex justify-end gap-2">
        <button class="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded" @click="emit('close')">
          Cancel
        </button>

        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="emit('save', localCard)">
          {{mode === 'add'? "Add" : "Save"}}
        </button>

      </div>
    </div>
  </div>

</template>
