#!/bin/bash

npm i -g create-react-native-module
npm i -g react-native-cli
create-react-native-module $1
cd react-native-$1
react-native init example
npm i
npm i eslint@latest --SD
# npx eslint --init
npm i flow-bin@latest --SD
npx flow init
npm i babel-eslint@latest --SD
npm i eslint-plugin-babel@latest --SD