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
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class SeachMedPage extends Component {
    constructor(props) {
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.searchMed = this.searchMed.bind(this);
        this.catchImage = this.catchImage.bind(this);
        this.searchMedByImage=this.searchMedByImage.bind(this);
        this.state = {
            medName: ""
        }
    }

    render() {
        return (
            <Container>
                <Header searchBar >
                    <Body>
                        <InputGroup rounded style={{ backgroundColor: "#FFFFFF" }}>
                            <Icon name="ios-camera" onPress={this.catchImage} />
                            <TextInput underlineColorAndroid='transparent' onChangeText={this.onTextChange} style={{ flex: 1, color: "#808080" }} placeholder="输入药品名称" />
                            <Button transparent onPress={this.searchMed}>
                                <Icon name="md-search" />
                            </Button>
                        </InputGroup>
                    </Body>

                </Header>
                <Content>
                    <Text>hello Search!</Text>
                </Content>
            </Container>);
    }
    onTextChange(data) {
        this.setState({ medName: data });//修改图书名字
    }
    searchMed() {

    }

    catchImage(){

    }
    searchMedByImage(){


    }

}