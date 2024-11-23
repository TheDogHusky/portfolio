<script setup lang="ts">
useHead({
    title: 'Adam Billard, full-stack developer'
});

const projects = [
    {
        name: 'Portfolio',
        description: 'My personal portfolio, made with Nuxt.js and Tailwind CSS.',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/TheDogHusky/portfolio',
                icon: 'nf-fa-github'
            },
            {
                name: 'Visit',
                url: 'https://classydev.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: "NekoNya",
        description: "An anime-themed website with a few functionalities such as a public API.",
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/NekoNyaDevs',
                icon: 'nf-fa-github'
            },
            {
                name: 'Visit',
                url: 'https://nekonya.classydev.fr',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: 'Hestia',
        description: 'A Discord community that I made a website for.',
        links: [
            {
                name: 'Visit',
                url: 'https://project-hestia.me',
                icon: 'nf-fa-external_link'
            }
        ]
    },
    {
        name: 'nathanpradel.fr',
        description: 'A website for a friend of mine, to showcase his photographic work.',
        links: [
            {
                name: 'Visit',
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
            <h1 data-aos="fade-right" class="title">Hey, I'm <span class="title-special">Adam</span>.</h1>
            <Socials data-aos="fade-up" place="header" />
        </div>
        <ScrollButton scrollTarget="about" />
    </main>
    <section id="about" class="container bg-darker gap-3 px-4">
        <h2 data-aos="fade-left">About <span class="title-special">me</span></h2>
        <p class="about-p" data-aos="fade-up">
            I'm a full-stack 16 years old developer from France. I started coding when I was 13 with Java, then learned JavaScript with Codecademy, making a Discord Bot (<a href="https://github.com/TheDogHusky/huskybot" rel="noreferrer" target="_blank">HuskyBot</a>). <br/>
            Then I started making websites with Express and EJS, and now I'm using Nuxt.js and Express. <br/>
            I'm passionate about web development and I love to create beautiful and efficient websites.
        </p>
    </section>
    <section class="container gap-3 p-4" id="projects">
        <h2 data-aos="fade-right">My <span class="title-special">projects</span></h2>
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
        <h2 data-aos="fade-left">My <span class="title-special">experience</span></h2>
        <ExperienceResume />
    </section>
    <section class="container gap-3 p-4" id="contact">
        <h2 data-aos="fade-right">Contact <span class="title-special">me</span></h2>
        <ContactForm data-aos="fade-right" />
    </section>
</template>