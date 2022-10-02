<template>
    <LazyBuckInternalAreaEdit v-if="isEditing" />
    <BuckInternalAreaRender v-else />
</template>

<script lang="ts" setup>
import { computed, BuckMode, useBuck } from "#imports";

const { canEdit, editMode } = useBuck();
const isEditing = computed(
    () => canEdit && editMode.value === BuckMode.Editing,
);
</script>
