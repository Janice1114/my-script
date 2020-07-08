# 命令行程序开发

```base
教程：https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html
```

## 第一步，装包

```base
npm（cnpm,yarn） i
```

## 第二步骤，执行命令使得脚本能在任意目录下执行

```base
npm link
```

## 第三步骤，执行脚本

```base
my-script 命令名字 --参数1=值
```

## 🌰

在某个项目中初始化一个webpack工程

```base
my-script webp-init --type=npm
```

查看/修改git用户名和邮箱

```base
my-script git-user // 查看全局git设置的name和email

my-script git-user --name=XXX --email=XXX // 查看全局git设置的name和email

my-script git-user --type=local // 查看当前项目下git设置的name和email
```

