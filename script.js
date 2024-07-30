document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        const dropdown = this.nextElementSibling;
        dropdown.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
    });

    btn.addEventListener('mouseleave', function () {
        const dropdown = this.nextElementSibling;
        dropdown.style.display = 'none';
        this.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-btn')) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
            d.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
    }
});
