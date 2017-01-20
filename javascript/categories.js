var listeCategories = document.getElementById("listeCategories");
var formSupprCatego = document.getElementById("formSupprCategorie");

dbCategories.find({}, function (err, docs) {

    var trigger = false;

    for (var i = 0; i < docs.length; i++) {
        var compteur = i;
        if(docs[i].nom == "Non répertorié") {
            trigger = true;
        }
    };

    if (i == 0) {
        dbCategories.insert({nom : "Non répertorié"});
        location.reload();
    } else if (!trigger) {
        dbCategories.insert({nom : "Non répertorié"});
        location.reload();
    }
});

function creerListeCategories (docs, i) {
    var nomCategorie = document.createElement('li');
    nomCategorie.textContent = "- " + docs[i].nom;
    nomCategorie.id = "catego" + docs[i]._id;
    return (nomCategorie);
}

dbCategories.find({}, function (err, docs) {

    for (var i = 0; i < docs.length; i++) {

        listeCategories.appendChild(creerListeCategories(docs, i));
    };

});

var formCatergorie = document.getElementById("formCategorie");

var valueInput = document.getElementById("categorie");

formCategorie.addEventListener("submit", function (e) {

    e.preventDefault();
    var trigger = 0;

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

var selectCategoSuppr = document.getElementById('selectCategoSuppr');

dbCategories.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
        selectCategoSuppr.appendChild(creerOptionCatego(docs, i));
    };

    formSupprCatego.addEventListener("submit", function (e) {

        e.preventDefault();

        var x = selectCategoSuppr.selectedIndex;
        var selectValue = formSupprCategorie.getElementsByTagName("option")[x].value;
        var confirmation = confirm('Voulez vous vraiment supprimer la catégorie " '  + selectValue +  ' " ?', "Gestion de courses");

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

	var btnModifCatego = document.getElementById('btnModifCatego');
	var subSupprCatego = document.getElementById('subSupprCatego');
	var btnValidModifCatego = document.getElementById('btnValidModifCatego');
	var inputModifCatego = document.getElementById('inputModifCatego');
	var btnAnnuleModifCatego = document.getElementById('btnAnnuleModifCatego');
	inputModifCatego.style.display = "none";
	btnValidModifCatego.style.display = "none";
	btnAnnuleModifCatego.style.display = "none";

	btnModifCatego.addEventListener("click", function () {

		var x = selectCategoSuppr.selectedIndex;
        var selectValue = formSupprCategorie.getElementsByTagName("option")[x].value;

		subSupprCatego.style.display = "none";
		selectCategoSuppr.disabled = true;
		selectCategoSuppr.style.backgroundColor = "gray";
		selectCategoSuppr.style.color = "#484848";
		inputModifCatego.style.display = "inline";
		btnValidModifCatego.style.display = "inline";
		btnAnnuleModifCatego.style.display = "inline";
		btnModifCatego.style.display = "none";
		inputModifCatego.value = selectValue;

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

			//location.reload();

		}, false);

		btnValidModifCatego.addEventListener("click", function () {

			//console.log(inputModifCatego.value);

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

		//location.reload();

	}, false);

});
