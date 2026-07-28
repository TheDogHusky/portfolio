<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer role="contentinfo" data-aos="fade-up" data-aos-anchor="#contact" data-aos-anchor-placement="top-center">
        <div class="footer-texts">
            <p>{{ $t('footer.left', { year: currentYear }) }}</p>
            <p>{{ $t('footer.right') }}</p>
        </div>
        <Socials place="footer" />
    </footer>
</template>