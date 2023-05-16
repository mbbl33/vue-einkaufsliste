<script setup>
import ListItem from "@/components/list_item.vue";
import {useListItemsStore} from "@/stores/list";
import {ref} from "vue";

const {listItems, addElement, removeElement} = useListItemsStore()
const newItemName = ref("");
const newItemAmount = ref("");
</script>

<template>

    <h2>Neues Item:</h2>
    <ListItem>
        <p>Name:<input v-model="newItemName"></p>
        <p>Menge:<input type="number" v-model="newItemAmount"></p>
        <button @click="() => addElement(newItemName, newItemAmount)">Element hinzufügen</button>
    </ListItem>

    <h2>Editor:</h2>
    <div v-for="(item,index) in listItems">
        <ListItem>
            <p>Name:<input v-model="item.name"></p>
            <p>Menge:<input type="number" v-model="item.amount"></p>
            <button @click="removeElement(index)">Entfernen</button>
        </ListItem>
    </div>
</template>

<style scoped>

</style>