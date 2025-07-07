<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: 'Adam Billard, full-stack developer'
});

const projects = [
    {
        name: 'Portfolio',
        description: t('projects.portfolioDescription'),
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/TheDogHusky/portfolio',
                icon: 'nf-fa-github'
            },
            {
                name: t('visit'),
                url: 'https://classydev.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: 'Music Portfolio',
        description: t('projects.musicDescription'),
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/TheDogHusky/music',
                icon: 'nf-fa-github'
            },
            {
                name: t('visit'),
                url: 'https://music.classydev.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: "Home-Clock",
        description: t('projects.homeclockDescription'),
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/TheDogHusky/home-clock',
                icon: 'nf-fa-github'
            },
            {
                name: t('visit'),
                url: 'https://clock.classydev.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: "Docker-Watch",
        description: t('projects.dockerwatchDescription'),
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/TheDogHusky/docker-watch',
                icon: 'nf-fa-github'
            }
        ]
    },
    {
        name: 'Hestia',
        description: t('projects.hestiaDescription'),
        links: [
            {
                name: t('visit'),
                url: 'https://project-hestia.me',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: 'nathanpradel.fr',
        description: t('projects.nathanDescription'),
        links: [
            {
                name: t('visit'),
                url: 'https://nathanpradel.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    }
];
</script>

<template>
    <main class="container child-extend px-4" id="home">
        <NuxtImg data-aos="fade-down" alt="logo" format="webp" src="/logo.webp" height="720" width="720" class="main-logo" />
        <div class="main-header">
            <i18n-t scope="global" keypath="title" data-aos="fade-right" tag="h1" class="title">
                <template v-slot:name><span class="title-special">Adam</span></template>
            </i18n-t>
            <Socials data-aos="fade-up" place="header" />
        </div>
        <ScrollButton scrollTarget="about" />
    </main>
    <section id="about" class="container bg-darker gap-3 px-4">
        <i18n-t scope="global" keypath="aboutme.title" data-aos="fade-left" tag="h1" class="title">
            <template v-slot:me><span class="title-special">{{ $t('me') }}</span></template>
        </i18n-t>
        <p class="about-p" data-aos="fade-up">
            <i18n-t scope="global" keypath="aboutme.about1" tag="span">
                <template v-slot:huskybotLink><a href="https://github.com/TheDogHusky/huskybot" rel="noreferrer" target="_blank">HuskyBot</a></template>
            </i18n-t> <br/>
            {{ $t('aboutme.about2') }} <br/>
            {{ $t('aboutme.about3') }}
        </p>
    </section>
    <section class="container gap-3 p-4" id="projects">
        <i18n-t scope="global" keypath="projects.title" data-aos="fade-right" tag="h1" class="title">
          <template v-slot:projects><span class="title-special">{{ $t('projectsLabel') }}</span></template>
        </i18n-t>
        <ul class="projects">
            <li v-for="project in projects" :key="project.name" class="project" data-aos="fade-up">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <ul class="project-links">
                    <li v-for="link in project.links" :key="link.name">
                        <a :href="link.url" target="_blank" class="btn btn-primary" rel="noopener noreferrer">
                            <Icon :name="link.icon" />
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
    <section class="container gap-3 p-4 bg-darker" id="experience">
        <i18n-t scope="global" keypath="experiences.title" data-aos="fade-left" tag="h1" class="title">
          <template v-slot:experiences><span class="title-special">{{ $t('experiencesLabel') }}</span></template>
        </i18n-t>
        <ExperienceResume />
    </section>
    <section class="container gap-3 p-4" id="contact">
        <i18n-t scope="global" keypath="contact.title" data-aos="fade-right" tag="h1" class="title">
            <template v-slot:me><span class="title-special">{{ $t('contact.me') }}</span></template>
        </i18n-t>
        <ContactForm data-aos="fade-right" />
    </section>
</template>