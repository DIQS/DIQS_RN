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
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';
var styles = contant.styles;
var ds = contant.ds;
export default class NewsListPage extends Component {
    constructor(props) {
        super(props);
        this.toMarkerList = this.toMarkerList.bind(this);
        this.renderFunc=this.renderFunc.bind(this);
        this.toNewsDetailPage=this.toNewsDetailPage.bind(this);
        this.toLast=this.toLast.bind(this);
        this.thumbnailRender=this.thumbnailRender.bind(this);

        //console.warn(this.props.list.length)
        this.state = {
            newsList: this.props.list,
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: contant.centerMark,
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: this.props.markerList   //转换成合适的点
        };
     
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

                    <MapView

                        style={styles.map}
                        trafficEnabled={this.state.trafficEnabled}
                        baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                        zoom={this.state.zoom}
                        mapType={this.state.mapType}
                        center={this.state.center}
                        markers={this.state.markers}
                        onMarkerClick={(e) => {
                            //点被点一下

                        }}
                        onMapClick={(e) => {

                        }}
                    />
                    <ListView enableEmptySections dataSource={ds.cloneWithRows(this.state.newsList)} renderRow={this.renderFunc} />
                </Content>
            </Container>

        );



    }

    toMarkerList() {
        //传进来的是个list
        var newsList = this.state.newsList;
        var markerList1 = []
        for (var i = 0; i < newsList.length; i++) {
            var markerTemp = {
                longitude: newsList[i].x,
                latitude: newsList[i].y,
                title: newsList[i].title

            }
            markerList1[i] = markerTemp; // 加入点
        }
                         this.setState( {markers:markerList1});
    }
    renderFunc(data) {
       
            return (
                <ListItem button onPress={(data) => {
                    {/*this.setState({
                        center:{
                            longitude:data.x,
                            latitude:data.y
                        
                        }

                    });*/}
          
                }}>
                    {
                        this.thumbnailRender(data)
                    }
                    <Body>
                        <Text >{data.title}</Text>
                        <Text note>{data.date}</Text>
                    </Body>
                    <Right>
                        <Button info transparent iconRight onPress={() => { this.toNewsDetailPage(data); }}>
                            <Icon name="ios-arrow-forward" />
                        </Button>
                    </Right>
                </ListItem>);

        
    }
    toNewsDetailPage(data) {
        //浏览器里面打开
        var json = {
            id: contant.idList.NewsDetailPage,
            passProps: {
                url: data.url

            },
            type: "Right"

        }
        this.props.navigator.push(json); //进入详情页面
    }
    toLast(){
        this.props.navigator.pop();
    }
    thumbnailRender(rowData) {
        if (rowData.img == "" || rowData.img == undefined || rowData.img == null) {

            return (<Thumbnail size={80} source={require('../resources/user_selected.png')} />);

        } else {
          
            return (<Thumbnail size={80} source={{ uri: contant.SERVER_ROOT + contant.SERVER_SERVICE.IMAGE_ROOT_NEWS + rowData.img }} />)
            //显示头像
        }


    }
}