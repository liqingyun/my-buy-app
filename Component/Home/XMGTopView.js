/**
 * Created by tcjsb on 2017/6/27.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入外部的JSON 数据
var TopMenu = require('../../LocalData/TopMenu.json');

// 引入外部组件
var TopListView = require('./XMGTopListView');

var TopView = React.createClass({
  getInitialState() {
    return{
      activePage: 0
    }
  },
  render() {
    return (
      <View style={styles.container}>
        {/* 内容部分 */}
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onScrollAnimationEnd}
        >
          {this.renderScrollItem()}
        </ScrollView>
        {/* 页码部分 */}
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  },
  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e) {
    // 求出我们当前的一个页码
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
    // 更新状态机
    this.setState({
      activePage: currentPage
    });
  },

  // scrollView 内部的组件
  renderScrollItem() {
    // 组件数据
    var itemArr = [];
    // 数据数组
    var dataArr = TopMenu.data;
    // 遍历创建组件
    for(var i = 0; i < dataArr.length; i++){
      itemArr.push(
        <TopListView key={i} dataArr={dataArr[i]} />
      );
    }
    // 返回数据
    return itemArr;
  },
  // 页码指示器
  renderIndicator() {
    // 指示器数组
    var indicatorArr = [], style;
    // 遍历创建组件
    for(var i = 0; i < 2; i++){
      // 设置圆点的样式
      style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'}

      indicatorArr.push(
        <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
      );
    }
    // 返回数组
    return indicatorArr;
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  indicatorViewStyle: {
    // 改变主轴的方向
    flexDirection: 'row',
    // 水平居中
    justifyContent: 'center'
  }
});

// 输出组件类
module.exports = TopView;
