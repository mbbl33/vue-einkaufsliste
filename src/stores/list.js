import {defineStore} from 'pinia'

export const useListItemsStore = defineStore('listItems', {
    state: () => ({listItems: []}),

    actions: {
        addElement(name, amount) {
            this.listItems.push({name: name, amount: amount, isBought: false})
        },
        removeElement(index) {
            this.listItems.splice(index, 1)
        }
    },
})
