<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const { applyTheme, currentColor } = useTheme();

onMounted(() => {
    applyTheme(currentColor.value);

    useNuxtApp().$aos().init();
    window.onresize = function () {
        useNuxtApp().$aos().refresh();
    }

    // Accessibility: Set the lang attribute on the html tag
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
        htmlTag.setAttribute('lang', useI18n().locale.value || 'en');
    }
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Adam Billard's Portfolio` : 'Adam Billard\'s Portfolio';
    },
    script: [
        {
            src: runtimeConfig.public.plausibleUrl + "/js/script.js",
            defer: true,
            "data-domain": "classydev.fr"
        },
        {
            src: runtimeConfig.public.mosparoUrl + "/build/mosparo-frontend.js"
        }
    ],
    link: [
        {
            rel: "stylesheet",
            href: runtimeConfig.public.mosparoUrl + "/resources/" + runtimeConfig.public.mosparoProjectId + ".css"
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
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
