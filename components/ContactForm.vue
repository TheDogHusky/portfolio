<script setup lang="ts">
const submitForm = async (event: Event) => {
    event.preventDefault();
    const loadingToast = useToastify.loading('Sending message...', {
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
    }).catch(() => null);
    if (!res) {
        useToastify.update(loadingToast, {
            type: 'error',
            render: 'An error occurred while sending the message. Please try again later.'
        });
        return;
    }

    useToastify.update(loadingToast, {
        type: 'success',
        render: 'Message sent successfully!'
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
            <label for="name">Name</label>
            <input placeholder="Adam Billard" type="text" id="name" name="name" required min="2" max="50" />
        </div>
        <div class="form-field">
            <label for="email">Email</label>
            <input placeholder="user@example.com" type="email" id="email" name="email" required max="50" />
        </div>
        <div class="form-field">
            <label for="message">Message</label>
            <textarea @input="resize" placeholder="Hello, .." id="message" name="message" required minlength="10" maxlength="1500"></textarea>
        </div>
        <button class="btn btn-secondary" type="submit">Send</button>
    </form>
</template>