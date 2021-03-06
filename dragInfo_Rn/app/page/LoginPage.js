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
import { Thumbnail, StyleProvider, Container, Header, Title, CheckBox, Content, Label, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as contant from "../util/contant"
import TabNavigator from 'react-native-tab-navigator';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: "",
            pwd: "",
            text: "登陆"
        }
        this.onPwdAccount = this.onPwdAccount.bind(this);
        this.onNumAccount = this.onNumAccount.bind(this);

        this.onLogin = this.onLogin.bind(this);
    }

    render() {
        return (
            <Container>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ paddingTop: 80, fontSize: 44, color: "#3366FF", paddingBottom: 50 }}>药知道</Text>
                </View>
                <View>
                    <Form style={{ paddingBottom: 20, paddingRight: 10 }}>
                        <Item >
                            <Label>账号</Label>
                            <TextInput underlineColorAndroid='transparent' style={{ flex: 1 }} onChangeText={this.onNumAccount} />
                        </Item>
                        <Item >
                            <Label>密码</Label>
                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent'  style={{ flex: 1 }} onChangeText={this.onPwdAccount} />
                        </Item>

                    </Form>
                    <Button success block onPress={this.onLogin}>
                        <Text>{this.state.text}</Text>
                    </Button>

                </View>
            </Container>);


    }

    onNumAccount(data) {

        this.setState({ uid: data });

    }
    onPwdAccount(data) {

        this.setState({ pwd: data });

    }

    async onLogin() {


        var url = contant.SERVER_ROOT + contant.SERVER_SERVICE.LOG_IN+"?"+"passPort="+this.state.uid+"&pwd="+this.state.pwd;
        console.log(url);
        var response;
        var ud;
        try {
            response = await fetch(
                url, {
                    method: "GET"
                });

            ud = await response.json();
            console.log(response);
            if (ud.isLogined == "false") {
                Alert.alert("错误", "登陆失败\n");
                return;
            }

                contant.USER.nid=ud.nid
                contant.USER.sex=ud.sex
                contant.USER.nick= ud.nick
                contant.USER.passPort= ud.passPort
                contant.USER.pwd=ud.pwd
                contant.USER.phone= ud.phone
                contant.USER.thumbnail= ud.thumbnail
                contant.USER.newMsgNums= 0 //不是这里拉取的信息

            var route = {
                id: contant.idList.HomePage,
                passProps: {},
                type: "Right"
            };
            contant.newMsgGetter();//获取
            this.props.navigator.push(route);
        } catch (e) {
                   contant.USER.nid=1
                contant.USER.sex="男"
                contant.USER.nick= "leo jams"
                contant.USER.passPort= "123"
                contant.USER.pwd="123"
                contant.USER.phone= "17888821289"
                contant.USER.thumbnail= "1.png"
                contant.USER.newMsgNums= 0 //不是这里拉取的信息
            var route = {
                id: contant.idList.HomePage,
                passProps: {},
                type: "Right"
            };
            Alert.alert("错误", "登陆失败\n");
            contant.newMsgGetter();//获取
            this.props.navigator.push(route);
            //异常
           



        }





    }


}