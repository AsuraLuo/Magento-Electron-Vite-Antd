import { join } from 'path'
import { BrowserWindow, IpcMainEvent, app, ipcMain, protocol } from 'electron'
import isDev from 'electron-is-dev'

// Create the browser window.
const createWindow = () => {
  const window = new BrowserWindow({
    width: 1280,
    height: 768,
    frame: true,
    show: true,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(app.getAppPath(), 'main/preload.js')
    }
  })

  // and load the index.html of the app.
  // process.env.npm_lifecycle_event
  if (isDev) {
    window.loadURL(`http://localhost:3000`)
  } else {
    window.loadFile(join(app.getAppPath(), 'build/index.html'))
  }

  // Open the DevTools.
  window.webContents.openDevTools({
    mode: 'bottom'
  })

  // For AppBar
  ipcMain.on('minimize', () => {
    window.isMinimized() ? window.restore() : window.minimize()
  })

  ipcMain.on('maximize', () => {
    window.isMaximized() ? window.restore() : window.maximize()
  })

  ipcMain.on('close', () => {
    window.close()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  protocol.registerFileProtocol('files', (request, callback) => {
    const url = request?.url?.substr(8)
    const path = decodeURI(url.split('?')[0])
    callback({ path })
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  console.log(message)
  setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
})
