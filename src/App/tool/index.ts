import { Component } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {
    openExternal(event) {
        globalThis.nodeRequire('electron').shell.openExternal(event.target.getAttribute('tag'))
    }
    openNewWin(event) {
        globalThis.nodeRequire('electron').ipcRenderer.send('new-win', event.target.getAttribute('tag'))
    }
}
