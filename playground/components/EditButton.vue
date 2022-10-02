<template>
    <button @click="startEdit">✏️</button>
</template>

<script lang="ts" setup>
import { BuckMode, useBuck } from "#imports";

const { setEditMode } = useBuck();

const startEdit = () => {
    setEditMode(BuckMode.Editing);
};
</script>

<style lang="scss" scoped>
button {
    position: fixed;
    bottom: 8px;
    right: 8px;
    height: 2em;
    width: 2em;

    background: none;
    border: 2px solid #201e1f;
    border-radius: 8px;
    font-size: 1.4em;
    cursor: pointer;
}
</style>
