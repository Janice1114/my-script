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
  return;
}
// git提交代码到远程
if (argv._.toString() === 'git-push') {
  shell.exec('git add ./');
  shell.exec(`git commit -m "${argv.m}"`);
  shell.exec('git push');
  return;
}

// 初始化一个webpack的目录
if (argv._.toString() === 'webp-init') {
  const type  = argv.type || 'npm'; // 使用npm yarn 还是cnpm
  shell.echo(`执行的命令为：${type} init -y`);
  shell.echo(`执行的命令为：${type} add webpack webpack-cli -D`);
  if (argv.i === 'i webpack')
  {
    shell.echo(`执行的命令为：${type} install --save-dev webpack`);
    shell.echo(`执行的命令为：${type} install --save-dev webpack-cli`);
    shell.exec(`${type} install --save-dev webpack`);
    shell.exec(`${type} install --save-dev webpack-cli`);
  }
  shell.exec(`${type} init -y`);
  shell.exec(`${type} add webpack webpack-cli -D`);


  return;
}
// npm, yarn, cnpm源设置
if (argv._.toString() === 'npm-src') {
  const type  = argv.type || 'npm'; // 使用npm yarn 还是cnpm
  argv.set ? shell.echo(`执行的命令为：${type} config set registry ${argv.src}`)
           : shell.echo(`执行的命令为：${type} config get registry`);
  
  argv.set ? shell.exec(`${type} config set registry ${argv.src}`)
  : shell.exec(`${type} config get registry`);
  return;
}

// 全局/局部设置//查看git的用户名和邮箱
if (argv._.toString() === 'git-user') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config  user.name ${argv.name || ''}`);
  shell.echo(`执行的命令为：git config --${type} user.email ${argv.email || ''}`);
  // 执行
  argv.name ? shell.exec(`git config --${type} user.name ${argv.name}`)
            : shell.exec(`git config --${type} user.name`);
  argv.email ? shell.exec(`git config --${type} user.email ${argv.email}`)
             : shell.exec(`git config --${type} user.email`);
  return;
}

if (argv._.toString() === 'git-my-count') {
  const name  = argv.name || 'Janice1114'; 
  const email  = argv.email || '2412947593@qq.com'; 
  // 输出
  shell.echo(`执行的命令为：git config  user.name ${name || ''}`);
  shell.echo(`执行的命令为：git config  user.email ${email || ''}`);
  // 执行
  shell.exec(`git config  user.name ${name}`)
  shell.exec(`git config user.email ${email}`)
  return;
}
if (argv._.toString() === 'git-store') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config --${type} credential.helper store}`);
  // 执行
  shell.exec(`git config --${type} credential.helper store}`)
}

// 全局/局部查看git config
if (argv._.toString() === 'git-list') {
  const type  = argv.type || 'global'; //全局还是局部设置
  // 输出
  shell.echo(`执行的命令为：git config --${type} --list`);
  // 执行
  shell.exec(`git config --${type} --list`);
  type === 'global' && argv.set && shell.exec('code ~/.gitconfig');
  return;
}

// 打开git的SSH代理设置
if (argv._.toString() === 'git-ssh') {
  shell.echo('执行的命令为：code ~/.ssh/config');
  shell.exec('code ~/.ssh/config');
  return;
}

// 打开proxychain-ng代理设置
if (argv._.toString() === 'git-proxyc4') {
  shell.echo('执行的命令为：code /usr/local/etc/proxychains.conf');
  shell.exec('code /usr/local/etc/proxychains.conf');
  return;
}

// 查看端口占用情况
if (argv._.toString() === 'get-port') {
  argv.p && shell.echo(`执行的命令为：lsof -i:${argv.p}`);
  argv.p && shell.exec(`lsof -i:${argv.p}`);
  return;
}
// kill进程
if (argv._.toString() === 'kill-pro') {
  argv.p && shell.echo(`执行的命令为：kill -9 ${argv.p}`);
  argv.p && shell.exec(`kill -9 ${argv.p}`);
  return;
}


shell.echo('初始化git仓库和设置远程仓库: git-init, 参数：src(远程库名称)');
shell.echo('git提交代码到远程: git-push, 参数：m(提交commit)');
shell.echo('初始化一个webpack的目录: webp-init, 参数：type(npm, cnpm, yarn)');
shell.echo('npm, yarn, cnpm源设置: npm-src, 参数：type(npm, cnpm, yarn)');
shell.echo('全局/局部设置/查看git的用户名和邮箱: git-user, 参数：type(global,local)');
shell.echo('设置当前仓库的user和email: git-my-count, 参数：name, email');
shell.echo('全局/局部查看git config: git-list, 参数：type(global,local)');
shell.echo('存储git密码: git-store, 参数：type(global,local)');
shell.echo('打开ssh代理文件: git-ssh');
shell.echo('打开npm代理的文件: git-proxyc4');
shell.echo('查看端口占用情况：get-port，参数：p(端口号)');
shell.echo('杀掉进程: kill-pro, 参数：参数：p(进程ID)');