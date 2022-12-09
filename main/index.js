"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
// Set application name for Windows 10+ notifications
if (process.platform === 'win32')
    electron_1.app.setAppUserModelId(electron_1.app.getName());
if (!electron_1.app.requestSingleInstanceLock()) {
    electron_1.app.quit();
    process.exit(0);
}
let window;
// Create the browser window.
const createWindow = () => {
    window = new electron_1.BrowserWindow({
        width: 1280,
        height: 768,
        frame: true,
        show: true,
        resizable: true,
        fullscreenable: true,
        webPreferences: {
            preload: (0, path_1.join)(electron_1.app.getAppPath(), 'main/preload.js'),
            // nodeIntegration: true,
            // contextIsolation: false
        }
    });
    // and load the index.html of the app.
    // process.env.npm_lifecycle_event
    if (electron_is_dev_1.default) {
        window.loadURL(`http://localhost:3000`);
    }
    else {
        window.loadFile((0, path_1.join)(electron_1.app.getAppPath(), 'build/index.html'));
    }
    // Open the DevTools.
    window.webContents.openDevTools({
        mode: 'bottom'
    });
    // Make all links open with the browser, not with the application
    window.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:'))
            electron_1.shell.openExternal(url);
        return { action: 'deny' };
    });
    // For AppBar
    electron_1.ipcMain.on('minimize', () => {
        window.isMinimized() ? window.restore() : window.minimize();
    });
    electron_1.ipcMain.on('maximize', () => {
        window.isMaximized() ? window.restore() : window.maximize();
    });
    electron_1.ipcMain.on('close', () => {
        window.close();
    });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.protocol.registerFileProtocol('files', (request, callback) => {
        const url = request?.url?.substr(8);
        const path = decodeURI(url.split('?')[0]);
        callback({ path });
    });
    electron_1.app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('second-instance', () => {
    if (window) {
        // Focus on the main window if the user tried to open another
        if (window.isMinimized())
            window.restore();
        window.focus();
    }
});
electron_1.app.on('activate', () => {
    const allWindows = electron_1.BrowserWindow.getAllWindows();
    if (allWindows.length) {
        allWindows[0].focus();
    }
    else {
        createWindow();
    }
});
// new window example arg: new windows url
electron_1.ipcMain.handle('open-win', (event, arg) => {
    console.log(event);
    const childWindow = new electron_1.BrowserWindow({
        webPreferences: {
            preload: (0, path_1.join)(electron_1.app.getAppPath(), 'main/preload.js')
            // nodeIntegration: true,
            // contextIsolation: false
        }
    });
    if (electron_is_dev_1.default) {
        childWindow.loadURL(`http://localhost:3000#${arg}`);
    }
    else {
        childWindow.loadFile((0, path_1.join)(electron_1.app.getAppPath(), 'build/index.html'), { hash: arg });
    }
});
