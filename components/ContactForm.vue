<script setup lang="ts">
const { t } = useI18n();

const submitForm = async (event: Event) => {
    event.preventDefault();
    const loadingToast = useToastify.loading(t('contact.sending'), {
        autoClose: false
    });

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const res = await $fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch((err) => {
        if (err.data.statusCode !== 400) return null;
        useToastify.update(loadingToast, {
            type: 'error',
            render: t('contact.errors.fields'),
            autoClose: true,
            closeOnClick: true,
            isLoading: false
        });
    });
    if (!res) {
        useToastify.update(loadingToast, {
            type: 'error',
            render: t('contact.errors.general'),
            autoClose: true,
            closeOnClick: true,
            isLoading: false
        });
        return;
    }

    useToastify.update(loadingToast, {
        type: 'success',
        render: t('contact.success'),
        autoClose: true,
        closeOnClick: true,
        isLoading: false
    });
    form.reset();
};

const validateForm = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.validity.valid) {
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    }
};

const resize = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
};
</script>

<template>
    <form @input="validateForm" @submit.prevent="submitForm" class="contact-form">
        <div class="form-field">
            <label for="name">{{ $t('nameLabel') }}</label>
            <input placeholder="Adam Billard" type="text" id="name" name="name" required min="2" max="50" />
        </div>
        <div class="form-field">
            <label for="email">{{ $t('emailLabel') }}</label>
            <input placeholder="user@example.com" type="email" id="email" name="email" required max="50" />
        </div>
        <div class="form-field">
            <label for="message">{{ $t('messageLabel') }}</label>
            <textarea @input="resize" placeholder="Hello, .." id="message" name="message" required minlength="10" maxlength="1500"></textarea>
        </div>
        <button class="btn btn-secondary" type="submit">{{ $t('send') }}</button>
    </form>
</template>