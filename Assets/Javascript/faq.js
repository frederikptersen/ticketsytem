document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});