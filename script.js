// Récupérer l'élément audio et le contrôle de volume
const audio = document.getElementById('ambient-sound');
const volumeControl = document.getElementById('volume');

// Commencer l'audio avec un volume par défaut de 50%
audio.volume = volumeControl.value; // Valeur initiale de 50% de volume
audio.play(); // Démarrer le son

// Ajouter un écouteur d'événements pour changer le volume
volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value; // Met à jour le volume selon la position du curseur
});
