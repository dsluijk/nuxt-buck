<template>
    <EditorContent :editor="editor" class="content" />
</template>

<script lang="ts" setup>
import { EditorContent, useEditor } from "@tiptap/vue-3";

import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";

const editor = useEditor({
    injectCSS: false,
    extensions: [
        Document,
        Text,
        Paragraph,
    ],
});
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    outline: 1px dashed #4f9d69;
    outline-offset: 4px;

    // From the default style.
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
}
</style>

<style lang="scss">
.ProseMirror {
    outline: none;

}

</style>
