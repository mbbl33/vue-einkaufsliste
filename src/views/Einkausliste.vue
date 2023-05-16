<template>
    <h1> Einkaufslistenapp</h1>
    <div v-for="item in list">
        <div :class="{'strikethrough': isChecked}">
            <list-item :title="item" :amount="1"><input type="checkbox" v-model="isChecked"> {{ isChecked }}</list-item>
        </div>
    </div>

</template>


<script>
export default {
    name: "Einkausliste"
}
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


<style>
.strikethrough {
    text-decoration: line-through;
}
</style>