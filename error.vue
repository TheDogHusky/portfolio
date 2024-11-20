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
    <main class="container gap-3 p-4">
        <div>
            <h1 class="text-6xl">{{ error?.statusCode || 501 }}</h1>
            <p>{{ error?.message || 'An error occurred' }}</p>
        </div>
        <button class="btn btn-success" @click="handleError">Go back home</button>
    </main>
</template>