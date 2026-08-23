let solde = 500;


let operations = [];



function afficher(){

document.getElementById("solde")
.textContent = solde.toFixed(2);



let liste =
document.getElementById("listeOperations");


liste.innerHTML = "";



if(operations.length === 0){

liste.innerHTML =
"Aucune opération";

return;

}



operations.forEach(op => {


let ligne =
document.createElement("p");


ligne.textContent =
op.type +
" : " +
op.description +
" " +
op.montant.toFixed(2)
+
" €";


liste.appendChild(ligne);



});


}




function ajouterRecette(){


let montant =
Number(document.getElementById("montant").value);



let description =
document.getElementById("description").value;



solde += montant;



operations.push({

type:"ENTRÉE",
description:description,
montant:montant

});



afficher();


}





function ajouterDepense(){


let montant =
Number(document.getElementById("montant").value);



let description =
document.getElementById("description").value;



solde -= montant;



operations.push({

type:"DÉPENSE",
description:description,
montant:montant

});



afficher();



}



afficher();
