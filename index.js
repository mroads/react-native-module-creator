#!/usr/bin/env node


console.info('test')
const shell = require('shelljs')


console.log(process.argv);


const moduleName = process.argv.slice(2)[0];

console.info('building module ',moduleName);


const response  = shell.exec('sh ./module-creator.sh ' + moduleName)

console.info('response',response);




/*
npm i -g create-react-native-module
npm i -g react-native-cli
create-react-native-module $1
cd react-native-$1
react-native init example
npm i
npm i eslint@latest --SD
npx eslint --init
npm i flow-bin@latest --SD
npx flow init
npm i babel-eslint@latest --SD
npm i eslint-plugin-babel@latest --SD



*/


// let response  = shell.exec('create-react-native-module '+moduleName)

// console.info('response',response);

// response  = shell.exec('cd react-native-'+moduleName);

// console.info('response',response);

// response  = shell.exec('react-native init example')

// console.info('response',response);

// response  = shell.exec('npm i')

// console.info('response',response);

// response  = shell.exec('npm i eslint@latest --SD')

// console.info('response',response);


// response  = shell.exec('npx eslint --init')

// console.info('response',response);


// response  = shell.exec('npm i eslint@latest --SD')

// console.info('response',response);
