import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入外部的组件类
var CommonView = require('./XMGMiddleCommonView');

// 引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/* 左边 */}
        {this.renderLeftView()}
        {/* 右边 */}
        <View>
          {this.renderRightView()}
        </View>
      </View>
    );
  },
  // 左边的view
  renderLeftView() {
    // 拿到对应的数据
    var data = TopMiddleData.dataLeft[0];
    return(
      <TouchableOpacity onPress={() => {alert('0')}}>
        <View style={styles.leftViewStyle}>
          <Image source={{uri:data.img1}} style={styles.leftImageStyle} />
          <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
          <Text style={{color: '#999'}}>{data.title}</Text>
          <View style={{flexDirection: 'row', marginTop:5}}>
            <Text style={{color: '#21c0af', marginRight:5}}>{data.price}</Text>
            <Text style={{color: '#ffa800', backgroundColor:'#ffff00'}}>{data.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  // 右边的view
  renderRightView() {
    // 组件数组
    var itemArr = [];
    // 取出具体数据
    var rightData = TopMiddleData.dataRight;
    // 遍历创建组件
    for(var i = 0; i < rightData.length; i++){
      // 取出单独的数据
      var data = rightData[i];
      itemArr.push(
        <CommonView
          title={data.title}
          subTitle={data.subTitle}
          rightIcon={data.rightImage}
          titleColor={data.titleColor}
          key={i}
        />
      );
    }
    // 返回组件数组
    return itemArr;
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    // 改变主轴的方向
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  leftViewStyle: {
    width: width * 0.5,
    height: 119,
    backgroundColor: '#fff',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftImageStyle: {
    width: 120,
    height: 30,
    // 内容模式
    resizeMode: 'contain'
  }
});

// 输出组件类
module.exports = HomeMiddleView;

