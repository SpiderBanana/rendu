
// Définition du personnage
const personnage = {
  prenom: "John",
  pv: 10,
};

// Liste de musiques
const musiques = ["Musique 1", "Musique 2", "Musique 3", "Musique 4", "Anissa - Wejdene"];

// Définition du trajet
const trajet = {
  radio: musiques[Math.floor(Math.random() * 5)],
  feuxRestants: 30,
  changements: 0,
};

// Fonction pour afficher l'état à chaque feu rouge
function afficherEtat() {
  console.log("Musique : "+trajet.radio+", Feux restants : "+trajet.feuxRestants);
}

// Boucle pour simuler le trajet
while (trajet.feuxRestants > 0 && personnage.pv > 0) {
  afficherEtat();
  trajet.radio = musiques[Math.floor(Math.random() * 5)]; // Changer de musique à chaque feu rouge
  if (trajet.radio === "Anissa - Wejdene") {
    personnage.pv -= 1;
    trajet.changements += 1;
  }
  trajet.feuxRestants -= 1;
}

// Vérifier la fin du trajet
if (trajet.feuxRestants === 0) {
  console.log("John est bien arrivé chez lui après "+trajet.changements+ " changements de taxi.");
} else {
  console.log("Explosion");
}