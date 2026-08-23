let panier = [];

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


        ajouterArticle(nom, prix);

    });

});


function ajouterArticle(nom, prix) {

    let articleExiste = panier.find(
        article => article.nom === nom
    );


    if(articleExiste){

        articleExiste.quantite++;

    } else {

        panier.push({
            nom: nom,
            prix: prix,
            quantite: 1
        });

    }


    afficherPanier();

}



function afficherPanier(){

    listePanier.innerHTML = "";

    let total = 0;


    panier.forEach((article,index)=>{

        let sousTotal =
        article.prix * article.quantite;


        total += sousTotal;


        let ligne = document.createElement("div");


        ligne.innerHTML = `
        <p>
        ${article.nom}<br>
        ${article.quantite} x ${article.prix.toFixed(2)} €
        = ${sousTotal.toFixed(2)} €

        <button onclick="supprimerArticle(${index})">
        ❌
        </button>

        </p>
        `;


        listePanier.appendChild(ligne);


    });


    affichageTotal.textContent =
    total.toFixed(2);

}



function supprimerArticle(index){

    panier.splice(index,1);

    afficherPanier();

}
