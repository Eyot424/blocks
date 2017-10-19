title: 概述
---

## Blocks是什么？
Blocks是基于Vue2.0开发的，通过拖拽+配置的形式，生成页面的工具。

## 安装

### 安装前提

安装 Blocks 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

如果您的电脑中尚未安装所需要的程序，请根据以下安装指示完成安装。

{% note warn Mac 用户 %}
您在编译时可能会遇到问题，请先到 App Store 安装 Xcode，Xcode 完成后，启动并进入 **Preferences -> Download -> Command Line Tools -> Install** 安装命令行工具。
{% endnote %}

### 安装 Git

- Windows：下载并安装 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ：`brew install git`;或下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/) 安装。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`

{% note warn Windows 用户 %}
由于众所周知的原因，从上面的链接下载git for windows最好挂上一个代理，否则下载速度十分缓慢。
{% endnote %}

### 安装 Node.js

安装 Node.js 的最佳方式是使用 [nvm](https://github.com/creationix/nvm)。

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

安装完成后，重启终端并执行下列命令即可安装 Node.js。

``` bash
$ nvm install stable
```

或者您也可以下载 [安装程序](http://nodejs.org/) 来安装。
{% note info Windows 用户 %}
对于windows用户来说，建议使用安装程序进行安装。安装时，请勾选**Add to PATH**选项。
另外，您也可以使用**Git Bash**，这是git for windows自带的一组程序，提供了Linux风格的shell，在该环境下，您可以直接用上面提到的命令来安装Node.js。打开它的方法很简单，在任意位置单击右键，选择“Git Bash Here”即可。由于Hexo的很多操作都涉及到命令行，您可以考虑始终使用**Git Bash**来进行操作。
{% endnote %}
### 安装 Blocks

所有必备的应用程序安装完成后，即可安装 Blocks

``` bash
$ git clone https://github.com/wmfe/Blocks.git
$ cd Blocks
$ npm install
```
