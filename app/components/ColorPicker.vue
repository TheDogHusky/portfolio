<script setup lang="ts">
const { currentColor, applyTheme } = useTheme();
</script>

<template>
    <input class="color-picker" type="color" v-model="currentColor" @input="applyTheme(currentColor)" />
</template>