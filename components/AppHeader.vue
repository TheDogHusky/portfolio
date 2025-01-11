<script setup lang="ts">
const isActive = ref(false);
const navbarClass = ref('navbar');

const toggleState = () => {
    isActive.value = !isActive.value;
};

const handleScroll = () => {
    navbarClass.value = window.scrollY > 0 ? 'navbar transparent' : 'navbar';
};

const navButtonClasses = computed(() => {
    return isActive.value ? 'navbar-expand-btn active' : 'navbar-expand-btn';
});
const navItemsClasses = computed(() => {
    return isActive.value ? 'navbar-items active' : 'navbar-items';
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header>
        <nav :class="navbarClass">
            <div class="navbar-brand">
                <NuxtImg alt="logo" src="/logo.webp" width="40" height="40" />
                <h1 class="title-special">Adam Billard</h1>
            </div>
            <div @click="toggleState" :class="navButtonClasses">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div :class="navItemsClasses">
                <NuxtLink to="#home">{{ $t('home') }}</NuxtLink>
                <NuxtLink to="#about">{{ $t('about') }}</NuxtLink>
                <NuxtLink to="#projects">{{ $t('projectsNav') }}</NuxtLink>
                <NuxtLink to="#experience">{{ $t('experiencesNav') }}</NuxtLink>
                <NuxtLink to="#contact">{{ $t('contactNav') }}</NuxtLink>
                <LanguageDropdown />
            </div>
        </nav>
    </header>
</template>