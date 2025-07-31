<template>
  <div class="flex justify-between items-center h-14 px-6 bg-indigo-600 shadow-md">
    <div class="text-3xl font-bold tracking-tight text-white drop-shadow-sm italic" id="title">
      Kardinal
    </div>
    <div>
      <input type="text" v-model="searchTask" @input="$emit('update-search', searchTask)"  class="bg-white w-xl text-sm font-medium"/>
    </div>
    <div class="text-lg font-medium tracking-tight text-indigo-100 italic">
      @Andreeoak
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';


defineEmits<{
  (e: 'update-search', search: string): void;
}>();

const searchTask = ref('');

</script>
