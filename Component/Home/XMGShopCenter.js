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

// 引入外部的组件类
var CommonCell = require('./XMGBottomCommonCell');

var ShopCenter = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/* 上部分 */}
        <CommonCell
          leftIcon="gw"
          leftTitle="购物中心"
          rightTitle="全部4家"
        />
        {/* 下部分 */}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = ShopCenter;
