'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    
    Image,

} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'
import { Alert,StyleProvider, Container, Header, Title, CheckBox, Content, Label, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as contant from "../util/contant"
import TabNavigator from 'react-native-tab-navigator';


import SeachMedPage from '../page/SeachMedPage';
import AddMed from '../page/AddMed';
import CommunityPage from '../page/CommunityPage';
import UserPage from '../page/UserPage';



export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:contant.tabList.community
        }


    }
    render() {
        return (<TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === contant.tabList.search}
                title="搜药"
                renderIcon={() => <Icon name="md-search" />}
                renderSelectedIcon={() => <Icon active name="md-search" style={{color:"#0066FF"}} />}
                onPress={() => this.setState({ selectedTab: contant.tabList.search })}>
                <SeachMedPage navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === contant.tabList.community}
                title="社区"
                renderIcon={() => <Icon name="md-people" />}
                renderSelectedIcon={() => <Icon active name="md-people" style={{color:"#0066FF"}}/>}
                onPress={() => this.setState({ selectedTab: contant.tabList.community })}>
                <CommunityPage navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === contant.tabList.addMed}
                title="药程管理"
                renderIcon={() => <Icon name="ios-share" />}
                renderSelectedIcon={() => <Icon active name="ios-share" style={{color:"#0066FF"}}/>}
                onPress={() => this.setState({ selectedTab: contant.tabList.addMed })}>
                <AddMed navigator={this.props.navigator} />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === contant.tabList.user}
                title="个人"
                renderIcon={() => <Icon name="md-person" />}
                renderSelectedIcon={() => <Icon active name="md-person" style={{color:"#0066FF"}}/>}
                onPress={() =>{ 
                        
                        contant.newMsgGetter();//获取新消息
                        setTimeout(
                            ()=>{
                                   this.setState({ selectedTab: contant.tabList.user });//切换面板
                            },100)
                    }
                    }>
                <UserPage navigator={this.props.navigator} />
            </TabNavigator.Item>
        </TabNavigator>
        );


    }




}
