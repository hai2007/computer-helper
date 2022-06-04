const { ipcMain, app, BrowserWindow } = require('electron');

let winLise = {};

module.exports = function (win) {

    /**
     * 监听来自主渲染进程的信息
     * ------------------------------------
     */

    // 最小化
    ipcMain.on('minimize', () => { win.minimize(); });

    // 退出系统
    ipcMain.on('quit', () => { app.exit(); });

    // 打开窗口
    ipcMain.on('new-win', (event, winName) => {

        if (winLise[winName]) {
            winLise[winName].show();
        } else {

            let newWin = new BrowserWindow({
                width: 960,
                height: 620,
                resizable: false,
                frame: false,
                webPreferences: {
                    nodeIntegration: true,
                    webSecurity: false
                }
            })

            newWin.loadFile('./static/' + winName + '/index.html');

            winLise[winName] = newWin
        }

    });

    // 打开窗口
    ipcMain.on('close-win', (event, winName) => {
        winLise[winName].close();
        winLise[winName] = null;
    })

    /**
     * 监听来自原生窗口操作
     * -------------------------------------
     */

    // 窗口失去焦点
    app.on('browser-window-blur', () => { win.webContents.send("browser-window-blur"); });

    // 窗口获得焦点
    app.on('browser-window-focus', () => { win.webContents.send("browser-window-focus"); });

};
