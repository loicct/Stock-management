/*définition de variables*/
var listeCategories = document.getElementById("listeCategories"),
	formSupprCatego = document.getElementById("formSupprCategorie"),
	formCatergorie = document.getElementById("formCategorie"),
	valueInput = document.getElementById("categorie"),
	selectCategoSuppr = document.getElementById('selectCategoSuppr'),
	btnModifCatego = document.getElementById('btnModifCatego'),
	subSupprCatego = document.getElementById('subSupprCatego'),
	btnValidModifCatego = document.getElementById('btnValidModifCatego'),
	inputModifCatego = document.getElementById('inputModifCatego'),
	btnAnnuleModifCatego = document.getElementById('btnAnnuleModifCatego');

/*Fonction qui ajoute une catégorie "Non répertorié" si elle n'existe pas déja*/
dbCategories.find({}, function (err, docs) {

    var trigger = false;

	/*Boucle qui recherche la catégorie "Non répertorié" dans la bdd. Si la catégorie existe déja, la variable trigger devient vrai*/
    for (var i = 0; i < docs.length; i++) {
        var compteur = i;
        if(docs[i].nom == "Non répertorié") {
            trigger = true;
        }
    };

	/*Si la variable trigger est fausse, la catégorie "Non répertorié" est ajouté*/
	if (!trigger) {
        dbCategories.insert({nom : "Non répertorié"});
        location.reload();
    }
});

/*Fonction qui crée la liste des catégories*/
function creerListeCategories (docs, i) {
    var nomCategorie = document.createElement('li');
    nomCategorie.textContent = "- " + docs[i].nom;
    nomCategorie.id = "catego" + docs[i]._id;
    return (nomCategorie);
}

/*fonction qui affiche la liste des catégories*/
dbCategories.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
        listeCategories.appendChild(creerListeCategories(docs, i));
    };
});

/*Fonction lors du clique submit "Envoyer"*/
formCategorie.addEventListener("submit", function (e) {

    e.preventDefault();
    var trigger = 0;

	/*Fonction qui vérifie si la catégorie n'existe pas déja dans la bdd. Si elle n'existe pas, l'envoi est validé. Sinon, l'envoi est annulé et un texte signal le doublon*/
    dbCategories.find({}, function (err, docs) {

        for (var i = 0; i < docs.length; i++) {

            if(docs[i].nom.toLowerCase() == valueInput.value.toLowerCase()) {
                trigger ++;
            };
        };

        if (trigger == 0) {
            dbCategories.insert({nom : valueInput.value});
            location.reload();
        } else {
            document.getElementById("aideCategorie").textContent = "Attention : " + valueInput.value + " existe déja.";
            valueInput.value = "";
        };

    });

});

/*Fonction pour modifier ou supprimer une catégorie*/
dbCategories.find({}, function (err, docs) {

	/*Boucle qui affiche les catégories dans le select*/
    for (var i = 0; i < docs.length; i++) {
        selectCategoSuppr.appendChild(creerOptionCatego(docs, i));
    };

	/*Fonction qui supprime la catégorie selectionné*/
    formSupprCatego.addEventListener("submit", function (e) {

		/*Empêche l'envoi et le rafraichissement*/
        e.preventDefault();

        var x = selectCategoSuppr.selectedIndex,
        	selectValue = formSupprCategorie.getElementsByTagName("option")[x].value,
        	confirmation = confirm('Voulez vous vraiment supprimer la catégorie " '  + selectValue +  ' " ?', "Gestion de courses");

		/*Si l'utilisateur confirme, la catégorie est supprimée et l'affichage est rafraichi*/
        if (confirmation) {
            dbCategories.remove({
                nom: selectValue
            }, {}, function (err, numRemoved) {});
            db.update({
                categorie: selectValue
            }, {
            $set: {
                categorie: ""
            }
        }, {
            multi: true
        }, function (err, numReplaced) {});
            location.reload();
        }

    }, false);

	/*L'input et les boutons pour la modif sont désactivés de base*/
	inputModifCatego.style.display = "none";
	btnValidModifCatego.style.display = "none";
	btnAnnuleModifCatego.style.display = "none";

	/*Fonction lors du clique bouton "Modifier"*/
	btnModifCatego.addEventListener("click", function () {

		var x = selectCategoSuppr.selectedIndex,
        	selectValue = formSupprCategorie.getElementsByTagName("option")[x].value;

		/*Apparition de l'input et des boutons pour la modif et disparition des boutons "Supprimer" et "Modifier"*/
		subSupprCatego.style.display = "none";
		btnModifCatego.style.display = "none";
		inputModifCatego.style.display = "inline";
		btnValidModifCatego.style.display = "inline";
		btnAnnuleModifCatego.style.display = "inline";
		/*Désactivation et ajout d'un style grisé pour le select*/
		selectCategoSuppr.disabled = true;
		selectCategoSuppr.style.backgroundColor = "gray";
		selectCategoSuppr.style.color = "#484848";
		/*Affiche le nom de la catégorie selectionné dans l'input de modif*/
		inputModifCatego.value = selectValue;

		/*Fonction lors du clique bouton "Annuler", annualation de la modif*/
		btnAnnuleModifCatego.addEventListener("click", function () {

			selectCategoSuppr.style.backgroundColor = "none";
			selectCategoSuppr.style.background = "#d9dded";
			selectCategoSuppr.style.color = "#1d1d1d";
			subSupprCatego.style.display = "inline";
			inputModifCatego.style.display = "none";
			btnValidModifCatego.style.display = "none";
			btnAnnuleModifCatego.style.display = "none";
			btnModifCatego.style.display = "inline";
			selectCategoSuppr.disabled = false;

		}, false);

		/*Fonction lors du clique bouton "Valider la modif", modif de la catégo dans la bdd et rafraichissement*/
		btnValidModifCatego.addEventListener("click", function () {

			dbCategories.update({
				nom: selectValue
			}, {
				$set: {
					nom: inputModifCatego.value
				}
			}, {
				multi: true
			}, function (err, numReplaced) {});

			location.reload();

		}, false);

	}, false);

});
