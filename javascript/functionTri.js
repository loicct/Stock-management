/*Les fonctions pour le tri par ordre alphabétique ou par quantité*/

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


/*Fonction qui assigne les fonctions tri ci-dessus au icons du tableau "Voir les produits"*/

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
