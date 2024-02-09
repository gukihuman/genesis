<template>
    <div>
        <!-- selection field -->
        <div
            @click="useStore().isListOpen = !useStore().isListOpen"
            class="w-[220px] flex items-center justify-between hover:brightness-110 bg-slate-200 py-1 px-2 rounded-md h-[40px] hover:cursor-pointer border-2 border-slate-400 transition duration-[70ms] ease-in-out"
        >
            <p class="select-none text-lg">{{ useStore().entity }}</p>
            <SvgChevronDown v-if="!useStore().isListOpen" />
            <SvgChevronUp v-if="useStore().isListOpen" />
        </div>

        <!-- list -->
        <Transition name="fade">
            <div
                v-if="useStore().isListOpen"
                class="bg-slate-100 absolute rounded-md p-1 mt-2 border-2 border-slate-400 w-[220px]"
            >
                <div v-for="(entityType, index) in entityTypes" :key="index">
                    <div
                        @click="listClick(index)"
                        class="flex items-center p-1 hover:bg-slate-300 transition duration-[70ms] ease-in-out rounded-md cursor-pointer"
                    >
                        <SvgCheck
                            :class="{
                                'opacity-0': useStore().entityIndex !== index,
                            }"
                            class="w-4 h-4 mr-2"
                        />
                        <p class="select-none text-lg">{{ entityType }}</p>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
const listClick = (index: number) => {
    useStore().entityIndex = index
    useStore().isListOpen = false
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 70ms;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
