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
      <ScrollView
        style={styles.scrollViewStyle}
      >
        <View style = {{marginTop: 20}}>
          {/* 修改 git config 配置 */}
          <MyCell
            leftIconName = "draft"
            leftTitle = "我的钱包"
            rightTitle = "账户余额 ￥100"
          />
          <MyCell
            leftIconName = "like"
            leftTitle = "抵用券"
            rightTitle = "10张"
          />
        </View>
        <View style = {{marginTop: 20}}>
          {/* 修改 git config 配置 */}
          <MyCell
            leftIconName = "card"
            leftTitle = "积分商城"
          />
        </View>
        <View style = {{marginTop: 20}}>
          {/* 修改 git config 配置 */}
          <MyCell
            leftIconName = "new_friend"
            leftTitle = "今日推荐"
            rightIconName = "me_new"
          />
        </View>
        <View style = {{marginTop: 20}}>
          {/* 修改 git config 配置 */}
          <MyCell
            leftIconName = "pay"
            leftTitle = "我要合作"
            rightTitle = "轻松开店"
          />
        </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: '#e8e8e8'
  }
});

// 输出组件类
module.exports = Mine;
