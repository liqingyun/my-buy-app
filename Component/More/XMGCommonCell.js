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
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';

var CommonCell = React.createClass({
  getDefaultProps() {
    return{
      title: '',   // 标题
      isSwitch: false,   // 是否展示开关
      rightTitle: ''
    }
  },
  getInitialState() {
    return{
      isOn: false
    }
  },
  render() {
    return (
      <TouchableOpacity onPress = {() => {alert('点击cell')}}>
        <View style={styles.container}>
          {/* 左边 */}
          <Text style = {{marginLeft: 8}}>{this.props.title}</Text>
          {/* 右边 */}
          {this.renderRightViwe()}
        </View>
      </TouchableOpacity>
    );
  },
  // cell 右边显示的内容
  renderRightViwe() {
    // 判断
    if (this.props.isSwitch) {  // 如果是 true 就返回开关
      return (
        <Switch value = {this.state.isOn == true} onValueChange = {() => {this.setState({isOn: !this.state.isOn})}} style = {{marginRight: 8}} />
      )
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {this.rightTitle()}
          <Image source = {{uri: 'icon_cell_rightArrow'}} style = {{width: 8, height: 13, marginRight: 8}} />
        </View>
      )
    }
  },
  rightTitle() {
    if (this.props.rightTitle.length > 0) {
      return(
        <Text style = {{color: 'gray', marginRight: 10}}>{this.props.rightTitle}</Text>
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    // 主轴的方向
    flexDirection: 'row',
    // 侧轴对齐方式
    justifyContent: 'space-between',
    // 垂直居中
    alignItems: 'center'
  }
});

// 输出组件类
module.exports = CommonCell;
