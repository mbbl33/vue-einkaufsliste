<script>
import list_Item from "@/components/list_item.vue";
import {defineComponent} from "vue";
import ListItem from "@/components/list_item.vue";

export default defineComponent({
    components: {ListItem},
    data() {
        return {
            list: ['Äpfel', 'Bier', 'Kuchen', 'Schnaps', 'Mehl'],
            isChecked: false
        }
    }
})
</script>

<template>
    <h1> Einkaufslistenapp</h1>
    <div v-for="item in list">
        <div :class="{'strikethrough': isChecked}">
            <list-item :title="item" :amount="1"><input type="checkbox" v-model="isChecked"></list-item>
        </div>
    </div>

</template>

<style>
.strikethrough {
    text-decoration: line-through;
}
</style>
