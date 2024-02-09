<template>
    <div
        class="w-[100px] flex justify-center py-1 px-2 rounded-md h-[40px] cursor-arrow border-2 transition duration-[70ms] ease-in-out"
        :class="{
            'bg-blue-500 text-white border-blue-600':
                useStore().entityIndex !== 0 || useStore().isFetching,
            'hover:brightness-110 cursor-pointer': useStore().entityIndex !== 0,
            'bg-slate-200 border-slate-400 text-slate-500':
                useStore().entityIndex === 0 && !useStore().isFetching,
        }"
    >
        <p
            v-if="!useStore().isFetching"
            class="select-none font-semibold text-lg"
        >
            Создать
        </p>
        <SvgRolling v-if="useStore().isFetching" />
    </div>
</template>
