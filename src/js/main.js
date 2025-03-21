// Subscribe form handling
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('.mil-subscribe-form');
    const emailInput = subscribeForm?.querySelector('input[type="text"]');

    if (subscribeForm && emailInput) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                emailInput.value = 'Please enter your email';
                emailInput.style.color = '#ff4444';
                setTimeout(() => {
                    emailInput.value = '';
                    emailInput.style.color = '';
                }, 2000);
                return;
            }
            
            if (!emailRegex.test(email)) {
                emailInput.value = 'Please enter a valid email';
                emailInput.style.color = '#ff4444';
                setTimeout(() => {
                    emailInput.value = email;
                    emailInput.style.color = '';
                }, 2000);
                return;
            }

            // Show success message
            emailInput.value = 'Thanks for subscribing!';
            emailInput.style.color = '#28a745';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                emailInput.value = '';
                emailInput.style.color = '';
            }, 3000);
        });

        // Clear error message when user starts typing
        emailInput.addEventListener('focus', function() {
            if (['Please enter your email', 'Please enter a valid email', 'Thanks for subscribing!'].includes(this.value)) {
                this.value = '';
                this.style.color = '';
            }
        });
    }
}); 