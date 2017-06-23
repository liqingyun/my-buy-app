/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';

/**-------------导入外部的组件类----------------**/
var Main = require('./Component/Main/XMGMain.js');
var LaunchImage = require('./Component/Main/XMGLaunchImage')

export default class myBuyApp extends Component {
  render() {
    return (
      <Navigator.Navigator
        initialRoute={{ name: '启动页', component: LaunchImage }}
        configureScene={(route) => {
            return Navigator.Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
            let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('myBuyApp', () => myBuyApp);
