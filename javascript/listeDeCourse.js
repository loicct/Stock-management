var listeDeCourse = document.getElementById('listeDeCourse');
var thTotal = document.getElementById('total');
var total = 0;
var formListe = document.getElementById("formListe");
var btnSubListe = document.getElementById("btnSubListe");

function creerListe(docs, i) {

	var celluleNom = document.createElement('td');
	celluleNom.textContent = docs[i].nom;
	celluleNom.id = "listeNom" + docs[i]._id;

	var celluleQteAchat = document.createElement('td');
	celluleQteAchat.id = "celluleQteAchat";
	var btnPlus = document.createElement('button');
	btnPlus.textContent = "";
	btnPlus.className = "btnListe fa fa-plus";
	var textLabel = document.createElement('label');
	textLabel.textContent = " " + docs[i].qteAchat + " ";
	var btnMoins = document.createElement('button');
	btnMoins.className = "btnListe fa fa-minus";
	btnMoins.textContent = "";
	celluleQteAchat.appendChild(btnMoins);
	celluleQteAchat.appendChild(textLabel);
	celluleQteAchat.appendChild(btnPlus);

	var qteAchat = parseInt(docs[i].qteAchat);

	btnPlus.addEventListener("click", function () {

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

	btnMoins.addEventListener("click", function () {

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

	var cellulePrix = document.createElement('td');
	cellulePrix.textContent = (docs[i].prix * docs[i].qteAchat).toFixed(2) + " €";
	cellulePrix.style.textAlign = "right";
	cellulePrix.style.paddingRight = "10px";
	cellulePrix.style.width = "200px";

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

	formCheck.addEventListener("click", function () {


		if (document.getElementById("listeCheck" + docs[i]._id).checked) {
			document.getElementById("listeNom" + docs[i]._id).style.color = "red";
			document.getElementById("listeNom" + docs[i]._id).style.textDecoration = "line-through";
			btnMoins.style.color = "#aaaaaa";
			btnPlus.style.color = "#aaaaaa";
			btnMoins.disabled = true;
			btnPlus.disabled = true;
		} else {
			document.getElementById("listeNom" + docs[i]._id).style.color = "#ccc";
			document.getElementById("listeNom" + docs[i]._id).style.textDecoration = "none";
			btnMoins.style.color = "black";
			btnPlus.style.color = "black";
			btnMoins.disabled = false;
			btnPlus.disabled = false;
		}

	}, false);

	formListe.addEventListener("submit", function (e) {
		e.preventDefault();

		if (document.getElementById("listeCheck" + docs[i]._id).checked) {
			console.log(docs[i].nom);
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

	var ligneTab = document.createElement('tr');
	ligneTab.appendChild(celluleNom);
	ligneTab.appendChild(celluleQteAchat);
	ligneTab.appendChild(cellulePrix);
	ligneTab.appendChild(celluleCoche);

	ligneTotal = document.createElement('tr');

	listeDeCourse.appendChild(ligneTab);

	return (listeDeCourse);
}

var containerListeDeCourse = document.getElementById("containerListeDeCourse");

db.find({}, function (err, docs) {

	docs.sort(triCatego);

	for (var i = 0; i < docs.length; i++) {

		var result;
		var comparer = docs[i].qte <= docs[i].qteRappel;

		if (comparer == true) {
			containerListeDeCourse.appendChild(creerListe(docs, i));
			var prix = parseFloat(docs[i].prix * docs[i].qteAchat);
			total += prix;
		}
	};

	thTotal.textContent = total.toFixed(2) + " €";
	thTotal.style.textAlign = "right";

});

const ipc = require('electron').ipcRenderer

const printPdf = document.getElementById('printPdf')

printPdf.addEventListener('click', function (event) {
	ipc.send('print-to-pdf')
})

ipc.on('wrote-pdf', function (event, path) {
	const message = `Enregistrement du PDF ici : ${path}`
	document.getElementById('msgPdf').innerHTML = message
})
