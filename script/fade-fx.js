document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('fade-fx');

    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.body.classList.add('fade-out');

        setTimeout(function() {
            window.location.href = link.href;
        }, 1000);
    });
});