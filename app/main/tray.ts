import { Tray, Menu } from 'electron';

const contextMenu = Menu.buildFromTemplate([
  { label: 'Menu', type: 'radio', checked: true }
]);

export default class TrayCreator {
  trayInstance: Tray;
  path: string;
  constructor(iconPath: string) {
    this.path = iconPath;
  }

  initTray() {
    this.trayInstance = new Tray(this.path);
    this.setContextMenu(contextMenu);
  }

  setContextMenu(menu: Menu) {
    this.trayInstance.setContextMenu(menu);
  }
}
