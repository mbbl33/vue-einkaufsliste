<script>
import {defineComponent} from "vue";

import {RouterView, RouterLink} from "vue-router"
</script>

<template>

    <h1>Einkaufslisten-App</h1>
    <div class="links-box router-links">
        <RouterLink active-class="active-link" to="/">Checkliste</RouterLink>
        <RouterLink active-class="active-link" to="/editList">Einkaufsliste bearbeiten</RouterLink>
    </div>
    <RouterView></RouterView>

</template>

<style>
.links-box {
    border: 1px solid black;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
}

.router-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.active-link {
    font-weight: bold;
    color: green;
    background-color: #c5c7c7;
}
</style>
