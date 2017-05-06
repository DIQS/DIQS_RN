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
export default class AddMed extends Component {
    constructor(props) {
        super(props);

        this.state = {
         
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>加入药品</Title>
                </Header>
                <Content>
                    <Text>add Manger</Text>
                </Content>
            </Container>);
    }

   

}