/*définition de variables*/
var formAjSuppr = document.getElementById("formAjSuppr"),
	prod = document.getElementById("prod"),
	qte = document.getElementById("qte"),
	prix = document.getElementById("prix"),
	check = document.getElementById("check"),
	qteRappel = document.getElementById("qteRappel"),
	pQteRappel = document.getElementById("transparent"),
	selectCatego = document.getElementById('selectCatego'),
	affCheck;

/*le rappel de la quantité dans la liste de course est désactivé de base*/
pQteRappel.style.display = "none";

/*Fonction qui crée les options dans le select pour les catégories*/
function creerOptionCatego(docs, i) {
    docs.sort(triNom);
    var optionCatego = document.createElement('option');
    optionCatego.textContent = docs[i].nom;
    return (optionCatego);
}

/*Fonction qui affiche les différentes catégories dans le select*/
dbCategories.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
        selectCatego.appendChild(creerOptionCatego(docs, i));
    };
});

/*Fonction qui active ou désactive le rappel de la quantité dans la liste de course en fonction que la checkbox #check*/
check.addEventListener("click", function() {

    if (check.checked == true) {
        pQteRappel.style.display = "inline";
    } else {
        pQteRappel.style.display = "none";
    }

}, false);

/*Fonction lors du clique submit "Envoyer"*/
formAjSuppr.addEventListener("submit", function (e) {

	/*Si les inputs quantité, Prix à l'unité, rappel de la quantité dans la liste de course sont vide, leurs valeurs devient 0*/
    if (qte.value < 0) {
        qte.value = 0;
    } else if (qte.value == "") {
        qte.value = 0;
    }

    if (prix.value < 0) {
        prix.value = 0;
    } else if (prix.value == "") {
        prix.value = 0;
    }

    if (qteRappel.value < 0) {
        qteRappel.value = 0;
    } else if (qteRappel.value == "") {
        qteRappel.value = 0;
    }

	/*Si la checkbox est coché, sa valeur (stocké dans le variable "affCheck") devient "Oui", sinon elle devient "Non"*/
    if (check.checked == true) {
        affCheck = "Oui";
    } else {
        affCheck = "Non";
    }

	/*variable int pour la détection de doublon de nom de produit dans la bdd */
    var trigger = 0;

	/*Empechement de l'envoi et du rafraichissement*/
    e.preventDefault();

	/*Fonction pour l'envoi des infos dans la bdd*/
    db.find({}, function (err, docs) {

		/*Boucle qui compare les nom de produit dans la bdd à celui de l'input. Si le produit existe déja, la variable trigger s'incrémente*/
        for (var i = 0; i < docs.length; i++) {
            if(docs[i].nom.toLowerCase() == prod.value.toLowerCase()) {
                trigger ++;
            };
        };

		/*Si la variable trigger est égal à 0, l'envoi et le rafraichissement sont effectués. Sinon l'envoi est annulé et un texte signal le doublon*/
        if (trigger == 0) {
            var x = selectCatego.selectedIndex;
            var selectValue = document.getElementsByTagName("option")[x].value;

            db.insert({nom : prod.value, qte : qte.value, prix : prix.value, categorie : selectValue, check : affCheck, qteRappel : qteRappel.value, qteAchat : "1"});
			location.reload();
        } else {
            document.getElementById("aide").textContent = "Attention : " + prod.value + " existe déja.";
            prod.value = "";
        };

    });
});
