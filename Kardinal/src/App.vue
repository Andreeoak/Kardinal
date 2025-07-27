<template>
  <main class="p-5 font-sans bg-gradient-to-r from-mint-200 to-purple-100 h-screen">
    <div class="flex gap-5 py-5 overflow-x-auto">
      <div class="bg-gray-100 p-3 rounded-lg min-w-[250px] flex flex-col">
        <h2 class="mb-2 font-bold">
          The List
        </h2>
        <div class="bg-white p-2 my-2 rounded shadow cursor-pointer">
          <span class="text-sm font-medium">
            Title Card
          </span>
          <p class="text-xs text-gray-400">
            Card description
          </p>
        </div>
        <div class="bg-white p-2 my-2 rounded shadow cursor-pointer">
          <span class="text-sm font-medium">
            Title Card
          </span>
          <p class="text-xs text-gray-400">
            Card description
          </p>
        </div>
        <div class="bg-white p-2 my-2 rounded shadow cursor-pointer">
          <span class="text-sm font-medium">
            Title Card
          </span>
          <p class="text-xs text-gray-400">
            Card description
          </p>
        </div>
        <button class="w-full bg-transparent rounded hover:bg-white text-gray-500 p-2 text-left mt-2 text-sm font-medium">
          + Add Card
        </button>
      </div>
    </div>
  </main>
</template>
