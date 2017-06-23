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
  View,
  ScrollView
} from 'react-native';

/**---导入外部组件---**/
var MyCell = require('./XMGCommomMycell');

var Mine = React.createClass({
  render() {
    return (
      <ScrollView>
        <View style = {{marginTop: 20}}>
          {/* 修改 git config 配置 */}
          <MyCell
            leftIconName = "draft"
            leftTitle = "我的钱包"
            rightTitle = "账户余额 ￥100"
          />
        </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = Mine;
