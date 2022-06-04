<img src='./review.png' />

# Computer Helper
计算机助手

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/computer-helper/issues)，欢迎参与维护！

## 如何启动开发？

我们有两个程序需要分别启动，首先是web进程：

```bash
npm run dev-web
```

只有在web进程启动成功以后才应该执行下面的命令以启动主进程：

```bash
npm run dev-win
```

当然，上面是windows下的命令，如果你是mac电脑请使用：

```bash
npm run dev-mac
```

## 如何调试主进程？

首先进入项目，运行：

```bash
npm run debug-win
```

上面是windows电脑，如果是mac电脑请使用：

```bash
npm run debug-mac
```

当然,你应该在调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

然后点击“ Open dedicated DevTools for Node ”后进入调试界面即可。

## 如何打包成exe或dmg等最终软件或安装包？

如果你是windows请执行：

```bash
npm run build-win
```

相应的mac电脑请执行：

```bash
npm run build-mac
```


开源协议
---------------------------------------
[MIT](https://github.com/hai2007/computer-helper/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.github.io/SweetHome/) 走一步，再走一步。
