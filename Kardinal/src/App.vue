<template>
  <SignatureHeader @update-search="searchTerm = $event"/>
  <main class="p-5 font-sans bg-gradient-to-r from-mint-200 to-purple-100 h-screen">
    <div class="flex gap-5 py-5 overflow-x-auto">
      <div class="bg-gray-100 p-3 rounded-lg min-w-[350px] flex flex-col" v-for="(list, listIndex) in filteredLists" :key="list.id">
        <h2 class="mb-2 font-bold">
          {{ list.title }}
        </h2>

        <Draggable :list="list.cards" group="cards" item-key="id">
          <template #item="{element}">
            <div
              @click="openModal(listIndex, element)"
              :class="['p-2 my-2 rounded shadow cursor-pointer bg-white border-l-4', getPriorityClass(element.priority)]"
            >
              <span class="text-sm font-medium">{{ element.title }}</span>
              <p class="text-xs text-gray-400">{{ element.description }}</p>
            </div>
          </template>
        </Draggable>

        <button v-if="list.id === 1 && searchTerm === ''" class="w-full bg-transparent rounded hover:bg-white text-gray-500 p-2 text-left mt-2 text-sm font-medium" @click="openModal(listIndex)">  <!-- Can only add cards in To do -->
          + Add Card
        </button>
      </div>
    </div>
    <ModalDialogue :is-open="isModalOpen" :mode="modalMode" :card="editingCard" @close="closeModal" @save="saveCard"/>
  </main>
</template>

<script setup lang="ts">

import { computed, reactive, ref } from 'vue'
import Draggable from 'vuedraggable'
import { type Card, type List } from '@/types';
import ModalDialogue from '@/components/ModalDialogue.vue';
import SignatureHeader from '@/components/SignatureHeader.vue';

  const isModalOpen = ref(false)

  const editingCard = ref<Card | null>(null)
  const editingListIndex = ref<number | null>(null) // To do, in progress, done

  const modalMode = computed(()=>
    editingCard.value===null? 'add' : 'edit'
  )

  const openModal = (listIndex:number, card?: Card) => {
    editingListIndex.value = listIndex
    editingCard.value = card === undefined? null: card
    isModalOpen.value = true
  }

  const saveCard = (card:Card)=> {

    if(editingListIndex.value === null){
      return
    }
    if (modalMode.value ==="add")
    {
      const newId = Math.max(...lists.flatMap(list=> list.cards.map(c => c.id)))
      lists[editingListIndex.value].cards.push({...card, id: newId})

    }else{
      //modify
      const cardIndex = lists[editingListIndex.value].cards.findIndex(
        (cardOnList)=>cardOnList.id === card.id
      )
      if(cardIndex !== -1)
      {
        lists[editingListIndex.value].cards[cardIndex] = card
      }
    }

    closeModal()
  }

  const closeModal = () => {
    isModalOpen.value = false
    editingListIndex.value = null
    editingCard.value = null
  }

 const searchTerm = ref('');

  const filteredLists = computed(() => {
    // lowercase search for case-insensitive matching
    const term = searchTerm.value.trim().toLowerCase();

    // if there's no term, return the original full list
    if (!term) return lists;

    // filter cards inside each list
    return lists.map((list) => ({
      ...list,
      cards: list.cards.filter((card) =>
        card.title.toLowerCase().includes(term) ||
        card.description.toLowerCase().includes(term)
      )
    }));
  });


  const lists = reactive<List[]>([
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 1, title: 'Task 1', description: 'Description for Task 1', priority: 'normal' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2', priority: 'urgent' }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 3, title: 'Task 3', description: 'Description for Task 3', priority: 'high' },
      { id: 4, title: 'Task 4', description: 'Description for Task 4', priority: 'normal' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [{ id: 5, title: 'Task 5', description: 'Description for Task 5', priority: 'normal' }]
  }
  ]);

  function getPriorityClass(priority?: string) {
    switch (priority) {
      case 'urgent':
        return 'border-red-500';
      case 'high':
        return 'border-orange-400';
      case 'normal':
      default:
        return 'border-yellow-300';
    }
  }

</script>
