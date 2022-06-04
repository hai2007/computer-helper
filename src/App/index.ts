import { Component, ref } from 'nefbl'

import style from './index.scss'
import template from './index.html'

import pages from './lazy-load'

@Component({
    template,
    styles: [style]
})
export default class {

    currentPage: any
    notFocus: any

    $setup() {
        return {
            currentPage: ref({}),
            notFocus: ref(false)
        }
    }

    $mounted() {
        this.loadPage(null)

        globalThis.nodeRequire('electron').ipcRenderer

            // 监听到窗口失去焦点
            .on("browser-window-blur", () => { this.notFocus = true })

            // 监听到窗口获得焦点
            .on("browser-window-focus", () => { this.notFocus = false })

    }

    loadPage(event) {
        let pagename = 'home'
        if (event) {
            pagename = event.target.getAttribute('tag')
        }

        pages[pagename]().then(data => {
            this.currentPage = {
                name: pagename,
                value: data.default
            }
        })
    }

}
