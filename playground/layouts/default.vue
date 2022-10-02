<template>
    <div class="container">
        <header>
            <h1><NuxtLink to="/">Buck Demo Site</NuxtLink></h1>
        </header>
        <slot />
        <hr />
        <footer>Made with Buck CMS.</footer>
        <EditButton v-if="canStartEdit" />
    </div>
</template>

<script lang="ts" setup>
import { computed, BuckMode, useBuck } from "#imports";

const { canEdit, editMode } = useBuck();

const canStartEdit = computed(
    () => canEdit && editMode.value === BuckMode.Normal,
);
</script>

<style lang="scss">
body {
    background: #f9f7f3;
    color: #201e1f;
    font-family: Verdana, sans-serif;
    font-size: 1.2em;
    line-height: 1.4;
}

h1,
h2,
h3 {
    color: #4f9d69;
    margin: 0;
}

a {
    color: #f7a072;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>

<style lang="scss" scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 0 1em;
}

header {
    background: #f7a072;
    margin: 1vh -0.8em;
    padding: 0.8em 0.8em;
    border-radius: 12px;

    h1 {
        font-size: 1.2em;
        font-weight: bolder;
        text-decoration: none;
    }

    a {
        color: #f9f7f3;
    }
}

footer {
    font-size: 0.8em;
    font-style: italic;
}
</style>
