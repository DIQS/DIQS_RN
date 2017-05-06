'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,

    Image,
    Alert,
    TextInput,

} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import { Thumbnail, StyleProvider, Container, Header, Title, CheckBox, Content, Label, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as contant from "../util/contant";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import DetialQuestionPage from "./DetialQuestionPage";
import CommunityPage from "./CommunityPage";
import AnswerToQuestionPage from "./AnswerToQuestionPage";
import AddQuestionPage from "./AddQuestionPage";
import UserPage from './UserPage';
import SeachMedPage from './SeachMedPage';
import NewMsgListPage from './NewMsgListPage'
import AddMed from './AddMed';
var idList = contant.idList;
export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
    }
    render() {
        return (
            <Navigator initialRoute={
                {
                    id: idList.LoginPage,
                    passProps: {},
                    type: "Right"  //从右边滑入
                }
            } renderScene={this.renderScene} configureScene={this.configureScene} />
          


        );
    }
    renderScene(route, navigator) {

        switch (route.id) {

            case idList.LoginPage: {
                return <LoginPage navigator={navigator} {...route.passProps} />;
            }
            case idList.HomePage: {
                return <HomePage navigator={navigator} {...route.passProps} />;
            }
            case idList.DetialQuestionPage: {
                return <DetialQuestionPage navigator={navigator} {...route.passProps} />;
            }
            case idList.CommunityPage: {
                return <CommunityPage navigator={navigator} {...route.passProps} />;
            }
            case idList.AnswerToQuestionPage: {
                return <AnswerToQuestionPage navigator={navigator} {...route.passProps} />;
            }
            case idList.AddQuestionPage: {
                return <AddQuestionPage navigator={navigator} {...route.passProps} />;
            }
            case idList.UserPage: {
                return <UserPage navigator={navigator} {...route.passProps} />;
            }
            case idList.SearchMedPage: {
                return <SeachMedPage navigator={navigator} {...route.passProps} />;
            }
            case idList.NewMsgListPage: {
                return <NewMsgListPage navigator={navigator} {...route.passProps} />;
            }
            case idList.AddMed: {
                return <AddMed navigator={navigator} {...route.passProps} />;
            }
            default: {
                return <LoginPage navigator={navigator} {...route.passProps} />;
            }
        }


    }
    configureScene(route, routeStack) {
        switch (route.type) {
            case "Right": {
                return Navigator.SceneConfigs.PushFromRight;
            }
            case "Left": {
                return Navigator.SceneConfigs.PushFromLeft;
            }
            case "Top": {
                return Navigator.SceneConfigs.FadeAndroid;
            }
            case "Bottom": {
                return Navigator.SceneConfigs.FloatFromBottomAndroid
            }
            default: {
                return Navigator.SceneConfigs.PushFromRight;
            }

        }



    }
}