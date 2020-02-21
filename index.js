#!/usr/bin/env node

const shell = require('shelljs')

const format = text => {
    return text.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

let moduleName = process.argv.slice(2)[0];
moduleName = format(moduleName);
console.info('building module ',moduleName);
const response  = shell.exec('sh ./bin/module-creator.sh ' + moduleName)
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
