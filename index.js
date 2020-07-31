#!/usr/bin/env node

const shell = require("shelljs");
const argv = require('yargs').argv;


// 初始化git仓库和设置远程仓库
if (argv._.toString() === 'git-init') {
  shell.echo('git init 开始');
  shell.exec('git init');
  shell.exec(`git remote add origin https://github.com/Janice1114/${argv.src}`);
  shell.exec('git add ./');
  shell.exec('git commit -m "init project"');
  shell.exec('git push --set-upstream origin master');
}
// git提交代码到远程
if (argv._.toString() === 'git-push') {
  shell.exec('git add ./');
  shell.exec(`git commit -m "${argv.m}"`);
  shell.exec('git push');
}

// 初始化一个webpack的目录
if (argv._.toString() === 'webp-init') {
  const type  = argv.type || 'npm'; // 使用npm yarn 还是cnpm
  shell.echo(`执行的命令为：${type} init`);
  shell.echo(`执行的命令为：${type} add webpack webpack-cli -D`);
  shell.exec(`${type} init`);
  shell.exec(`${type} add webpack webpack-cli -D`);
}
// npm, yarn, cnpm源设置
if (argv._.toString() === 'npm-src') {
  const type  = argv.type || 'npm'; // 使用npm yarn 还是cnpm
  argv.set ? shell.echo(`执行的命令为：${type} config set registry ${argv.src}`)
           : shell.echo(`执行的命令为：${type} config get registry`);
  
  argv.set ? shell.exec(`${type} config set registry ${argv.src}`)
  : shell.exec(`${type} config get registry`);
}

// 全局/局部设置//查看git的用户名和邮箱
if (argv._.toString() === 'git-user') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config --${type} user.name ${argv.name || ''}`);
  shell.echo(`执行的命令为：git config --${type} user.email ${argv.email || ''}`);
  // 执行
  argv.name ? shell.exec(`git config --${type} user.name ${argv.name}`)
            : shell.exec(`git config --${type} user.name`);
  argv.email ? shell.exec(`git config --${type} user.email ${argv.email}`)
             : shell.exec(`git config --${type} user.email`);
}

if (argv._.toString() === 'git-my-count') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config  user.name ${argv.name || ''}`);
  shell.echo(`执行的命令为：git config  user.email ${argv.email || ''}`);
  // 执行
  argv.name ? shell.exec(`git config  user.name ${argv.name}`)
            : shell.exec(`git config  user.name`);
  argv.email ? shell.exec(`git config user.email ${argv.email}`)
             : shell.exec(`git config user.email`);
}

// 全局/局部查看git config
if (argv._.toString() === 'git-list') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config --${type} --list`);
  // 执行
  shell.exec(`git config --${type} --list`);
  type === 'global' && argv.set && shell.exec('code ~/.gitconfig');
}

// 打开git的SSH代理设置
if (argv._.toString() === 'git-ssh') {
  shell.echo('执行的命令为：code ~/.ssh/config');
  shell.exec('code ~/.ssh/config');
}

// 打开proxychain-ng代理设置
if (argv._.toString() === 'git-proxyc4') {
  shell.echo('执行的命令为：code /usr/local/etc/proxychains.conf');
  shell.exec('code /usr/local/etc/proxychains.conf');
}

// 查看端口占用情况
if (argv._.toString() === 'get-port') {
  argv.p && shell.echo(`执行的命令为：lsof -i:${argv.p}`);
  argv.p && shell.exec(`lsof -i:${argv.p}`);
}
// kill进程
if (argv._.toString() === 'kill-pro') {
  argv.p && shell.echo(`执行的命令为：kill -9 ${argv.p}`);
  argv.p && shell.exec(`kill -9 ${argv.p}`);
}