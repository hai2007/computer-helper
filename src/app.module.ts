import { Module } from 'nefbl'

// 组件
import AppComponent from './App/index'
import uiWinBtn from './component/ui-win-btn/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiLazy from 'sprout-ui/nefbl/directive/ui-lazy'

@Module({
    declarations: [
        AppComponent, uiWinBtn,
        uiBind, uiModel, uiOn, uiLazy
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
