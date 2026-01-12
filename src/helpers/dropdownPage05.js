function initDropdowns() {
    const dropdownButtons = document.querySelectorAll('.service-dropdown');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceDocument = this.parentElement;

            const serviceContent = serviceDocument.querySelector('.service-content');

            const iconOpen = this.querySelector('.icon-open');
            const iconClosed = this.querySelector('.icon-closed');

            const isOpen = serviceContent.classList.toggle('open');

            if (isOpen) {
                iconOpen.style.display = 'none';
                iconClosed.style.display = 'block';
            } else {
                iconOpen.style.display = 'block';
                iconClosed.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.service-document').forEach(service => {
        const iconOpen = service.querySelector('.icon-open');
        const iconClosed = service.querySelector('.icon-closed');

        iconOpen.style.display = 'block';
        iconClosed.style.display = 'none';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDropdowns);
} else {
    initDropdowns();
}