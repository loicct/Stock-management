const {
    app, BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')

let win = null;

function createWindow() {

    win = new BrowserWindow({
        width: 1200,
        height: 800,
        transparent: true,
        frame: false,
        icon: path.join(__dirname, 'icons/Fasticon-Shop-Cart-Shop-cart.ico'),
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //win.webContents.openDevTools()

    //win.maximize();

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

const fs = require('fs')
const os = require('os')
const electron = require('electron')
const ipc = electron.ipcMain
const shell = electron.shell

ipc.on('print-to-pdf', function (event) {
    const pdfPath = path.join(__dirname, 'liste_course.pdf')
    const win = BrowserWindow.fromWebContents(event.sender)
    // Use default printing options
    win.webContents.printToPDF({}, function (error, data) {
        if (error) throw error
        fs.writeFile(pdfPath, data, function (error) {
            if (error) {
            throw error
            }
            shell.openExternal('file://' + pdfPath)
            event.sender.send('wrote-pdf', pdfPath)
        })
    })
})
