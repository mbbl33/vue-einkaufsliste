<template>
    <ul class="custom-list">
        <li>
            <h2>
                {{ title }}
            </h2>
            <div class="list-item-content">
                <span>Menge: {{ amount }}</span>
                <slot></slot>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['title', 'amount']
}
</script>

<style>

.custom-list {
    list-style-type: none;
    padding: 0;
    border-top: 1px solid;
    border-bottom: 1px solid black;
}
.custom-list li {
    margin-bottom: 5px;
    line-height: 1.5;
}

.custom-list li::after {
    content: "\A";
    white-space: pre;
}

.custom-list .list-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}
</style>