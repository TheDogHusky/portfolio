<script setup lang="ts">
const props = defineProps<{
    place: string
}>();

const socials = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/ClassyCraft3r',
        icon: 'nf-fa-twitter'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/TheDogHusky',
        icon: 'nf-fa-github'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/adambillardmusic',
        icon: 'nf-fa-instagram'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@adambillardofficial',
        icon: 'nf-fa-youtube'
    },
    {
        name: 'Mail',
        url: 'mailto:contact@classydev.fr',
        icon: 'nf-fa-envelope_o'
    }
];

const classes = computed(() => {
    return 'socials socials-' + props.place;
});
</script>

<template>
    <div :class="classes">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">
           <Icon :name="social.icon" />
        </a>
    </div>
</template>