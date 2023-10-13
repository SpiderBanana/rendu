// Définition du tueur en série Jason
const jason = {
    nom: 'Jason',
    pointsDeVie: 100,
  };
  
  // Tableau de caractéristiques de personnages
  const caracteristiques = ['nerd', 'sportif', 'blonde', 'brun', 'barbu', 'timide']
  
  // Fonction pour générer un nom aléatoire
  function genererNomAleatoire() {
    const prenoms = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack', 'Karen', 'Liam']
    return prenoms[Math.floor(Math.random() * prenoms.length)]
  }
  
  // Fonction pour générer une caractéristique aléatoire
  function genererCaracteristiqueAleatoire() {
    return caracteristiques[Math.floor(Math.random() * caracteristiques.length)]
  }
  
  // Création de 5 survivants
  const survivants = [];
  for (let i = 0; i < 5; i++) {
    const survivant = {
      nom: genererNomAleatoire(),
      caracteristique: genererCaracteristiqueAleatoire(),
      probaMourir: 0.2, 
      probaInfligerDegats: 0.5, 
      probaMourirEnInfligeantDegats: 0.2, 
      enVie: true,
    }
    survivants.push(survivant)
  }
  
  // Fonction pour simuler une attaque du tueur
  function attaquerSurvivant(survivant) {
    const action = Math.random()
    if (action <= survivant.probaMourir) {
      survivant.enVie = false
      console.log(jason.nom+" a tué "+survivant.nom)
    } else if (action <= survivant.probaInfligerDegats) {
      jason.pointsDeVie -= 10
      console.log(survivant.nom+" a esquivé et a infligé 10 points de dégâts à "+jason.nom)
    } else if (action <= survivant.probaMourirEnInfligeantDegats) {
      jason.pointsDeVie -= 15
      survivant.enVie = false
      console.log(survivant.nom+" a infligé 15 points de dégâts à "+jason.nom+" mais est mort en le faisant")
    }
  }
  
  // Boucle principale de simulation
  while (jason.pointsDeVie > 0 && survivants.some((survivant) => survivant.enVie)) {
    const survivantVivant = survivants.filter((survivant) => survivant.enVie)
    const survivantCible = survivantVivant[Math.floor(Math.random() * survivantVivant.length)]
    attaquerSurvivant(survivantCible)
  }
  
  // Affichage des survivants morts
  const survivantsMorts = survivants.filter((survivant) => !survivant.enVie)
  console.log('Les morts sont :'+ survivantsMorts.map((survivant) => survivant.nom).join(', '))
  
  // Affichage du résultat
  if (jason.pointsDeVie <= 0) {
    console.log('Les survivants ont gagné, mais RIP à'+ survivantsMorts.map((survivant) => survivant.nom).join(', '))
  } else {
    console.log('Jason a tué tous les survivants.')
  }
  