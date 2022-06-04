import { Component, ref } from 'nefbl'
import dealMem from '../../tool/dealMem'
import dealTime from '../../tool/dealTime'

import style from './index.scss'
import template from './index.html'

const os = globalThis.nodeRequire('os')

@Component({
    template,
    styles: [style]
})
export default class {

    openTime: any

    $setup() {
        return {
            openTime: ref(dealTime(os.uptime())), // 开机时长
            totalMem: ref(dealMem(os.totalmem())),// 总内存
            freeMem: ref(dealMem(os.freemem())),// 空闲内存
        }
    }

    $mounted() {
        setTimeout(() => {
            this.openTime = dealTime(os.uptime())
        }, 1000)
    }

}
