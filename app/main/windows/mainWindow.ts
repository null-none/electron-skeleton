import { BrowserWindow } from 'electron';
import path from 'path';

export default class MainWindow {
  mainWindow: BrowserWindow;
  constructor() {
    this.createMainWindow();
  }

  createMainWindow() {
    this.mainWindow = new BrowserWindow({
      height: 420,
      width: 480,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
        allowRunningInsecureContent: true,
        devTools: true
      },
      icon: path.join(__dirname, './assets/icon.icns'),
    });
  }

  loadURL(url: string) {
    this.mainWindow.loadURL(url);
  }

  toggleDevTools() {
    this.mainWindow.webContents.toggleDevTools();
  }

  show() {
    this.mainWindow.show();
  }
}
