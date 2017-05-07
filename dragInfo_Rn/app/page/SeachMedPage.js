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
import ImagePicker from 'react-native-image-picker'; //第三方相机
import * as sad from '../util/contant';
var ds = sad.ds;
var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}
export default class SeachMedPage extends Component {
    constructor(props) {
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.searchMed = this.searchMed.bind(this);
        this.catchImage = this.catchImage.bind(this);
        this.searchMedByImage = this.searchMedByImage.bind(this);
        this.renderMedList = this.renderMedList.bind(this);
        this.toMedDetail = this.toMedDetail.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.getDetail=this.getDetail.bind(this);
        this.state = {
            medName: "",
            avatarSource:null,
            medList: [],
            imageData: []
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
                    <ListView enableEmptySections dataSource={ds.cloneWithRows(this.state.medList)} renderRow={this.renderMedList} />
                </Content>
            </Container>);
    }
    onTextChange(data) {
        this.setState({ medName: data });//修改图书名字
    }
    searchMed() {
        //文字搜药

    }

    catchImage() {
        //拉取图片
        ImagePicker.showImagePicker(photoOptions, (response) => {
      

            if (response.didCancel) {
                //取消
            }
            else if (response.error) {
                //出错

            }
            else if (response.customButton) {
              //自定义
            }
            else {
                 let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                this.setState({
                    avatarSource: source
                });
                this.searchMedByImage();
            }
        });


       
    }
    searchMedByImage() {
        //从服务器获取返回数据
        this.setState({ medList: sad.medListTest });

    }
    renderMedList(data) {
        //渲染药品
        return (
            <Card>
                {
                    this.renderImage(data)

                }
                <CardItem Content>
                    <Text style={{ fontSize: 16, color: "#444444" }}>{data.name}</Text>
                </CardItem>
                <CardItem footer>
                    <Text style={{ fontSize: 16, color: "#cccccc" }}>{data.medId}</Text>
                </CardItem>


            </Card>


        );
    }
    toMedDetail(data) {
        //到药品详情页面
        //请求数据
        var medDetail = this.getDetail();
        medDetail.id = data.id;
        medDetail.name = data.name;
        medDetail.medId = data.medId;
        medDetail.medImg=data.medImg;
        //获得详细数据
        var jsonObj = {
            id: sad.idList.DetailMedPage,
            passProps: medDetail,
            type: "Right"
        }
        this.props.navigator.push(jsonObj); //进入下一个页面
    }
    getDetail() {
        //取药品详细数据
        return sad.detailMedTest;
    }
    renderImage(data) {
        
        if (data.medImg == null || data.medImg == undefined || data.medImg == "") {
            return (
                <CardItem cardBody button onPress={() => { this.toMedDetail(data); }}>
                    <Image style={{width:400,height:300}}   source={require('../resources/1.png')} />
                </CardItem>);

        } else {
         //   console.warn( sad.SERVER_ROOT+sad.SERVER_SERVICE.IMAGE_ROOT_MED+ data.medImg )
            
            return (
                <CardItem cardBody button onPress={() => { this.toMedDetail(data); }}>
                    <Image  style={{width:400,height:300}}  source={{ uri: sad.SERVER_ROOT+sad.SERVER_SERVICE.IMAGE_ROOT_MED+ data.medImg }} />
                </CardItem>);

        }


    }

}