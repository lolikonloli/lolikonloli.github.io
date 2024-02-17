# PySide6的安装及工具介绍



# 安装软件

　　​`pip install pyside6 -i https://pypi.mirrors.ustc.edu.cn/simple`​安装PySide6，建议使用清华源或者中科大源加速下载，也可以使用`pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple`​永久设置镜像源，然后使用`pip install pyside6`​安装

# 工具介绍

## 查看库的安装位置

　　终端输入`pip show pyside6`​可以查看所有库的安装路径，在这个文件夹下找到PySide6库的文件夹，进入后可以找到designer.exe rcc.exe uic.exe这三个程序，推荐右键将designer.exe固定到开始界面或创建快捷方式到桌面

## designer

　　​![designer的界面](assets/image-20240217205955-00k02ls.png)​

　　designer是这三个软件中唯一一个有界面的软件，用于图形化界面的设计

## rcc

　　rcc负责将图片等资源转换成Python可以读取的.py文件

## uic

　　uic负责将designer设计的界面转换成Python可以读取的.py文件


---

> 作者: lolikonloli  
> URL: /pyside6%E7%9A%84%E5%AE%89%E8%A3%85%E5%8F%8A%E5%B7%A5%E5%85%B7%E4%BB%8B%E7%BB%8D/  

