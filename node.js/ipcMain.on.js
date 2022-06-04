const { ipcMain, app } = require('electron');

module.exports = function (win) {

    /**
     * 监听来自主渲染进程的信息
     * ------------------------------------
     */

    // 最小化
    ipcMain.on('minimize', () => { win.minimize(); });

    // 退出系统
    ipcMain.on('quit', () => { app.exit(); });

    /**
     * 监听来自原生窗口操作
     * -------------------------------------
     */

    // 窗口失去焦点
    app.on('browser-window-blur', () => { win.webContents.send("browser-window-blur"); });

    // 窗口获得焦点
    app.on('browser-window-focus', () => { win.webContents.send("browser-window-focus"); });

};
