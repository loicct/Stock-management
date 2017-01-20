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
