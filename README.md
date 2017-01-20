# Stock-management

Logiciel de gestion de stock pour particulier.

Pour la modification, faire attention si l'index.html n'est pas redirigé sur les fichiers "min" de js et css. (en fonction des commit/pull)

- requis : NodeJS

- Installation des dépendances (dans le terminal et dans le bon dossier) : npm install

- Installation dataBase : npm install nedb --save

- Test : npm start

- Pour Export pour toutes plateformes, taper dans package.json : 
	"script": {
		"build": "electron-packager --all"
	}
	
- Export (dans le terminal et dans le bon dossier) : npm run build
