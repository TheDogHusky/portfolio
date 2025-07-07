<template>
    <div class="experience-resume">
        <div data-aos="fade-right" class="experience">
            <h3>{{ $t('experiences.middleSchool') }}</h3>
            <p>2017 - 2021</p>
        </div>
        <div data-aos="fade-left" class="sub-experience">
            <h3>{{ $t('experiences.internships.orange') }}</h3>
            <p>{{ $t('week', 1) }}</p>
        </div>
        <div data-aos="fade-right" class="experience">
            <h3>{{ $t('experiences.highSchool') }}</h3>
            <p>2021 - {{ $t('now') }}</p>
        </div>
        <div data-aos="fade-left" class="sub-experience">
            <h3>{{ $t('experiences.internships.duros') }}</h3>
            <p>{{ $t('week', 2) }}</p>
        </div>
    </div>
</template>