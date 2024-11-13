<script lang="ts" setup>
onMounted(() => {
    useNuxtApp().$aos().init();
    window.onresize = function () {
        useNuxtApp().$aos().refresh();
    }
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Adam Billard's Portfolio` : 'Adam Billard\'s Portfolio';
    },
    script: [
        {
            src: "https://plausible.classydev.fr/js/script.js",
            defer: true,
            "data-domain": "classydev.fr"
        }
    ]
});

useSeoMeta({
    description: "Welcome to my portoflio. I'm Adam Billard, a full-stack developer from France. I'm passionate about web development and I love to create beautiful and efficient websites.",
    themeColor: "#3777ff",
    twitterCard: "summary_large_image",
    twitterSite: "@ClassyCraft3r",
    twitterCreator: "@ClassyCraft3r",
    ogUrl: "https://classydev.fr",
    ogType: "website",
    ogLocale: "en_US",
    ogSiteName: "Adam Billard's Portfolio",
    ogTitle: "Adam Billard's Portfolio",
    ogDescription: "Welcome to my portoflio. I'm Adam Billard, a full-stack developer from France. I'm passionate about web development and I love to create beautiful and efficient websites.",
});
</script>

<template>
    <div>
        <NuxtLoadingIndicator :throttle="0" color="linear-gradient(to right, #bbbbbb, #bbbbfc" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
