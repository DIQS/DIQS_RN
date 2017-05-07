
import React, { Component } from 'react';
import { View, Image, TextInput, Alert } from 'react-native';
import {
    Container,
    Content,
    Header,
    Title,
    Left,
    Body,
    Right,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Icon,
    Input,
    Button,
    Text,
    Form,
    InputGroup,
    Badge,
    ListItem
} from 'native-base';
import * as contant from "../util/contant"
import { Grid, Row, Col } from 'react-native-easy-grid';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            topicShow: false,
            username: contant.USER.nick,//用户名
            phone: contant.USER.phone,//电话
            sex: contant.USER.sex,//性别
            msgNums: 0,
        }
        this.getUserMsg = this.getUserMsg.bind(this);
        this.toMsgListPage = this.toMsgListPage.bind(this);
        this.callBack_clearNewMsg = this.callBack_clearNewMsg.bind(this);
        this.renderThumbnail = this.renderThumbnail.bind(this);
        this.getUserMsg();
        this.styles = {
            rowButton: {
                height: 100,
                flex: 1
            }
        }
    }

    topicClick = () => {
        this.setState({ topicShow: !this.state.topicShow });
    }
    async getUserMsg() {
        //从服务器获得新消息的数量，然后渲染起来
        var url = contant.SERVER_ROOT + contant.SERVER_SERVICE.GET_PERSONAL_NEW_MSG_NUM;
        url = url + "?";
        url += "nid=" + contant.USER.nid;
        console.log("url:" + url);



        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "text/html;charset=UTF-8"
                    }
                });

            let data = await response.json();


            var msgNumsData = data.nums;//从这个字段取东西

            this.setState({ msgNums: msgNumsData })

        } catch (e) {
            //异常
            Alert.alert("错误", "信息数量获取失败");



        }




    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>

                        <CardItem button onPress={
                            ()=>{
                                var json={
                                    id:contant.idList.UserDetailPage,
                                    passProps:{},
                                    type:"Right"
                                }
                                this.props.navigator.push(json)

                            }


                        } >
                            {

                                this.renderThumbnail()

                            }

                            <Left style={{ flex: 3 }}>
                                <Text>{this.state.username}</Text>

                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem icon>

                        <Left>
                            <Icon name="ios-mail-outline" />
                        </Left>
                        <Body>

                            <Text>我的消息</Text>

                        </Body>
                        {
                            this.renderMsg()

                        }

                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />

                    <ListItem icon>
                        <Left>
                            <Icon name="md-medkit" />
                        </Left>
                        <Body>
                            <Text>药品管理表</Text>
                        </Body>
                        <Right>
                            <Text>暂未绑定</Text>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon button onPress={() => {}}>
                        <Left>
                            <Icon name="ios-settings-outline" />
                        </Left>
                        <Body>
                            <Text>设置</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-information-circle-outline" />
                        </Left>
                        <Body>
                            <Text>关于</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-share-outline" />
                        </Left>
                        <Body>
                            <Text>分享</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem button onPress={this.props.navigator.popToTop}>
                        <Body>
                            <Title style={{ color: 'red' }}>退出登录</Title>

                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
    renderThumbnail() {

        if (contant.USER.thumbnail == null || contant.USER.thumbnail == undefined || contant.USER.thumbnail == "")
            return <Thumbnail style={{ width: 100, height: 100 }} source={require('../resources/1.png')} />
        else
            return <Thumbnail style={{ width: 100, height: 100 }} source={{ uri: contant.SERVER_ROOT + contant.SERVER_SERVICE.IMAGE_ROOT_PEOPLE + contant.USER.thumbnail }} />

    }
    renderMsg() {
        //显示消息数
        if (this.state.msgNums > 0) {
            //消息数
            return (
                <Right>
                    <Badge>
                        <Text>{this.state.msgNums}</Text>
                    </Badge>
                    <Button transparent onPress={this.toMsgListPage} >
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>);

        } else if (contant.USER.msgNums > 0) {
            return (
                <Right>
                    <Badge>
                        <Text>{contant.USER.msgNums}</Text>
                    </Badge>
                    <Button transparent onPress={this.toMsgListPage} >
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>);

        } else {

            return (
                <Right>
                    <Button transparent onPress={this.toMsgListPage}>
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>
            );

        }





    }
    async  toMsgListPage() {
        //到消息列表页
        //从服务器获得新消息的数量，然后渲染起来
        var url = contant.SERVER_ROOT + contant.SERVER_SERVICE.GET_PERSONAL_NEW_MSG;
        url = url + "?";
        url += "nid=" + contant.USER.nid;
        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "text/html;charset=UTF-8"
                    }
                });

            var data = await response.json();
            data.call_back = this.callBack_clearNewMsg;

            var jsonObj = {
                id: contant.idList.NewMsgListPage,
                passProps: data,
                type:"Right"
            };
            this.props.navigator. push(jsonObj);//进入列表页面

        } catch (e) {
            //异常
            Alert.alert("错误", "新消息列表拉取失败");
        }


    }
    callBack_clearNewMsg() {
        this.setState({ msgNums: 0 });//拉取一下新消息


    }
 

}
