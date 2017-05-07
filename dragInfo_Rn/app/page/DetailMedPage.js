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

import * as sad from '../util/contant';
var ds = sad.ds;
export default class DetailMedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: this.props.detail,
            name: this.props.name,
            medId: this.props.medId,
            medImg:this.props.medImg,
            viewedNums:this.props.viewedNums,
            commentNums:this.props.commentNums

        }
        this.toInfoPage = this.toInfoPage.bind(this);
        this.toNewList = this.toNewList.bind(this);
        this.toAddManagePage = this.toAddManagePage.bind(this);
        this.toWriteComment = this.toWriteComment.bind(this);
        this.toCommentList = this.toCommentList.bind(this);
        this.onBack = this.onBack.bind(this);
        this.toMarkerList=this.toMarkerList.bind(this);
    }
    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button onPress={this.onBack}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image style={{ width: 400, height: 300}} source={{ uri: sad.SERVER_ROOT + sad.SERVER_SERVICE.IMAGE_ROOT_MED + this.state.medImg }} />
                        </CardItem>
                        <CardItem footer>
                            <Left>
                                <Button transparent >
                                    <Icon name="md-eye" />
                                    <Text>{this.state.viewedNums}</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent onPress={this.toCommentList}>
                                    <Icon name="chatbubbles" />
                                    <Text>{this.state.commentNums}</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full info onPress={() => { }}>
                        <Icon name="md-text" />
                        <Text>你的看法</Text>
                    </Button>
                    <List>

                        <ListItem itemDivider>
                            <Text> </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text> </Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-document" />
                            </Left>
                            <Body>
                                <Text>药品说明</Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={this.toInfoPage}>
                                    <Icon name="ios-arrow-forward"></Icon>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-globe" />
                            </Left>
                            <Body>
                                <Text>相关新闻</Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={this.toNewList}>
                                    <Icon name="ios-arrow-forward"></Icon>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Button warning full onPress={this.toAddManagePage}>
                        <Icon name="ios-medkit" />
                        <Text>加入药程管理</Text>
                    </Button>

                </Content>
            </Container>
        );



    }
    toInfoPage() {
        //药品说明页面
        var json = {
            id: sad.idList.MedInfoPage,
            passProps: {
                detail: this.state.detail
            },
            type: "Right"


        }
        this.props.navigator.push(json)

    }
    toNewList() {
        //新闻列表页面
        var newsListJson = sad.newListTest;
        newsListJson.markerList=this.toMarkerList(newsListJson);
        var json = {
            id: sad.idList.NewsListPage,
            passProps: newsListJson,
            type: "Right"


        }
        this.props.navigator.push(json)


    }
    toMarkerList(newsListJson) {
        //传进来的是个list
        var newsList = newsListJson.list;
        var markerList1=[];
        for (var i = 0; i < newsList.length; i++) {
            var markerTemp = {
                longitude: newsList[i].x,
                latitude: newsList[i].y,
                title: newsList[i].title

            }
            markerList1[i] = markerTemp; // 加入点
        }
            return markerList1;
    }
    toAddManagePage() {
        //药程管理页面
        var json = {
            id: sad.idList.AddMed,
            passProps: {
                name: this.state.name,
                medId: this.state.medId,
                detail: this.detail
            },
            type: "Right"


        };
        this.props.navigator.push(json);

    }
    toWriteComment() {
        //写评论页面


    }
    toCommentList() {
        //评论列表页面


    }
    onBack() {
        //
        this.props.navigator.pop();

    }


}