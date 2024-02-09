<template>
    <div class="bg-slate-400 w-full min-h-screen flex justify-center pt-8">
        <div class="w-[400px] h-fit rounded-md min-h-[600px] bg-slate-300">
            <div class="flex mt-4 justify-evenly">
                <Dropdown />
                <Button @click="fetchEntity()" />
            </div>
            <EntityList class="mt-4" />
        </div>
    </div>
</template>
<script setup lang="ts">
onMounted(async () => {
    // Setup latest access token on a server
    const res = await $fetch("/api/init")
    console.log(res)
})
enum ApiAdress {
    Leads = "/api/createLead",
    Contacts = "/api/createContact",
    Companies = "/api/createCompany",
}
const fetchEntity = async () => {
    const entityIndex = useStore().entityIndex
    if (entityIndex === 0) return // Не выбрано

    let apiAdress: ApiAdress
    if (entityIndex === 1) apiAdress = ApiAdress.Leads
    else if (entityIndex === 2) apiAdress = ApiAdress.Contacts
    else apiAdress = ApiAdress.Companies

    useStore().isFetching = true
    const data: Entity = await $fetch(apiAdress)
    useStore().isFetching = false

    useStore().entityList.push(data)
    if (entityIndex === 1) data.name = "Сделка"
    else if (entityIndex === 2) data.name = "Контакт"
    else data.name = "Компания"
}
</script>
