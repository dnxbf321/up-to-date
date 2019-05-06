#!/usr/bin/env node

const rcLoader = require('rc-config-loader');
const ncu = require('npm-check-updates');
const exec = require('child_process').exec;
const cwd = process.cwd();

const rcFile = rcLoader('up-to-date', {
  configFileName: '.up-to-date.config',
  defaultExtension: ['.json', '.js'],
  cwd: cwd
});

if (!rcFile) {
  const err = new Error(`.up-to-date.config.{json,js} not found at ${cwd}`);
  throw err;
}

const ncuConfig = rcFile.config || {};
ncu.run(ncuConfig).then(upgraded => {
  if (Object.keys(upgraded).length > 0) {
    let pkgs = Object.keys(upgraded).map(pkg => {
      return `${pkg}@${upgraded[pkg]}`;
    });
    let command = `npm install ${pkgs.join(' ')}`;
    console.log(command);
    exec(command).stdout.pipe(process.stdout);
  } else {
    console.log('no dependencies need upgrade', '\n\n');
  }
});
