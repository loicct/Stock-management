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
