<script setup lang="ts">
import { Button } from "@progress/kendo-vue-buttons";

const exampleCode = `function copyCode(value) {
  return navigator.clipboard.writeText(value);
}`;

const { copied, copyCode } = useCopyCode();
</script>

<template>
  <section class="mx-auto w-full max-w-180">
    <p
      class="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600"
    >
      Code Block
    </p>

    <div class="relative">
      <div class="absolute right-4 top-4 z-10">
        <Button
          type="button"
          fill-mode="flat"
          class="h-8! w-8! rounded-lg! border-0! bg-transparent! p-0! text-slate-300! shadow-none! transition hover:bg-white/10! hover:text-white! focus:shadow-none!"
          :title="copied ? 'Copied' : 'Copy Code'"
          :aria-label="copied ? 'Copied' : 'Copy code'"
          @mousedown.prevent
          @click="copyCode(exampleCode)"
        >
          <svg
            v-if="copied"
            aria-hidden="true"
            class="h-4.5 w-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>

          <svg
            v-else
            aria-hidden="true"
            class="h-4.5 w-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="8" y="8" width="10" height="10" rx="1.5" />
            <path d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
          </svg>
        </Button>
      </div>

      <pre
        class="m-0 overflow-x-auto rounded-2xl border border-slate-300 bg-slate-900 p-5 pr-20 text-[0.95rem] leading-relaxed text-slate-50"
      ><code>{{ exampleCode }}</code></pre>
    </div>
  </section>
</template>
