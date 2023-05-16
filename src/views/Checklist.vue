<script setup>
import ListItem from "@/components/list_item.vue";
import {useListItemsStore} from "@/stores/list";

const {listItems} = useListItemsStore()

</script>

<template>
    <h2>Checkliste:</h2>
    <div v-for="item in listItems">
        <div :class="{'strikethrough': item.isBought}">
            <ListItem>
                <h3>
                    {{ item.name }}
                </h3>
                <div class="list-item-content">
                    <span>Menge: {{ item.amount }}</span>
                    <input type="checkbox" v-model="item.isBought">
                </div>
            </ListItem>
        </div>
    </div>
</template>


<style>
.strikethrough {
    text-decoration: line-through;
}
.list-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}
</style>