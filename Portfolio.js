// Sélectionne tous les boutons copier
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy'); // texte à copier

        // Copier dans le presse-papiers
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Changer le texte du bouton temporairement
                const originalText = button.textContent;
                button.textContent = 'Copié !';

                // Ajout d'une petite animation de fade-out/fade-in
                button.style.transition = 'transform 0.1s, background 0.2s, color 0.2s';
                button.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 150);

                // Revenir au texte original après 1.5s
                setTimeout(() => {
                    button.textContent = originalText;
                }, 1500);
            })
            .catch(err => {
                console.error('Erreur copie : ', err);
            });
    });
});
