/*définition de variables*/
var listeDeCourse = document.getElementById('listeDeCourse'),
	thTotal = document.getElementById('total'),
	total = 0,
	formListe = document.getElementById("formListe"),
	btnSubListe = document.getElementById("btnSubListe"),
	containerListeDeCourse = document.getElementById("containerListeDeCourse");

/*Fonction qui crée le tableau de liste de course*/
function creerListe(docs, i) {

	/*Création des cellules "nom" du tableau*/
	var celluleNom = document.createElement('td');
	celluleNom.textContent = docs[i].nom;
	celluleNom.id = "listeNom" + docs[i]._id;
	/*Création des cellules "quantité d'achat" du tableau*/
	var celluleQteAchat = document.createElement('td');
	celluleQteAchat.id = "celluleQteAchat";
	/*Création des boutons + et - pour ajouter et diminuer la quantité d'achat*/
	var btnPlus = document.createElement('button');
	btnPlus.textContent = "";
	btnPlus.className = "btnListe fa fa-plus";
	var textLabel = document.createElement('label');
	textLabel.textContent = " " + docs[i].qteAchat + " ";
	var btnMoins = document.createElement('button');
	btnMoins.className = "btnListe fa fa-minus";
	btnMoins.textContent = "";
	/*Ajout des boutons + et - et du label contenant la quantité aux cellules "quantité d'achat"*/
	celluleQteAchat.appendChild(btnMoins);
	celluleQteAchat.appendChild(textLabel);
	celluleQteAchat.appendChild(btnPlus);

	/*Convertit la chaîne de caractère quantité d'achat de la bdd en entier*/
	var qteAchat = parseInt(docs[i].qteAchat);

	/*Fonction lors du clique bouton +*/
	btnPlus.addEventListener("click", function () {

		/*Ajoute 1 à la quantité d'achat*/
		db.update({
			_id: docs[i]._id
		}, {
			$set: {
				qteAchat: (qteAchat += 1).toString(),
			}
		}, {
			multi: true
		}, function (err, numReplaced) {});

		location.reload();

	}, false);

	/*Fonction lors du clique bouton +*/
	btnMoins.addEventListener("click", function () {

		/*Enlève 1 à la quantité d'achat*/
		db.update({
			_id: docs[i]._id
		}, {
			$set: {
				qteAchat: (qteAchat -= 1).toString()
			}
		}, {
			multi: true
		}, function (err, numReplaced) {});

		location.reload();

	}, false);

	/*Création des cellules "prix" du tableau*/
	var cellulePrix = document.createElement('td');
	cellulePrix.textContent = (docs[i].prix * docs[i].qteAchat).toFixed(2) + " €";
	cellulePrix.style.textAlign = "right";
	cellulePrix.style.paddingRight = "10px";
	cellulePrix.style.width = "100px";

	/*Création des cellules de checkbox du tableau*/
	var celluleCoche = document.createElement('td');
	celluleCoche.id = "celluleCoche";
	var formCheck = document.createElement('input');
	var formLabel = document.createElement('label');
	formCheck.type = "checkbox";
	formCheck.name = "listeCheck";
	formCheck.id = "listeCheck" + docs[i]._id;
	formCheck.className = "check";
	formLabel.className = "labCheck";
	formLabel.htmlFor = "listeCheck" + docs[i]._id;
	celluleCoche.appendChild(formCheck);
	celluleCoche.appendChild(formLabel);

	/*Fonction lors du clique checkbox*/
	formCheck.addEventListener("click", function () {

		/*Si la checkbox est coché, le nom du produit devient rouge et barré et les boutons + et - sont désactivés*/
		if (document.getElementById("listeCheck" + docs[i]._id).checked) {
			document.getElementById("listeNom" + docs[i]._id).style.color = "red";
			document.getElementById("listeNom" + docs[i]._id).style.textDecoration = "line-through";
			btnMoins.style.color = "#aaaaaa";
			btnPlus.style.color = "#aaaaaa";
			btnMoins.disabled = true;
			btnPlus.disabled = true;
		} else /*Sinon retour à la normal*/ {
			document.getElementById("listeNom" + docs[i]._id).style.color = "#ccc";
			document.getElementById("listeNom" + docs[i]._id).style.textDecoration = "none";
			btnMoins.style.color = "black";
			btnPlus.style.color = "black";
			btnMoins.disabled = false;
			btnPlus.disabled = false;
		}

	}, false);

	/*Fonction lors du clique submit "Valider"*/
	formListe.addEventListener("submit", function (e) {

		e.preventDefault();

		/*Si les checkboxs sont cochées, la quantié d'achat est ajoutée à la quantité en stock dans la bdd*/
		if (document.getElementById("listeCheck" + docs[i]._id).checked) {
			db.update({
				_id: docs[i]._id
			}, {
				$set: {
					qte: (parseFloat(docs[i].qte) + parseFloat(docs[i].qteAchat)).toString(),
					qteAchat: "1"
				}
			}, {
				multi: true
			}, function (err, numReplaced) {});
			location.reload();
		}

	});

	/*Création des ligne de tableau 'tr'*/
	var ligneTab = document.createElement('tr');
	ligneTab.appendChild(celluleNom);
	ligneTab.appendChild(celluleQteAchat);
	ligneTab.appendChild(cellulePrix);
	ligneTab.appendChild(celluleCoche);

	listeDeCourse.appendChild(ligneTab);

	return (listeDeCourse);
}

/*Fonction de l'affichage de l'ensemble du tableau*/
db.find({}, function (err, docs) {

	/*Tri du tableau par catégories*/
	docs.sort(triCatego);

	/*Boucle qui vérifie si la quantité produit est inférieur ou égal à la quantité avant rappel*/
	for (var i = 0; i < docs.length; i++) {
		var result;
		var comparer = docs[i].qte <= docs[i].qteRappel;

		/*Si la quantité produit est inférieur ou égal à la quantité avant rappel, affichage du produit dans le tableau*/
		if (comparer == true) {
			containerListeDeCourse.appendChild(creerListe(docs, i));
			var prix = parseFloat(docs[i].prix * docs[i].qteAchat);
			total += prix;
		}
	};

	/*Affichage du total des prix*/
	thTotal.textContent = total.toFixed(2) + " €";
	thTotal.style.textAlign = "right";

});


/*Imprimer un fichier PDF avec electron*/


const ipc = require('electron').ipcRenderer,
	printPdf = document.getElementById('printPdf');

/*Fonction lors du clique bouton "Enregistrer la liste en pdf"*/
printPdf.addEventListener('click', function (event) {
	ipc.send('print-to-pdf')
})

/*Fonction qui imprime le pdf*/
ipc.on('wrote-pdf', function (event, path) {
	const message = `Enregistrement du PDF ici : ${path}`
	document.getElementById('msgPdf').innerHTML = message
})
