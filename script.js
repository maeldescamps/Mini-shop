let panier = [];

const boutonsProduits = document.querySelectorAll(".produit");
const listePanier = document.getElementById("liste-panier");
const affichageTotal = document.getElementById("total");


// AJOUT DES PRODUITS

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




// AJOUTER UN ARTICLE AU PANIER

function ajouterArticle(nom, prix) {


    let existe = panier.find(
        article => article.nom === nom
    );


    if(existe){

        existe.quantite++;

    } else {


        panier.push({

            nom: nom,

            prix: prix,

            quantite: 1

        });


    }


    afficherPanier();

}





// AFFICHER LE PANIER

function afficherPanier(){


    listePanier.innerHTML = "";

    let total = 0;



    if(panier.length === 0){

        listePanier.innerHTML =
        "Aucun article";

    }



    panier.forEach((article,index)=>{


        let sousTotal =
        article.prix * article.quantite;


        total += sousTotal;



        let ligne = document.createElement("div");


        ligne.innerHTML = `

        <p>

        <b>${article.nom}</b><br>

        ${article.quantite} x 
        ${article.prix.toFixed(2)} €

        =
        ${sousTotal.toFixed(2)} €

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





// SUPPRIMER UN ARTICLE

function supprimerArticle(index){


    panier.splice(index,1);


    afficherPanier();

}







// OUVRIR PAIEMENT

function ouvrirPaiement(){


    document.getElementById("fenetrePaiement")
    .style.display="block";


    document.getElementById("totalPaiement")
    .textContent =
    affichageTotal.textContent;


}





// FERMER PAIEMENT

function fermerPaiement(){


    document.getElementById("fenetrePaiement")
    .style.display="none";


}







// PAIEMENT + TICKET

function payer(moyen){


    let numeroTicket =
    "TICKET-" + Date.now();



    let date =
    new Date().toLocaleString();



    let articlesTicket = "";



    panier.forEach(article => {


        articlesTicket +=
        `${article.quantite}x ${article.nom} - ${(article.prix * article.quantite).toFixed(2)} €\n`;


    });




    let ticket = {


        numero: numeroTicket,

        date: date,

        articles: articlesTicket,

        total: affichageTotal.textContent,

        paiement: moyen


    };





    localStorage.setItem(

        "dernierTicket",

        JSON.stringify(ticket)

    );






    alert(

`MINI SHOP 🛒

${ticket.numero}

${ticket.date}

----------------

${ticket.articles}

----------------

TOTAL : ${ticket.total} €

Paiement :
${ticket.paiement}


Merci de votre visite !`

    );





    panier = [];


    afficherPanier();


    fermerPaiement();



}







// HORLOGE

function afficherHeure(){


    let maintenant = new Date();


    document.getElementById("heure")
    .textContent =
    maintenant.toLocaleTimeString();


}


setInterval(afficherHeure,1000);


afficherHeure();
