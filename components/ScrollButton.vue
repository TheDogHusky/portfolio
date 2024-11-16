<script setup lang="ts">
const props = defineProps<{
    scrollTarget: string;
}>();
</script>

<template>
    <a :href="'#' + props.scrollTarget" class="scroll-button" role="button"><Icon name="nf-md-arrow_down_circle" /></a>
</template>