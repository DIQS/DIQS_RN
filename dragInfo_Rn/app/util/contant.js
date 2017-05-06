'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
     
    Image,

} from 'react-native';


import { Alert, StyleProvider, Container, Header, Title, CheckBox, Content, Label, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export const SERVER_ROOT = "http://192.168.99.2:8080/"

export const SERVER_SERVICE = {
    GET_COVERSIONLIST: "api/coversion/getCoversionList",
    GET_COVERSIONLIST_BY_ID: "api/coversion/getCoversionByCid",
    GET_COMMENTLIST: "api/comment/getCommentList",
    GET_COMMENTLIST_JSON: "api/comment/getCommentList_json",
    INSERT_COVERSION: "api/coversion/insertCoversion",
    INSERT_COMMENT: "api/comment/insertComment",
    SEARCH_COVERSIONLIST: "api/coversion/searchCoversionList",
    SUPPORT_COVERSION: "api/comment/upDateSupportNums",
    IMAGE_ROOT: "/static/images/",
    IMAGE_ROOT_PEOPLE: "/static/images/thumbnail/",

    GET_PERSONAL_MSG: "api/personal/getPersonalMsg",
    GET_PERSONAL_NEW_MSG: "api/personal/getMsgNew",
    GET_PERSONAL_NEW_MSG_NUM: "api/personal/getMsgNewNums",
    SET_PERSONAL_NEW_MSG_VIEWED: "api/personal/setMsgViewed",//参数json
    LOG_IN:"api/personal/Login",//登陆


}

export const USER = {
    nid: 1,
    sex: "男",
    nick: "leo jams",
    passPort: "asd123",
    pwd: "asd123",
    phone: "1788821289",
    thumbnail: "",
    newMsgNums: 0,


}
export const tabList={
    community:"CommunityPage",
    search:"SeachMedPage",
    user:"UserPage",
    addMed:"AddMed",


};
export const idList = {
    LoginPage: "LoginPage",
    IndexPage: "IndexPage",
    HomePage: "HomePage",
    DetialQuestionPage: "DetialQuestionPage",
    CommunityPage: "CommunityPage",
    AnswerToQuestionPage: "AnswerToQuestionPage",
    AddQuestionPage: "AddQuestionPage",
    SearchMedPage:"SearchMedPage",
    UserPage:"UserPage",
    NewMsgListPage:"NewMsgListPage",
    AddMed:"AddMed"
    


}
export const removeYearsAndSecond = (newDate) => {
    //var newDate = rowData.date;
    console.log("newDate");
    console.log(newDate);

    newDate = getDateFormat(newDate);


    var stringList = newDate.split("-");//第一个是年,第二个是月

    var mouth = stringList[1];


    var str1 = stringList[2];

    var stringList1 = str1.split(" ");//第一个是天
    var day = stringList1[0];
    str1 = stringList1[1];

    var stringList2 = str1.split(":");//第一个是时，第二个是分，第三个是秒
    var hours = stringList2[0];
    var mins = stringList2[1];
    var sec = stringList2[2];
    newDate = mouth + "-" + day + " " + hours + ":" + mins;

    return newDate;

}
export const removeYearsAndSecond_1 = (newDate) => {
    //var newDate = rowData.date;



    newDate = newDate + "";
    var stringList = newDate.split("-");//第一个是年,第二个是月

    var mouth = stringList[1];


    var str1 = stringList[2];

    var stringList1 = str1.split(" ");//第一个是天
    var day = stringList1[0];
    str1 = stringList1[1];

    var stringList2 = str1.split(":");//第一个是时，第二个是分，第三个是秒
    var hours = stringList2[0];
    var mins = stringList2[1];
    var sec = stringList2[2];
    newDate = mouth + "-" + day + " " + hours + ":" + mins;

    return newDate;

}

export const getNowFormatDate = () => {
    var day = new Date();
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    var hours;
    var mins;
    var second;
    //初始化时间
    //Year= day.getYear();//有火狐下2008年显示108的bug
    Year = day.getFullYear();//ie火狐下都可以
    Month = day.getMonth() + 1;
    Day = day.getDate();
    hours = day.getHours();
    mins = day.getMinutes();
    second = day.getSeconds();
    //Hour = day.getHours();
    // Minute = day.getMinutes();
    // Second = day.getSeconds();
    CurrentDate += Year + "-";
    if (Month >= 10) {
        CurrentDate += Month + "-";
    }
    else {
        CurrentDate += "0" + Month + "-";
    }
    if (Day >= 10) {
        CurrentDate += Day;
    }
    else {
        CurrentDate += "0" + Day;
    }
    CurrentDate += " "
    if (hours >= 10) {
        CurrentDate += hours;
    }
    else {
        CurrentDate += "0" + hours;
    }
    CurrentDate += ":"
    if (mins >= 10) {
        CurrentDate += mins;
    }
    else {
        CurrentDate += "0" + mins;
    }
    CurrentDate += ":"
    if (second >= 10) {
        CurrentDate += second;
    }
    else {
        CurrentDate += "0" + second;
    }

    //console.log(CurrentDate);
    return CurrentDate;
}
export const getDateFormat = (data) => {
    var day = new Date(data);
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    var hours;
    var mins;
    var second;
    //初始化时间
    //Year= day.getYear();//有火狐下2008年显示108的bug
    Year = day.getFullYear();//ie火狐下都可以
    Month = day.getMonth() + 1;
    Day = day.getDate();
    hours = day.getHours();
    mins = day.getMinutes();
    second = day.getSeconds();
    //Hour = day.getHours();
    // Minute = day.getMinutes();
    // Second = day.getSeconds();
    CurrentDate += Year + "-";
    if (Month >= 10) {
        CurrentDate += Month + "-";
    }
    else {
        CurrentDate += "0" + Month + "-";
    }
    if (Day >= 10) {
        CurrentDate += Day;
    }
    else {
        CurrentDate += "0" + Day;
    }
    CurrentDate += " "
    if (hours >= 10) {
        CurrentDate += hours;
    }
    else {
        CurrentDate += "0" + hours;
    }
    CurrentDate += ":"
    if (mins >= 10) {
        CurrentDate += mins;
    }
    else {
        CurrentDate += "0" + mins;
    }
    CurrentDate += ":"
    if (second >= 10) {
        CurrentDate += second;
    }
    else {
        CurrentDate += "0" + second;
    }

    //console.log(CurrentDate);
    return CurrentDate;
};
export const  newMsgGetter= async function () {
    //从服务器获得新消息的数量，然后渲染起来
    var url = SERVER_ROOT + SERVER_SERVICE. GET_PERSONAL_NEW_MSG_NUM;
    url = url + "?";
    url += "nid=" + USER.nid;
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
        USER.newMsgNums = msgNumsData;


    } catch (e) {
        //异常
        Alert.alert("错误", "新消息获取失败");



    }
}

export const userMsgGetter=async function(){
    //个人信息
    var url = SERVER_ROOT + SERVER_SERVICE.GET_PERSONAL_MSG;
    url = url + "?";
    url += "nid=" + USER.nid;
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
        //存个人信息
        USER.nick = data.nick;
        USER.sex = data.sex;
        USER.phone = data.phone;
        USER.thumbnail = data.thumbnail;
        USER.nid = data.nid;
        USER.passPort = data.passPort;
        USER.pwd = data.pwd;




    } catch (e) {
        //异常
        Alert.alert("错误", "个人信息");



    }







}