type EntityType = "Не выбрано" | "Сделка" | "Контакт" | "Компания"
export const entityTypes: EntityType[] = [
    "Не выбрано",
    "Сделка",
    "Контакт",
    "Компания",
]
declare global {
    type Entity = {
        id: number
        name: string
    }
}
export const useStore = defineStore("main", {
    state: () => ({
        entityIndex: 0,
        isListOpen: false,
        entityList: [] as Entity[],
        isFetching: false,
    }),
    getters: {
        entity: (state): EntityType => entityTypes[state.entityIndex],
    },
})
