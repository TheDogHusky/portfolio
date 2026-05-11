<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

declare global {
    interface Window {
        mosparo: any;
    }
}

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
    });
}

let initialized = false;

onMounted(async () => {
    if (typeof window !== 'undefined' && typeof window.mosparo === 'undefined') {
        try {
            await loadScript(runtimeConfig.public.mosparoUrl + '/build/mosparo-frontend.js');
        } catch {
            console.error('Error while loading mosparo script.');
            return;
        }
    }

    if (typeof window.mosparo !== 'undefined' && !initialized) {
        initialized = true;
        const m = new window.mosparo(
            "mosparo-box",
            runtimeConfig.public.mosparoUrl,
            runtimeConfig.public.mosparoProjectId,
            runtimeConfig.public.mosparoPublicKey
        );
    }
});
</script>

<template>
    <div id="mosparo-box"></div>
</template>