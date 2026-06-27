<script setup lang="ts">
import { Button } from "@progress/kendo-vue-buttons";
import { Editor, type EditorChangeEvent } from "@progress/kendo-vue-editor";
import { checkIcon, copyIcon } from "@progress/kendo-svg-icons";

const content = `<p>The Kendo UI for Vue Native Editor allows your users to edit HTML in a familiar, user-friendly way.</p>`;

const editorHtml = ref(content);

function handleEditorChange(event: EditorChangeEvent) {
  editorHtml.value = event.html;
}

const tools = [
  [{ render: "CopyCodeTool" }],
  ["Bold", "Italic", "Underline"],
  ["Undo", "Redo"],
  ["Link", "Unlink"],
  ["AlignLeft", "AlignCenter", "AlignRight"],
  ["OrderedList", "UnorderedList", "Indent", "Outdent"],
];

const { copied, copyCode } = useCopyCode();
</script>

<template>
  <Editor
    class="mx-auto w-full max-w-180"
    :tools="tools"
    :value="editorHtml"
    @change="handleEditorChange($event)"
  >
    <template #CopyCodeTool>
      <Button
        type="button"
        class="k-toolbar-button"
        :svg-icon="copied ? checkIcon : copyIcon"
        :title="copied ? 'Copied' : 'Copy Code'"
        :aria-label="copied ? 'Copied' : 'Copy Code'"
        @mousedown.prevent
        @click="copyCode(editorHtml)"
      />
    </template>
  </Editor>
</template>
