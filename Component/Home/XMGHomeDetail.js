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

var Mine = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          首页详情页
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = Mine;
