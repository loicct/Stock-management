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
