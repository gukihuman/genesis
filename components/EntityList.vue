<template>
    <div>
        <div
            v-for="(entity, index) in useStore().entityList"
            :key="index"
            class="flex justify-evenly my-2 text-semibold text-xl bg-slate-200"
        >
            <Transition name="fade">
                <div class="flex">
                    <div class="w-[220px] pl-2 pb-1">
                        <p>{{ entity.name }}</p>
                    </div>
                    <div class="w-[100px] pl-2">
                        <p>{{ entity.id }}</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
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
