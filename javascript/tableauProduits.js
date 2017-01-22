/*définition de variables*/
var tbody = document.getElementById('tbody'),
	tableau = document.getElementById('tableau'),
	containerAff = document.getElementById("containerAff");

/*Fonction qui crée le tableau d'affichage des produits*/
function creerTableau(docs, i) {

	/*Création des cellules nom*/
    var celluleNom = document.createElement('td');
    celluleNom.id = "nom" + docs[i]._id;
    celluleNom.textContent = docs[i].nom;

	/*Création des cellules quantitée*/
    var celluleQte = document.createElement('td');
    celluleQte.id = "qte" + docs[i]._id;
    celluleQte.textContent = docs[i].qte;
    celluleQte.style.textAlign = "right";

	/*Création des cellules prix*/
    var cellulePrix = document.createElement('td');
    cellulePrix.id = "prix" + docs[i]._id;
    cellulePrix.textContent = docs[i].prix;
    cellulePrix.style.textAlign = "right";

	/*Création des cellules catégorie*/
    var celluleCatego = document.createElement('td');
    celluleCatego.id = "catego" + docs[i]._id;
    celluleCatego.textContent = docs[i].categorie;
    celluleCatego.style.textAlign = "right";

	/*Si la cellule catégorie est vide, elle affichera "Non répertorié"*/
    if (celluleCatego.textContent == ""){
        celluleCatego.textContent = "Non répertorié";
        celluleCatego.style.color = "red";
    }

	/*Création des cellules oui ou non pour l'affichage dans la liste de course*/
    var celluleCheck = document.createElement('td');
    celluleCheck.id = "check" + docs[i]._id;
    celluleCheck.textContent = docs[i].check;
    celluleCheck.style.textAlign = "right";

	/*Création des cellules pour la quantité avant rappel dans la liste de course*/
    var celluleQteRappel = document.createElement('td');
    celluleQteRappel.id = "qteRappel" + docs[i]._id;
    celluleQteRappel.textContent = docs[i].qteRappel;
    celluleQteRappel.style.textAlign = "right";

	/*Création du bouton de modification de produit*/
    var btnUpdate = document.createElement('button');
    btnUpdate.textContent = "";
    btnUpdate.className = "fa fa-pencil btnUpClass btnTab";
    btnUpdate.name = "Upbtn";
    btnUpdate.id = docs[i]._id;
    btnUpdate.style.color = "#00d8ff";
    btnUpdate.style.width = "50%";

	/*Création du bouton de suppression de produit*/
    var btnSuppr = document.createElement('button');
    btnSuppr.textContent = "";
    btnSuppr.className = "fa fa-trash btnTab";
    btnSuppr.name = "Supprbtn";
    btnSuppr.id = "suppr" + docs[i]._id;
    btnSuppr.style.color = "#ff0000";
    btnSuppr.style.width = "50%";

	/*Création du bouton d'annulation de modif du produit*/
    var btnClose = document.createElement('button');
    btnClose.className = "fa fa-times btnTab";
    btnClose.id = "btn" + docs[i]._id;
    btnClose.style.display = "none";
    btnClose.style.color = "#ff0000";
    btnClose.style.width = "50%";

	/*Création du bouton de validation de modif du produit*/
    var btnValid = document.createElement('button');
    btnValid.className = "fa fa-check btnTab";
    btnValid.id = "valid" + docs[i]._id;
    btnValid.style.display = "none";
    btnValid.style.color = "#00ff00";
    btnValid.style.width = "50%";

	/*Création des cellules pour les boutons de modif et de suppr*/
    var update = document.createElement('td');
    update.style.textAlign = "center";
    update.appendChild(btnUpdate);
    update.appendChild(btnSuppr);
    update.appendChild(btnValid);
    update.appendChild(btnClose);

	/*Création de la ligne produit du tableau*/
    var ligneTab = document.createElement('tr');
    ligneTab.appendChild(celluleNom);
    ligneTab.appendChild(celluleQte);
    ligneTab.appendChild(cellulePrix);
    ligneTab.appendChild(celluleCatego);
    ligneTab.appendChild(celluleCheck);
    ligneTab.appendChild(celluleQteRappel);
    ligneTab.appendChild(update);

    tbody.appendChild(ligneTab);

    tableau.appendChild(tbody);

    var upEventBtn = document.getElementById(docs[i]._id),
    	closeEventBtn = document.getElementById("btn" + docs[i]._id),
    	validEventBtn = document.getElementById("valid" + docs[i]._id),
    	supprEventBtn = document.getElementById("suppr" + docs[i]._id);

	/*Création de l'input de modification de nom*/
    var upCelluleNom = document.getElementById("nom" + docs[i]._id);
    var inputNom = document.createElement('input');
    inputNom.id = "inputNom" + docs[i]._id;
    inputNom.type = "text";
    inputNom.className = "inputText";
    inputNom.value = docs[i].nom;
    inputNom.style.margin = "0";
    inputNom.style.color = "#a50000";

	/*Création de l'input de modification de quantité*/
    var upCelluleQte = document.getElementById("qte" + docs[i]._id);
    var inputQte = document.createElement('input');
    inputQte.type = "number";
    inputQte.className = "inputText";
    inputQte.id = "allQteModif" + docs[i]._id;
    inputQte.value = docs[i].qte;
    inputQte.style.margin = "0";
    inputQte.style.color = "#a50000";

	/*Définition des variables de boutons pour la modif de toutes les quantités*/
	var	modifAllQte = document.getElementById("modifQte"),
    	cancelModifQte = document.getElementById("cancelModifQte"),
    	validModifQte = document.getElementById("validModifQte");

	/*Fonction lors du clique bouton de modif de toutes les quantité*/
    modifAllQte.addEventListener("click", function () {

		/*Affichage des btn annuler et valider*/
        cancelModifQte.style.display = "inline";
        validModifQte.style.display = "inline";
		/*Disparition du btn modifier*/
        modifAllQte.style.display = "none";

		/*Boucle pour afficher les inputs à la place des quantités*/
        for (var i = 0; i < docs.length; i++) {
            upCelluleQte.innerHTML = "";
            upCelluleQte.appendChild(inputQte);
        }

    }, false);

	/*Fonction lors du clique bouton de validation de modif de toutes les quantité*/
    validModifQte.addEventListener("click", function () {

		/*Boucle pour modifier les quantités dans la bdd*/
        for (var i = 0; i < docs.length; i++) {

            db.update({
                _id: docs[i]._id
            }, {
                $set: {
                    qte: document.getElementById("allQteModif" + docs[i]._id).value
                }
            }, {
                multi: true
            }, function (err, numReplaced) {});

        }

        location.reload();

    }, false);

	/*Fonction lors du clique bouton d'annulation de modif de toutes les quantité*/
    cancelModifQte.addEventListener("click", function () {
		/*Retour à la normal*/
        upCelluleQte.innerHTML = docs[i].qte;
        cancelModifQte.style.display = "none";
        validModifQte.style.display = "none";
        modifAllQte.style.display = "inline";

    }, false);

	/*Création de l'input de modification de prix*/
    var upCellulePrix = document.getElementById("prix" + docs[i]._id);
    var inputPrix = document.createElement('input');
    inputPrix.type = "number";
    inputPrix.className = "inputText";
    inputPrix.step = "0.01";
    inputPrix.value = docs[i].prix;
    inputPrix.style.margin = "0";
    inputPrix.style.color = "#a50000";

	/*Création de l'input de modification de catégorie*/
    var upCelluleCatego = document.getElementById("catego" + docs[i]._id);
    upCelluleCatego.style.textAlign = "center";
    var inputCatego = document.createElement('select');
    inputCatego.style.margin = "0";
    inputCatego.style.padding = "15px";
    inputCatego.style.color = "#a50000";
    var optionCatego = document.createElement('option');
    optionCatego.textContent = docs[i].categorie;
    optionCatego.selected = true ;

	/*Fonction qui affiche les différentes catégories dans le select*/
    dbCategories.find({}, function (err, docs) {

        for (var i = 0; i < docs.length; i++) {
            inputCatego.appendChild(creerOptionCatego(docs, i));
            inputCatego.appendChild(optionCatego);
        };

    });

	/*Création de l'input de modification "oui ou non pour l'affichage dans la liste de course" */
    var upCelluleCheck = document.getElementById("check" + docs[i]._id);
    upCelluleCheck.style.textAlign = "center";
    var option1 = document.createElement('option');
    option1.textContent = "Oui";
    var option2 = document.createElement('option');
    option2.textContent = "Non";
    var inputCheck = document.createElement('select');
    inputCheck.style.margin = "0";
    inputCheck.style.padding = "15px";
	inputCheck.style.color = "#a50000";
    inputCheck.appendChild(option1);
    inputCheck.appendChild(option2);
    if (docs[i].check == "Oui") {
        option1.selected = true;
        option2.selected = false;
    } else {
        option1.selected = false;
        option2.selected = true;
    }

	/*Création de l'input de modification de quantité de rappel*/
    var upCelluleQteRappel = document.getElementById("qteRappel" + docs[i]._id);
    var inputQteRappel = document.createElement('input');
    inputQteRappel.type = "number";
    inputQteRappel.className = "inputText";
    inputQteRappel.value = docs[i].qteRappel;
    inputQteRappel.style.margin = "0";
    inputQteRappel.style.color = "#a50000";

	/*Fonction lors du clique bouton pour la validation des modif du produit */
    validEventBtn.addEventListener("click", function () {

		/*si les inputs de quantité, de prix et de quantité de rappel sont vide ou < à 0, 0 sera enregistré dans la bdd*/
        if (inputQte.value < 0) {
            inputQte.value = 0;
        } else if (inputQte.value == "") {
            inputQte.value = 0;
        }

        if (inputPrix.value < 0) {
            inputPrix.value = 0
        } else if (inputPrix.value == "") {
            inputPrix.value = 0;
        }

        if (inputQteRappel.value < 0) {
            inputQteRappel.value = 0
        }

        var x = inputCatego.selectedIndex,
        	selectValue = upCelluleCatego.getElementsByTagName("option")[x].value;

        db.update({
            _id: docs[i]._id
        }, {
            $set: {
                nom: inputNom.value,
                qte: inputQte.value,
                prix: inputPrix.value,
                categorie: selectValue,
                qteRappel: inputQteRappel.value,
                check: inputCheck.value
            }
        }, {
            multi: true
        }, function (err, numReplaced) {});

        location.reload();

    }, false);

	/*Fonction lors du clique bouton pour la suppression du produit */
    supprEventBtn.addEventListener("click", function () {

        var confirmation = confirm("Voulez vous vraiment supprimer le produit " + docs[i].nom + " ?", "Gestion de courses");

		/*Si l'utilisateur confirme la suppression, le produit est supprimé de la bdd*/
        if (confirmation) {
            db.remove({
                _id: docs[i]._id
            }, {}, function (err, numRemoved) {});
            location.reload();
        }

    }, false);


	/*Fonction lors du clique bouton pour la modif d'un produit*/
    btnUpdate.addEventListener("click", function () {

		/*Boucle pour grisé et désactivé les boutons de modif qui ne sont pas celui du produit selectionné*/
        for (var i = 0; i < docs.length; i++) {
            document.getElementsByName("Upbtn")[i].disabled = true;
            document.getElementsByName("Upbtn")[i].style.color = "#aaaaaa";
            document.getElementsByName("Supprbtn")[i].disabled = true;
            document.getElementsByName("Supprbtn")[i].style.color = "#aaaaaa";
        };

    }, false);

	/*Fonction lors du clique bouton pour annuler la modif d'un produit*/
    btnClose.addEventListener("click", function () {
		/*Boucle pour dégrisé et activé les boutons de modif qui ne sont pas celui du produit selectionné*/
        for (var i = 0; i < docs.length; i++) {
            document.getElementsByName("Upbtn")[i].disabled = false;
            document.getElementsByName("Upbtn")[i].style.color = "#00d8ff";
            document.getElementsByName("Supprbtn")[i].disabled = false;
            document.getElementsByName("Supprbtn")[i].style.color = "#ff0000";
        };

    }, false);

	/*Fonction lors du clique bouton pour la modif du produit*/
    upEventBtn.addEventListener("click", function () {

        btnClose.style.display = "inline";
        btnValid.style.display = "inline";
        btnUpdate.style.display = "none";
        btnSuppr.style.display = "none";

        upCelluleNom.innerHTML = "";
        upCelluleNom.appendChild(inputNom);

        upCelluleQte.innerHTML = "";
        upCelluleQte.appendChild(inputQte);

        upCellulePrix.innerHTML = "";
        upCellulePrix.appendChild(inputPrix);

        upCelluleCatego.innerHTML = "";
        upCelluleCatego.appendChild(inputCatego);

        upCelluleCheck.innerHTML = "";
        upCelluleCheck.appendChild(inputCheck);

        upCelluleQteRappel.innerHTML = "";
        upCelluleQteRappel.appendChild(inputQteRappel);

		/*Fonction lors du clique bouton pour annuler la modif du produit*/
        closeEventBtn.addEventListener("click", function () {
            upCelluleNom.innerHTML = docs[i].nom;
            upCelluleQte.innerHTML = docs[i].qte;
            upCellulePrix.innerHTML = docs[i].prix;
            upCelluleCatego.innerHTML = docs[i].categorie;
            upCelluleCheck.innerHTML = docs[i].check;
            upCelluleQteRappel.innerHTML = docs[i].qteRappel;
            btnClose.style.display = "none";
            btnValid.style.display = "none";
            btnUpdate.style.display = "inline";
            btnSuppr.style.display = "inline";

			/*Si la cellule "oui ou non pour l'affichage dans la liste de course" est sur non, la cellule quantité avant rappel est vide*/
			var CelluleQteRappel = document.getElementById("qteRappel" + docs[i]._id);
			if (docs[i].check == "Non") {
				CelluleQteRappel.innerHTML = "";
			}

        }, false);

    }, false);

    return tableau;

}

/*Fonction de l'affichage de l'ensemble du tableau*/
db.find({}, function (err, docs) {

	/*Tri du tableau pas nom de base*/
    docs.sort(triNom);

	/*Appelle de la fonction de tri global de functionTri.js*/
    globalTri(docs);

	/*Boucle d'affichage du tableau*/
    for (var i = 0; i < docs.length; i++) {

		/*Appelle de la fonction de création du tableau*/
        containerAff.appendChild(creerTableau(docs, i));

		/*Si la cellule "oui ou non pour l'affichage dans la liste de course" est sur non, la cellule quantité avant rappel est vide et hachuré*/
        var CelluleQteRappel = document.getElementById("qteRappel" + docs[i]._id);
        if (docs[i].check == "Non") {
            CelluleQteRappel.innerHTML = "";
            CelluleQteRappel.style.background = "repeating-linear-gradient(45deg, #242424, #242424 5px, #555555 5px, #555555 10px)";
        }

		/*Si le prix est à 0 et la catégorie est à "Non répertorié", ils sont affichés en rouge*/
        if (docs[i].prix == 0) {
            document.getElementById("prix" + docs[i]._id).style.color = "red";
        }

        if (docs[i].categorie == "Non répertorié") {
            document.getElementById("catego" + docs[i]._id).style.color = "red";
        }

    };
});
