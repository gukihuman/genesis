let store = {}
export const setGlobalData = (key, value) => {
    store[key] = value
}
export const getGlobalData = (key) => {
    return store[key]
}
export const clearGlobalData = () => {
    store = {}
}
