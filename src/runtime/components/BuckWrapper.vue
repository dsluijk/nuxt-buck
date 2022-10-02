<template>
    <div :class="{ editting: isEditing }">
        <slot />
    </div>
    <LazyBuckInternalSidebar v-if="isEditing" />
</template>

<script lang="ts" setup>
import { computed, BuckMode, useBuck } from "#imports";

const { canEdit, editMode } = useBuck();

const isEditing = computed(() => canEdit && editMode.value !== BuckMode.Normal);
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
}
</style>

<style lang="scss" scoped>
div {
    margin-right: 0;
    transition: margin-right 1s;

    &.editting {
        margin-right: 400px;
    }
}
</style>
