// 1 Quels sont les différents bases de données atteignable via cette connexion ? Quelle commande permet de les afficher?
// Les différentes BDD atteignables via cette connexion sont les BDD de chaque groupe, celle nommée "exercices" et des BDD sample
// la commande qui permet de les afficher est :
// show dbs

// 2 Allez dans la BDD "exercices". Quelle commande permet de se déplacer à une nouvelle base de données. Que se passe-t-il si cette base n'existe pas ?
// La commande qui permet de se déplacer dans une nouvelle BDD est :
// use <nom de la BDD>
// Si cette base n'existe pas, il en crée une en local temporairement avec le nom spécifié


// 3 Quelles sont les différentes collections présentes dans cette BDD ? Quelle commande permet de les afficher.
// Les différentes collections présentes dans cette BDD sont bel20, cheeses, irons, laptops
// La commande permettant de les afficher est :
// show collections

// 4 Quelle est la commande nécessaire pour affichez la liste des documents d'une des collections.
// La commande nécessaire pour afficher la liste des documents d'une des collections est :
// db.<tableName>.find()

// Vous allez maintenant changer de BDD pour pouvoir travailler sur vos propres documents.
// Pour cela, utilisez la commande de la question 2 pour ouvrir la BDD qui porte les noms des membre de votre groupe ou le numéro de votre groupe.
// Si aucune BDD ne correspond à cette description, contactez-moi :)
