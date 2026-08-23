let panier = [];
let total = 0;


const boutonsProduits = document.querySelectorAll(".produit");
const listePanier = document.getElementById("liste-panier");
const affichageTotal = document.getElementById("total");


boutonsProduits.forEach(bouton => {

    bouton.addEventListener("click", () => {

        let texte = bouton.innerText;

        let nom = texte.split(" - ")[0];
        let prix = parseFloat(
            texte.split(" - ")[1]
                .replace("€", "")
        );


        panier.push({
            nom: nom,
            prix: prix
        });


        total += prix;

        afficherPanier();

    });

});


function afficherPanier() {

    listePanier.innerHTML = "";

    panier.forEach(article => {

        let ligne = document.createElement("p");

        ligne.textContent =
        article.nom + " - " + article.prix.toFixed(2) + " €";

        listePanier.appendChild(ligne);

    });


    affichageTotal.textContent =
    total.toFixed(2);

}



// Affiche l'heure

function afficherHeure(){

    let maintenant = new Date();

    document.getElementById("heure").textContent =
    maintenant.toLocaleTimeString();

}

setInterval(afficherHeure,1000);

afficherHeure();
