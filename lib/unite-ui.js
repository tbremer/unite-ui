"use babel";

import { readFileSync, writeFileSync } from 'fs';

export default {
  activate() {
    /** ensure proper classnames **/
    this.changeCloseButton(atom.config.get('unite-ui.closeButtonPosition'));
    this.condenseTabs(atom.config.get('unite-ui.condensedTabs'));
    this.condenseTreeView(atom.config.get('unite-ui.condensedTreeView'));

    /** add listeners **/
    atom.config.onDidChange('unite-ui.closeButtonPosition', () => this.changeCloseButton(atom.config.get('unite-ui.closeButtonPosition')));
    atom.config.onDidChange('unite-ui.condensedTabs', () => this.condenseTabs(atom.config.get('unite-ui.condensedTabs')));
    atom.config.onDidChange('unite-ui.condensedTreeView', () => this.condenseTreeView(atom.config.get('unite-ui.condensedTreeView')));
    atom.config.onDidChange('unite-ui.fontStack', () => this.changeFontStack(atom.config.get('unite-ui.fontStack')));
  },

  changeCloseButton(position) {
    const workspace = atom.workspace.getElement();

    switch(position) {
      case 'left': return workspace.classList.add('unite-ui-close-btn-left');
      case 'right': return workspace.classList.remove('unite-ui-close-btn-left');
      default: throw new Error('Unknown option for unite-ui changeCloseButton');
    }
  },

  condenseTabs(boolean) {
    if (boolean) atom.workspace.getElement().classList.add('unite-ui-condense-tabs');
    if (!boolean) atom.workspace.getElement().classList.remove('unite-ui-condense-tabs');
  },

  condenseTreeView(boolean) {
    if (boolean) atom.workspace.getElement().classList.add('unite-ui-condense-tree');
    if (!boolean) atom.workspace.getElement().classList.remove('unite-ui-condense-tree');
  },

  changeFontStack(value) {
    const packagePath = atom.packages.resolvePackagePath('unite-ui');
    const variablesPath = 'styles/ui-variables.less';
    const path = `${packagePath}/${variablesPath}`;
    const find = /@font-family:(.+);/
    const fonts = {
      system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      monospace: `"Operator Mono for Powerline", "Operator Mono", "Monaco", "Consolas", "Inconsolata", "Droid Sans Mono", "Deja Vu Sans Mono", monospace`,
    }

    const uiVars = readFileSync(path, 'utf-8');
    const newVars = uiVars.replace(find, `@font-family: ${fonts[value]};`)

    writeFileSync(path, newVars);

    atom.notifications.addSuccess(
      'In order to see the font changes, you will need to reload the window',
      {
        dismissable: true,
        buttons: [
          {
            text: 'Reload',
            onDidClick() {
              atom.commands.dispatch(
                atom.workspace.getElement(),
                'window:reload'
              )
            }
          }
        ],
      }
    );

    // console.group('changeFontStack');
    // console.log('before:', uiVars);
    // console.log('after:', newVars);
    // console.groupEnd();


  },
}
