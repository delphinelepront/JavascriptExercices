function citationGenerator() {
    //Déclarations variables
    var citations = ["Un seul être vous manque et tout est dépeuplé ", "Les seuls beaux yeux sont ceux qui vous regardent avec tendresse ","La vie est un mystère qu'il faut vivre, et non un problème à résoudre", "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre", "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie"];
    var numCitation = Math.floor(Math.random() * citations.length);
    var button = document.getElementById('button');
    var numCitation = '';

    //Affichage d'une alerte avec une citation aléatoire
    button.addEventListener("click", function () {
        numCitation = Math.floor(Math.random() * citations.length);
        var randomCitation = citations[numCitation];
        alert(randomCitation);
        return randomCitation;
    });

}

