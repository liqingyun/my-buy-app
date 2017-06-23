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
  Platform   // 判断当前的一个运行系统
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');

var Main = React.createClass({
  // 初始化函数(变量是可以改变的，充当状态机的角色)
  getInitialState() {
    return {
      selectedTab: 'home'  // 默认是第一个
    }
  },
  render() {
    return (
      <TabNavigator>
        {/* 首页 */}
        {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home)}
        {/* 商家 */}
        {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', '商家', Shop)}
        {/* <TabNavigator.Item
          title="商家"
          renderIcon = {() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle} />}  // 图标
          renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle} />}  // 选中的图标
          onPress={() => {this.setState({selectedTab: 'shop'})}}
          selected={this.state.selectedTab === 'shop'}
          >
          <Navigator.Navigator
            initialRoute={{ name: '商家', component: Shop }}
            configureScene={(route) => {
                return Navigator.Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                  return <Component {...route.params} navigator={navigator} />
            }}
          />
        </TabNavigator.Item> */}
        {/* 我的 */}
        {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}
        {/* <TabNavigator.Item
          title="我的"
          renderIcon = {() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle} />}  // 图标
          renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle} />}  // 选中的图标
          onPress={() => {this.setState({selectedTab: 'mine'})}}
          selected={this.state.selectedTab === 'mine'}
          >
          <Navigator.Navigator
            initialRoute={{ name: '我的', component: Mine }}
            configureScene={(route) => {
                return Navigator.Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                  return <Component {...route.params} navigator={navigator} />
            }}
          />
        </TabNavigator.Item> */}
        {/* 更多 */}
        {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}
        {/* <TabNavigator.Item
          title="更多"
          renderIcon = {() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle} />}  // 图标
          renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle} />}  // 选中的图标
          onPress={() => {this.setState({selectedTab: 'more'})}}
          selected={this.state.selectedTab === 'more'}
          >
          <Navigator.Navigator
            initialRoute={{ name: '更多', component: More }}
            configureScene={(route) => {
                return Navigator.Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                  return <Component {...route.params} navigator={navigator} />
            }}
          />
        </TabNavigator.Item> */}
      </TabNavigator>
    );
  },
  // 每一个 TabBarItem
  renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText ) {
    return (
      <TabNavigator.Item
        title = {title}  // 传递变量 要加大括号
        renderIcon = {() => <Image source={{uri: iconName}} style={styles.iconStyle} />}  // 图标
        renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle} />}  // 选中的图标
        onPress={() => {this.setState({selectedTab: selectedTab})}}
        selected={this.state.selectedTab === selectedTab}
        selectedTitleStyle = {styles.selectedTitleStyle}
      >
        <Navigator.Navigator
          initialRoute={{ name: componentName, component: component }}
          configureScene={(route) => {
              return Navigator.Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
              let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
          }}
        />
      </TabNavigator.Item>
    )
  }
});

const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS === 'iso' ? 30 : 25,
    height: Platform.OS === 'iso' ? 30 : 25
  },
  selectedTitleStyle: {
    color: 'orange'
  }
});

// 输出组件类
module.exports = Main;
