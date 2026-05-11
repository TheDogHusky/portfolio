<script setup lang="ts">
const { locale, setLocale, locales } = useI18n();

const classes = (elementLocale: string) => {
    return {
        'dropdown-item': true,
        'active': locale.value === elementLocale
    };
};

const dropdownActive = ref(false);

const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
};

const closeDropdown = () => {
    dropdownActive.value = false;
};

const handleDropdownClick = (event: Event) => {
    if (!dropdownActive.value) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
        dropdownActive.value = false;
    }
};

const contentClasses = computed(() => {
    return {
        'dropdown-content': true,
        'active': dropdownActive.value
    };
});

onMounted(() => {
    window.addEventListener('click', handleDropdownClick);
});

onUnmounted(() => {
    window.removeEventListener('click', handleDropdownClick);
});
</script>

<template>
    <div class="dropdown">
        <button @click="toggleDropdown" class="dropbtn">{{ $t('language') }}</button>
        <div :class="contentClasses">
            <a href="#" v-for="locale in locales" :class="classes(locale.code)" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
                {{ locale.name }}
            </a>
        </div>
    </div>
</template>