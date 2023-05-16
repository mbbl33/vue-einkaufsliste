<template>
    <ul class="custom-list">
        <li>
            <slot></slot>
        </li>
    </ul>
</template>

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


</style>