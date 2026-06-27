export function useCopyCode(timeoutMs = 1500) {
    const copied = ref(false);
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    async function copyCode(value: string) {
        await navigator.clipboard.writeText(value);

        copied.value = true;

        if (resetTimer) {
            clearTimeout(resetTimer);
        }

        resetTimer = setTimeout(() => {
            copied.value = false;
        }, timeoutMs);
    }

    onScopeDispose(() => {
        if (resetTimer) {
            clearTimeout(resetTimer);
        }
    });

    return {
        copied: readonly(copied),
        copyCode,
    };
}