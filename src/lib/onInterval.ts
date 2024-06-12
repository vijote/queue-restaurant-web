import { onDestroy } from "svelte";

export function onInterval(callback: TimerHandler, ms: number) {
    const interval = setInterval(callback, ms);

    onDestroy(() => {
        clearInterval(interval);
    });
}