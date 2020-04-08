import { Menu, MenuItemConstructorOptions, app } from 'electron';

const mainMenuTemplate: MenuItemConstructorOptions[] = [
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Exit',
        click: () => { app.quit(); }
      }
    ]
  }
];

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

export { mainMenu };
