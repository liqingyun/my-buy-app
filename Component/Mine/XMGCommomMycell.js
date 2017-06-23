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
  TouchableOpacity,
  Image
} from 'react-native';

var MyCell = React.createClass({
  getDefaultProps() {
    return {
      leftIconName: '',
      leftTitle: '',
      rightIconName: '',
      rightTitle: ''
    }
  },
  render() {
    return (
      <View style={styles.container}>
        {/*--- 左边 ---*/}
        <View style = {styles.leftViewStyle}>
          <Image source = {{uri: this.props.leftIconName}} style = {styles.leftImgStyle} />
          <Text style = {styles.leftTitleStyle}>{this.props.leftTitle}</Text>
        </View>
        {/*--- 右边 ---*/}
        <View style = {styles.rightViewStyle}>
          {this.rightSubView()}
        </View>
      </View>
    );
  },
  // 右边的内容
  rightSubView() {
    return(
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
        {this.renderRightContent()}
        {/* 箭头 */}
        <Image source = {{uri: 'icon_cell_rightArrow'}} style = {{width: 8, height: 13, marginRight: 8}} />
      </View>
    )
  },
  // 右边具体返回的值
  renderRightContent() {
    if (this.props.rightIconName.length == 0) { //不返回图片
      return(
        <Text>{this.props.rightTitle}</Text>
      )
    } else {
      return(
        <Image source = {{uri: 'new'}} style = {{width: 24, height: 13}} />
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    // 主轴的方向
    flexDirection: 'row',
    // 主轴的对齐方式
    justifyContent: 'space-between'
  },
  leftViewStyle: {
    // 主轴的方向
    flexDirection: 'row',
    // 侧轴居中
    alignItems: 'center'
  },
  rightViewStyle: {

  },
  leftImgStyle: {  // 左边的图片
    width: 30,
    height: 30
  },
  leftTitleStyle: {

  }
});

// 输出组件类
module.exports = MyCell;
