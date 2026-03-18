document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = document.getElementById('loader');
    const successMessage = document.getElementById('successMessage');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Start loading state
        submitBtn.disabled = true;
        btnText.style.opacity = '0';
        loader.style.display = 'block';

        // EmailJS Integration
        emailjs.sendForm('service_cmiyrtz', 'template_yiujdbr', form)
            .then(() => {
                // Show success state
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }, (error) => {
                alert('Failed to send message. Please try again later.');
                console.log('FAILED...', error);
                
                // Reset button state on failure
                submitBtn.disabled = false;
                btnText.style.opacity = '1';
                loader.style.display = 'none';
            });
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        form.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.opacity = '1';
        loader.style.display = 'none';
    });
});
