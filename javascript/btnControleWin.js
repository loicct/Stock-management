/*Script pour les boutons de controle de fenêtre, petits bugs à cause de la transparence de la fenêtre dans le main.js*/

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


/*Script Alternatif pour le controle de fenêtre, ne fonctionne pas à cause de la transparence de la fenêtre dans le main.js(bug d'electron)*/

/*(function () {

      const remote = require('electron').remote;

      function init() {
        document.getElementById("minimize").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize();
        });

        document.getElementById("maximize").addEventListener("click", function (e) {
            const window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
                document.getElementById("maximize").className = "btnWin fa fa-window-restore";
            } else {
                window.unmaximize();
                document.getElementById("maximize").className = "btnWin fa fa-window-maximize";
            }
        });

        document.getElementById("close").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        });
      };

      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init();
        }
      };
})();*/
