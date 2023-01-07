import { join } from 'path'
import { BrowserWindow, app, ipcMain, protocol, shell } from 'electron'
import isDev from 'electron-is-dev'

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let window: BrowserWindow

// Create the browser window.
const createWindow = () => {
  window = new BrowserWindow({
    width: 1280,
    height: 768,
    frame: true,
    show: true,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(app.getAppPath(), 'dist/preload/index.js')
    }
  })

  // and load the index.html of the app.
  if (isDev) {
    window.loadURL(`http://localhost:3000`)

    // Open the DevTools.
    window.webContents.openDevTools({
      mode: 'bottom'
    })
  } else {
    window.loadFile(join(app.getAppPath(), 'build/index.html'))
  }

  // Make all links open with the browser, not with the application
  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
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

app.on('second-instance', () => {
  if (window) {
    // Focus on the main window if the user tried to open another
    if (window.isMinimized()) window.restore()
    window.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// new window example arg: new windows url
ipcMain.handle('open-win', (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload: join(app.getAppPath(), 'main/preload.js')
    }
  })

  if (isDev) {
    childWindow.loadURL(`http://localhost:3000#${arg}`)
  } else {
    childWindow.loadFile(join(app.getAppPath(), 'build/index.html'), {
      hash: arg
    })
  }
})
