'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    ListView,
    Alert
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
export default class MedInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            detail:this.props.detail


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
                    <Card>
                        <CardItem>
                            <Text>{this.state.detail}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );

    }
    toLast(){
        //返回
        this.props.navigator.pop();
    }

}