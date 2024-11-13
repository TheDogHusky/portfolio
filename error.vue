<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });

useHead({
    title: 'Error',
    meta: [
        {
            name: 'robots',
            content: 'noindex'
        }
    ]
});
</script>

<template>
    <main class="container">
        <h2>{{ error?.statusCode || 501 }}</h2>
        <p>{{ error?.message || 'An error occurred' }}</p>
        <button @click="handleError">Go back home</button>
    </main>
</template>