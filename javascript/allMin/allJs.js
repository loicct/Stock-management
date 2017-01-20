//db

var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'db/produits.json',
        autoload: true
    });

var Datastore = require('nedb'),
    dbCategories = new Datastore({
        filename: 'db/categories.json',
        autoload: true
    });

//functionTri

function triNom(a, b) {
    if (a.nom < b.nom) return -1;
    else if (a.nom == b.nom) return 0;
    else return 1;
}

function triNomInv(a, b) {
    if (a.nom < b.nom) return 1;
    else if (a.nom == b.nom) return 0;
    else return -1;
}

function triQte(a, b) {
    if (a.qte < b.qte) return -1;
    else if (a.qte == b.qte) return 0;
    else return 1;
}

function triQteInv(a, b) {
    if (a.qte < b.qte) return 1;
    else if (a.qte == b.qte) return 0;
    else return -1;
}

function triPrix(a, b) {
    if (a.prix < b.prix) return -1;
    else if (a.prix == b.prix) return 0;
    else return 1;
}

function triPrixInv(a, b) {
    if (a.prix < b.prix) return 1;
    else if (a.prix == b.prix) return 0;
    else return -1;
}

function triCatego(a, b) {
    if (a.categorie < b.categorie) return -1;
    else if (a.categorie == b.categorie) return 0;
    else return 1;
}

function triCategoInv(a, b) {
    if (a.categorie < b.categorie) return 1;
    else if (a.categorie == b.categorie) return 0;
    else return -1;
}

function globalTri(docs) {
    document.getElementById('triNom').addEventListener("click", function () {
        docs.sort(triNom);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triNom2').addEventListener("click", function () {
        docs.sort(triNom);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triNomInv').addEventListener("click", function () {
        docs.sort(triNomInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triNomInv2').addEventListener("click", function () {
        docs.sort(triNomInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triQte').addEventListener("click", function () {
        docs.sort(triQte);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triQte2').addEventListener("click", function () {
        docs.sort(triQte);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triQteInv').addEventListener("click", function () {
        docs.sort(triQteInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triQteInv2').addEventListener("click", function () {
        docs.sort(triQteInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triPrix').addEventListener("click", function () {
        docs.sort(triPrix);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triPrix2').addEventListener("click", function () {
        docs.sort(triPrix);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triPrixInv').addEventListener("click", function () {
        docs.sort(triPrixInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triPrixInv2').addEventListener("click", function (event) {
        docs.sort(triPrixInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triCatego').addEventListener("click", function () {
        docs.sort(triCatego);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triCatego2').addEventListener("click", function () {
        docs.sort(triCatego);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);

    document.getElementById('triCategoInv').addEventListener("click", function () {
        docs.sort(triCategoInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
    document.getElementById('triCategoInv2').addEventListener("click", function (event) {
        docs.sort(triCategoInv);
        tbody.innerHTML = "";
        for (var i = 0; i < docs.length; i++) {
            containerAff.appendChild(creerTableau(docs, i));
        };
    }, false);
}

//tableauProduits

var tbody = document.getElementById('tbody');
var tableau = document.getElementById('tableau');

function creerTableau(docs, i) {

    var celluleNom = document.createElement('td');
    celluleNom.id = "nom" + docs[i]._id;
    celluleNom.textContent = docs[i].nom;

    var celluleQte = document.createElement('td');
    celluleQte.id = "qte" + docs[i]._id;
    celluleQte.textContent = docs[i].qte;
    celluleQte.style.textAlign = "right";

    var cellulePrix = document.createElement('td');
    cellulePrix.id = "prix" + docs[i]._id;
    cellulePrix.textContent = docs[i].prix;
    cellulePrix.style.textAlign = "right";

    var celluleCatego = document.createElement('td');
    celluleCatego.id = "catego" + docs[i]._id;
    celluleCatego.textContent = docs[i].categorie;
    celluleCatego.style.textAlign = "right";

    if (celluleCatego.textContent == ""){
        celluleCatego.textContent = "Non répertorié";
        celluleCatego.style.color = "red";
    }

    var celluleCheck = document.createElement('td');
    celluleCheck.id = "check" + docs[i]._id;
    celluleCheck.textContent = docs[i].check;
    celluleCheck.style.textAlign = "right";

    var celluleQteRappel = document.createElement('td');
    celluleQteRappel.id = "qteRappel" + docs[i]._id;
    celluleQteRappel.textContent = docs[i].qteRappel;
    celluleQteRappel.style.textAlign = "right";

    var btnUpdate = document.createElement('button');
    btnUpdate.textContent = "";
    btnUpdate.className = "fa fa-pencil btnUpClass btnTab";
    btnUpdate.name = "Upbtn";
    btnUpdate.id = docs[i]._id;
    btnUpdate.style.color = "#00d8ff";
    btnUpdate.style.width = "50%";

    var btnSuppr = document.createElement('button');
    btnSuppr.textContent = "";
    btnSuppr.className = "fa fa-trash btnTab";
    btnSuppr.name = "Supprbtn";
    btnSuppr.id = "suppr" + docs[i]._id;
    btnSuppr.style.color = "#ff0000";
    btnSuppr.style.width = "50%";

    var btnClose = document.createElement('button');
    btnClose.className = "fa fa-times btnTab";
    btnClose.id = "btn" + docs[i]._id;
    btnClose.style.display = "none";
    btnClose.style.color = "#ff0000";
    btnClose.style.width = "50%";

    var btnValid = document.createElement('button');
    btnValid.className = "fa fa-check btnTab";
    btnValid.id = "valid" + docs[i]._id;
    btnValid.style.display = "none";
    btnValid.style.color = "#00ff00";
    btnValid.style.width = "50%";

    var update = document.createElement('td');
    update.style.textAlign = "center";
    update.appendChild(btnUpdate);
    update.appendChild(btnSuppr);
    update.appendChild(btnValid);
    update.appendChild(btnClose);


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

    var upEventBtn = document.getElementById(docs[i]._id);
    var closeEventBtn = document.getElementById("btn" + docs[i]._id);
    var validEventBtn = document.getElementById("valid" + docs[i]._id);
    var supprEventBtn = document.getElementById("suppr" + docs[i]._id);
    var modifAllQte = document.getElementById("modifQte");
    var cancelModifQte = document.getElementById("cancelModifQte");
    var validModifQte = document.getElementById("validModifQte");

    var upCelluleNom = document.getElementById("nom" + docs[i]._id);
    var inputNom = document.createElement('input');
    inputNom.id = "inputNom" + docs[i]._id;
    inputNom.type = "text";
    inputNom.className = "inputText";
    inputNom.value = docs[i].nom;
    inputNom.style.margin = "0";
    inputNom.style.color = "#a50000";

    var upCelluleQte = document.getElementById("qte" + docs[i]._id);
    var inputQte = document.createElement('input');
    inputQte.type = "number";
    inputQte.className = "inputText";
    inputQte.id = "allQteModif" + docs[i]._id;
    inputQte.value = docs[i].qte;
    inputQte.style.margin = "0";
    inputQte.style.color = "#a50000";

    modifAllQte.addEventListener("click", function () {

        cancelModifQte.style.display = "inline";
        validModifQte.style.display = "inline";
        modifAllQte.style.display = "none";

        for (var i = 0; i < docs.length; i++) {
            upCelluleQte.innerHTML = "";
            upCelluleQte.appendChild(inputQte);
        }

    }, false);

    validModifQte.addEventListener("click", function () {

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

    cancelModifQte.addEventListener("click", function () {

        upCelluleQte.innerHTML = docs[i].qte;
        cancelModifQte.style.display = "none";
        validModifQte.style.display = "none";
        modifAllQte.style.display = "inline";

    }, false);

    var upCellulePrix = document.getElementById("prix" + docs[i]._id);
    var inputPrix = document.createElement('input');
    inputPrix.type = "number";
    inputPrix.className = "inputText";
    inputPrix.step = "0.01";
    inputPrix.value = docs[i].prix;
    inputPrix.style.margin = "0";
    inputPrix.style.color = "#a50000";

    var upCelluleCatego = document.getElementById("catego" + docs[i]._id);
    upCelluleCatego.style.textAlign = "center";
    var inputCatego = document.createElement('select');
    inputCatego.style.margin = "0";
    inputCatego.style.padding = "15px";
    inputCatego.style.color = "#a50000";
    var optionCatego = document.createElement('option');
    optionCatego.textContent = docs[i].categorie;
    optionCatego.selected = true ;
    //console.log(celluleCatego.textContent);

    dbCategories.find({}, function (err, docs) {


        for (var i = 0; i < docs.length; i++) {
            inputCatego.appendChild(creerOptionCatego(docs, i));
            inputCatego.appendChild(optionCatego);
        };

    });

    var upCelluleCheck = document.getElementById("check" + docs[i]._id);
    upCelluleCheck.style.textAlign = "center";
    var option1 = document.createElement('option');
    option1.textContent = "Oui";
    var option2 = document.createElement('option');
    option2.textContent = "Non";
    var inputCheck = document.createElement('select');
    inputCheck.style.margin = "0";
    inputCheck.style.padding = "15px";
    inputCheck.appendChild(option1);
    inputCheck.appendChild(option2);
    if (docs[i].check == "Oui") {
        option1.selected = true;
        option2.selected = false;
    } else {
        option1.selected = false;
        option2.selected = true;
    }

    inputCheck.style.color = "#a50000";

    var upCelluleQteRappel = document.getElementById("qteRappel" + docs[i]._id);
    var inputQteRappel = document.createElement('input');
    inputQteRappel.type = "number";
    inputQteRappel.className = "inputText";
    inputQteRappel.value = docs[i].qteRappel;
    inputQteRappel.style.margin = "0";
    inputQteRappel.style.color = "#a50000";

    validEventBtn.addEventListener("click", function () {

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

        var x = inputCatego.selectedIndex;
        var selectValue = upCelluleCatego.getElementsByTagName("option")[x].value;

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

        btnClose.style.display = "none";
        btnValid.style.display = "none";
        btnUpdate.style.display = "inline";

        location.reload();

    }, false);

    supprEventBtn.addEventListener("click", function () {

        var confirmation = confirm("Voulez vous vraiment supprimer le produit " + docs[i].nom + " ?", "Gestion de courses");


        if (confirmation) {
            db.remove({
                _id: docs[i]._id
            }, {}, function (err, numRemoved) {});
            location.reload();
        }

    }, false);



    btnUpdate.addEventListener("click", function () {

        for (var i = 0; i < docs.length; i++) {
            document.getElementsByName("Upbtn")[i].disabled = true;
            document.getElementsByName("Upbtn")[i].style.color = "#aaaaaa";
            document.getElementsByName("Supprbtn")[i].disabled = true;
            document.getElementsByName("Supprbtn")[i].style.color = "#aaaaaa";
        };

    }, false);

    btnClose.addEventListener("click", function () {

        for (var i = 0; i < docs.length; i++) {
            document.getElementsByName("Upbtn")[i].disabled = false;
            document.getElementsByName("Upbtn")[i].style.color = "#00d8ff";
            document.getElementsByName("Supprbtn")[i].disabled = false;
            document.getElementsByName("Supprbtn")[i].style.color = "#ff0000";
        };

    }, false);

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
        }, false);

    }, false);

    return tableau;

}

var containerAff = document.getElementById("containerAff");


db.find({}, function (err, docs) {

    docs.sort(triNom);

    globalTri(docs);

    for (var i = 0; i < docs.length; i++) {

        containerAff.appendChild(creerTableau(docs, i));

        var CelluleQteRappel = document.getElementById("qteRappel" + docs[i]._id);
        if (docs[i].check == "Non") {
            CelluleQteRappel.innerHTML = "";
            CelluleQteRappel.style.background = "repeating-linear-gradient(45deg, #242424, #242424 5px, #555555 5px, #555555 10px)";
        } else {
            //CelluleQteRappel.style.backgroundColor = "#242424";
        }

        if (docs[i].prix == 0) {
            document.getElementById("prix" + docs[i]._id).style.color = "red";
        }

        if (docs[i].categorie == "Non répertorié") {
            document.getElementById("catego" + docs[i]._id).style.color = "red";
        }

    };
});

//ajSupprProduits

// TODO: [x]test.

var formAjSuppr = document.getElementById("formAjSuppr");

var prod = document.getElementById("prod");

/*prod.addEventListener("focus", function () {
    document.getElementById("aide").textContent = "autre ex: Sucre";
});

prod.addEventListener("blur", function () {
    document.getElementById("aide").textContent = "";
});*/

var qte = document.getElementById("qte");


/*qte.addEventListener("focus", function () {
    document.getElementById("aide2").textContent = "autre ex: 3";
});

qte.addEventListener("blur", function () {
    document.getElementById("aide2").textContent = "";
});*/

var prix = document.getElementById("prix");

var check = document.getElementById("check");

var qteRappel = document.getElementById("qteRappel");
qteRappel.style.display = "none";

function creerOptionCatego(docs, i) {
    docs.sort(triNom);
    var optionCatego = document.createElement('option');
    optionCatego.textContent = docs[i].nom;
    return (optionCatego);
}



var selectCatego = document.getElementById('selectCatego');

dbCategories.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
        selectCatego.appendChild(creerOptionCatego(docs, i));
    };
});

check.addEventListener("click", function() {

    if (check.checked == true) {
        qteRappel.style.display = "inline";
    } else {
        qteRappel.style.display = "none";
    }

}, function (err, docs) {}, false);

var affCheck;

formAjSuppr.addEventListener("submit", function (e) {

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

    if (check.checked == true) {
        affCheck = "Oui";
    } else {
        affCheck = "Non";
    }

    var trigger = 0;

    //e.preventDefault();

    db.find({}, function (err, docs) {

        for (var i = 0; i < docs.length; i++) {

            if(docs[i].nom.toLowerCase() == prod.value.toLowerCase()) {
                trigger ++;
            };
        };

        if (trigger == 0) {
            var x = selectCatego.selectedIndex;
            var selectValue = document.getElementsByTagName("option")[x].value;

            db.insert({nom : prod.value, qte : qte.value, prix : prix.value, categorie : selectValue, check : affCheck, qteRappel : qteRappel.value, qteAchat : "1"});
        } else {
            document.getElementById("aide").textContent = "Attention : " + prod.value + " existe déja.";
            prod.value = "";
        };

    });
});

//listeDeCourse

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

//categories

function creerListeCategories(e,t){var o=document.createElement("li");return o.textContent="- "+e[t].nom,o.id="catego"+e[t]._id,o}var listeCategories=document.getElementById("listeCategories"),formSupprCatego=document.getElementById("formSupprCategorie");dbCategories.find({},function(e,t){for(var o=!1,n=0;n<t.length;n++){"Non répertorié"==t[n].nom&&(o=!0)}0==n?(dbCategories.insert({nom:"Non répertorié"}),location.reload()):o||(dbCategories.insert({nom:"Non répertorié"}),location.reload())}),dbCategories.find({},function(e,t){for(var o=0;o<t.length;o++)listeCategories.appendChild(creerListeCategories(t,o))});var formCatergorie=document.getElementById("formCategorie"),valueInput=document.getElementById("categorie");formCategorie.addEventListener("submit",function(e){e.preventDefault();var t=0;dbCategories.find({},function(e,o){for(var n=0;n<o.length;n++)o[n].nom.toLowerCase()==valueInput.value.toLowerCase()&&t++;0==t?(dbCategories.insert({nom:valueInput.value}),location.reload()):(document.getElementById("aideCategorie").textContent="Attention : "+valueInput.value+" existe déja.",valueInput.value="")})});var selectCategoSuppr=document.getElementById("selectCategoSuppr");dbCategories.find({},function(e,t){for(var o=0;o<t.length;o++)selectCategoSuppr.appendChild(creerOptionCatego(t,o));formSupprCatego.addEventListener("submit",function(e){e.preventDefault();var t=selectCategoSuppr.selectedIndex,o=formSupprCategorie.getElementsByTagName("option")[t].value,n=confirm('Voulez vous vraiment supprimer la catégorie " '+o+' " ?',"Gestion de courses");n&&(dbCategories.remove({nom:o},{},function(e,t){}),db.update({categorie:o},{$set:{categorie:""}},{multi:!0},function(e,t){}),location.reload())},!1);var n=document.getElementById("btnModifCatego"),a=document.getElementById("subSupprCatego"),r=document.getElementById("btnValidModifCatego"),i=document.getElementById("inputModifCatego"),l=document.getElementById("btnAnnuleModifCatego");i.style.display="none",r.style.display="none",l.style.display="none",n.addEventListener("click",function(){var e=selectCategoSuppr.selectedIndex,t=formSupprCategorie.getElementsByTagName("option")[e].value;a.style.display="none",selectCategoSuppr.disabled=!0,selectCategoSuppr.style.backgroundColor="gray",selectCategoSuppr.style.color="#484848",i.style.display="inline",r.style.display="inline",l.style.display="inline",n.style.display="none",i.value=t,l.addEventListener("click",function(){selectCategoSuppr.style.backgroundColor="none",selectCategoSuppr.style.background="#d9dded",selectCategoSuppr.style.color="#1d1d1d",a.style.display="inline",i.style.display="none",r.style.display="none",l.style.display="none",n.style.display="inline",selectCategoSuppr.disabled=!1},!1),r.addEventListener("click",function(){dbCategories.update({nom:t},{$set:{nom:i.value}},{multi:!0},function(e,t){}),location.reload()},!1)},!1)});

//onglets

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//btnControleWin

const remote = require('electron').remote;
const current_window = remote.getCurrentWindow();

document.getElementById("close").addEventListener("click", function (e) {
    current_window.close();
});

document.getElementById("minimize").addEventListener("click", function (e) {
    current_window.minimize();
});

document.getElementById("maximize").addEventListener("click", function (e) {
    current_window.maximize();
});

document.getElementById("unmaximize").addEventListener("click", function (e) {
    current_window.unmaximize();
});
