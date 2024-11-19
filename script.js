// Récupérer l'élément audio et le contrôle de volume
const audio = document.getElementById('ambient-sound');
const volumeControl = document.getElementById('volume');

// Ajouter un écouteur d'événements pour démarrer l'audio à un clic
document.getElementById('submit-button').addEventListener('click', () => {
    audio.play();  // Commence à jouer le son
});

// Démarrer avec un volume initial de 50%
audio.volume = volumeControl.value;

// Ajuster le volume en fonction de la barre de contrôle
volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value;
});
