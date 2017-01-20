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
