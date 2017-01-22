/*Création des bases de données NeDb*/

var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'db/produits.json',
        autoload: true
    }),
	dbCategories = new Datastore({
        filename: 'db/categories.json',
        autoload: true
    });
