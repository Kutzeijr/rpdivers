// Contrôle du son ambiant
const audio = document.getElementById('ambient-sound');
const button = document.getElementById('submit-button');
const parchment = document.getElementById('parchment');
const content = document.querySelector('.content');

// Fonction pour démarrer l'audio au chargement de la page
audio.volume = 0.5;
audio.play();

// Fonction pour l'animation d'explosion et transformation du contenu
button.addEventListener('click', () => {
    // Créer l'effet d'explosion et animation de révélation
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    document.body.appendChild(explosion);

    // Ajouter l'effet de lumière et déformation de la révélation
    parchment.classList.add('reveal');

    // On cache le contenu de l'énigme avec un fondu
    content.classList.add('hidden');

    // Modifier le contenu après l'animation
    setTimeout(() => {
        explosion.remove(); // Retirer l'explosion après l'animation
        content.innerHTML = "<h2>Le retour des Sith est imminent...</h2><p>Les ténèbres s'étendent et la Force se réveille. Le moment est venu.</p>";
        content.classList.remove('hidden'); // Réafficher le contenu modifié
    }, 2000); // Délai de 2s pour laisser le temps à l'animation d'explosion de se terminer
});
