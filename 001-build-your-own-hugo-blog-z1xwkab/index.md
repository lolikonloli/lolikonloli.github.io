# 构建自己的Hugo博客

# 构建自己的Hugo博客

　　hugo是一个轻量级的静态网页生成工具。本文就简单的记录一下使用hugo搭建博客，使用两个仓库实现源代码和web文件之间的隔离，使用github action实现自动化部署，之后也会记录一下美化的过程。

# 安装软件

## 安装hugo

　　打开hugo的github链接: https://github.com/gohugoio/hugo

　　点击右侧的release，下滑页面后选择hugo_extened_xx版本号xx_windwos_amd64.zip

　　解压该文件到D:\Application\hugo文件夹下

　　打开windows搜索栏，搜索环境变量，点击编辑系统环境变量

　　在系统环境变量中找到Path， 点击新建，选择路径到hugo的文件夹下

## 测试hugo是否安装完成

　　打开终端，输入hugo version，如果可以看到输出版本号，则安装完成

## 安装git

　　参考1.2 安装hugo。使用同样的方法安装git。

　　添加环境变量时，路径选择到git/bin的路径下即可

## 测试git是否安装完成

　　打开终端，输入git version，如果可以看到输出版本号，则安装完成

# 初始化网站

## 初始化文件夹

　　打开你要存放博客源文件的文件夹，在空白处右键，找到在此处打开cmd/powershell/wt

　　可以看到终端的最前面，会显示这个终端所在的路径，确定这个路径是你要存放博客源文件的路径

　　输入`hugo new site `博客文件夹名字``​

　　进入文件夹 输入`cd `博客文件夹名字``​

　　输入`hugo server`​，可以看到Page Not Found

## 使用主题

　　输入`git init`​

　　输入`git submodule add https://github.com/hugo-fixit/FixIt     ./themes/FixIt`​

　　打开hugo.toml，添加如下关键字`theme = ""`​，将主题修改为FixIt

　　输入`hugo server`​已经可以看到部署起来的网页了

# 添加文章

# 本地化部署

# 使用Github Action自动化部署

# 使用思源笔记和自动化部署插件


---

> 作者: lolikonloli  
> URL: /001-build-your-own-hugo-blog-z1xwkab/  
