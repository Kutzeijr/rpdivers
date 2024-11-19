document.getElementById('submit-button').addEventListener('click', function() {
    // Masquer la première page
    document.getElementById('page-1').classList.add('hidden');
    
    // Afficher la deuxième page
    const page2 = document.getElementById('page-2');
    page2.style.display = 'block';
    
    // Lancer l'audio de fond
    const audio = document.getElementById('ambient-sound');
    audio.play();
    
    // Déclencher l'animation du discours défilant
    setTimeout(function() {
        page2.classList.remove('hidden');
    }, 1000);
});

// Contrôle du volume de l'audio
document.getElementById('volume').addEventListener('input', function(e) {
    const audio = document.getElementById('ambient-sound');
    audio.volume = e.target.value;
});
