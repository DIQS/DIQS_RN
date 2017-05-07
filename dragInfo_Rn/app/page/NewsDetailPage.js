'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    ListView,
    Alert,
    WebView,
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    List,
    ListItem,
    Body,
    Right,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Icon,
    Input,
    Button,
    Text
} from 'native-base';
import * as contant from "../util/contant"
var ds = contant.ds;
export default class NewMsgListPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:this.props.url

        }
        this.toLast=this.toLast.bind(this);

    }
    render() {

        return (
        <Container>
            <Header >
                <Left>
                    <Button transparent onPress={this.toLast}>
                        <Icon name="md-arrow-back" />
                    </Button>
                </Left>
            </Header>
            <Content>
                <WebView style={{height:contant.SCREEN.HEIGH,width:contant.SCREEN.WIDTH}} source={{uri:this.state.url} } />
            </Content>
        </Container>);


    }
    toLast(){
        this.props.navigator.pop();


    }


}