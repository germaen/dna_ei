document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('article-style');

    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.body.classList.add('fade-in');

        setTimeout(function() {
            window.location.href = link.href;
        }, 1000);
    });
});