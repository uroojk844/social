<template>
  <aside class="max-w-80 w-full p-8 max-md:hidden">
    <div class="text-2xl font-bold mb-8">Stories</div>
    <!-- stories  -->
    <section class="h-40 flex gap-3 overflow-x-auto scrollbar-none">
      <div
        v-for="(_, index) in 4"
        :key="index"
        class="flex-shrink-0 w-28 rounded-2xl overflow-hidden relative h-full"
      >
        <img
          :src="
            'http://picsum.photos/150/200.webp?' +
            Math.floor(Math.random() * 1000)
          "
          class="size-full object-cosver"
        />
        <div
          class="flex gap-1.5 p-1 items-center absolute bottom-1 bg-white w-[104px] left-1 rounded-full"
        >
          <img src="http://picsum.photos/30.webp" class="size-6 rounded-full" />
          <div
            class="whitespace-nowrap overflow-hidden text-xs font-semibold text-ellipsis w-16"
          >
            Belal naim
          </div>
        </div>
      </div>
    </section>

    <!-- suggestions -->
    <div class="text-2xl font-bold my-8">Suggestions</div>
    <section class="grid gap-4">
      <div
        v-for="(_, index) in 3"
        :key="index"
        class="grid grid-cols-[max-content_auto_max-content] items-center gap-2"
      >
        <img
          :src="
            'http://picsum.photos/150/200.webp?' +
            Math.floor(Math.random() * 1000)
          "
          class="size-10 rounded-full object-cosver"
        />
        <div class="font-semibold line-clamp-2">Urooj Khan</div>
        <button class="text-xs bg-black text-white py-1.5 px-3 rounded-full">
          Follow
        </button>
      </div>
    </section>
  </aside>
</template>
