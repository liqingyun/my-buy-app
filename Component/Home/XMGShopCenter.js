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
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

// 引入外部的组件类
var CommonCell = require('./XMGBottomCommonCell');
// 引入外部的JSON数据
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
  getDefaultProps() {
    // 回调函数
    return{
      popTopHomeView: null
    }
  },
  render() {
    return (
      <View style={styles.container}>
        {/* 上部分 */}
        <CommonCell
          leftIcon="gw"
          leftTitle="购物中心"
          rightTitle={Home_D5.tips}
        />
        {/* 下部分 */}
        <ScrollView
          style={styles.ScrollViewStyle}
          horizontal={true} // 横向
          showsHorizontalScrollIndicator={false}
        >
          {this.renderAllItem()}
        </ScrollView>
      </View>
    );
  },

  // 返回下部分的所有的 Item
  renderAllItem() {
    // 定义 组件数组
    var itemArr = [];
    // 取出数据
    var shopData = Home_D5.data;
    // 遍历创建组件
    for(var i = 0; i < shopData.length; i++){
      // 取出单个数据
      var data = shopData[i];
      // 创建组件装入数组
      itemArr.push(
        <ShopCenterItem
          shopImage = {data.img}
          shopSale = {data.showtext.text}
          shopName = {data.name}
          detailurl = {data.detailurl}
          key = {i}
          popTopShopCenter = {(url) => this.popTopHome(url)}
        />
      );
    }
    // 返回组件数组
    return itemArr;
  },
  popTopHome(url) {
    // 判断
    if (this.props.popTopHomeView == null) {
      return;
    }
    // 执行回调函数
    this.props.popTopHomeView(url);
  }
});

// 每一个商场
var ShopCenterItem = React.createClass({
  getDefaultProps() {
    return{
      shopImage: '',
      shopSale: '',
      shopName: '',
      detailurl: '',
      popTopShopCenter: null
    }
  },
  render() {
    return(
      <TouchableOpacity
        onPress={() => this.clickItem(this.props.detailurl)}
      >
        <View style={styles.itemViewStyle}>
          <Image source={{uri: this.props.shopImage}} style={styles.ImageStyle} />
          <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
          <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    )
  },
  clickItem(url) {
    // 判断
    if (this.props.detailurl == null) {
      return;
    }
    // 执行回调函数
    this.props.popTopShopCenter(url);
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
  },
  ImageStyle: {
    width: 120,
    height: 100,
    borderRadius: 8
  },
  ScrollViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10
  },
  itemViewStyle: {
    margin: 8
  },
  shopSaleStyle: {
    // 绝对定位
    position: 'absolute',
    left: 0,
    bottom: 30,
    backgroundColor: '#ffa500',
    padding: 2,
    color: '#fff',
    borderTopRightRadius: 8,
    borderTopRightRadius: 8
  },
  shopNameStyle: {
    textAlign: 'center',
    marginTop: 5
  }
});

// 输出组件类
module.exports = ShopCenter;
