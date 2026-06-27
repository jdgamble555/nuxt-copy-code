<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@progress/kendo-vue-buttons";
import { Editor, type EditorChangeEvent } from "@progress/kendo-vue-editor";
import { checkIcon, copyIcon } from "@progress/kendo-svg-icons";

const content = `<p>The Kendo UI for Vue Native Editor allows your users to edit HTML in a familiar, user-friendly way.</p>`;

const editorHtml = ref(content);
const copied = ref(false);

function handleEditorChange(event: EditorChangeEvent) {
  editorHtml.value = event.html;
}

async function copyText() {
  await navigator.clipboard.writeText(editorHtml.value);

  copied.value = true;

  setTimeout(() => {
    copied.value = false;
  }, 1500);
}

const tools = [
  [{ render: "CopyCodeTool" }],
  ["Bold", "Italic", "Underline"],
  ["Undo", "Redo"],
  ["Link", "Unlink"],
  ["AlignLeft", "AlignCenter", "AlignRight"],
  ["OrderedList", "UnorderedList", "Indent", "Outdent"],
];
</script>

<template>
  <Editor
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
        @click="copyText"
      />
    </template>
  </Editor>
</template>
