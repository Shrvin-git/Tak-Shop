//  ==== Accordion Handling
document.querySelectorAll('.accordion-toggle').forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const arrow = btn.querySelector('.arrow');

        const isOpen = panel.classList.contains('open');
        
        // اگر چندتا آیتم همزمان باز نباید باشن، ابتدا همه رو ببند:
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

        if (!isOpen) {
            panel.classList.add('open');
            arrow.classList.add('open');
        }
    });
});
