'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Dimensions,
    Image,

} from 'react-native';


import { Alert, StyleProvider, Container, Header, Title, CheckBox, Content, Label, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';
export const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export const SERVER_ROOT = "http://192.168.99.2:8080/"
export const SCREEN = {
    WIDTH: Dimensions.get('window').width,
    HEIGH: Dimensions.get('window').height,
};
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
    IMAGE_ROOT_MED: "static/images/medImage/",
    GET_PERSONAL_MSG: "api/personal/getPersonalMsg",
    IMAGE_ROOT_NEWS: "/static/images/newsImg/",
    GET_PERSONAL_NEW_MSG: "api/personal/getMsgNew",
    GET_PERSONAL_NEW_MSG_NUM: "api/personal/getMsgNewNums",
    SET_PERSONAL_NEW_MSG_VIEWED: "api/personal/setMsgViewed",//参数json
    LOG_IN: "api/personal/Login",//登陆



}
//````````````地图``````````````````
export const mapState = {
    mayType: MapTypes.NORMAL,
    mayType1: MapTypes.SATELLITE,
    zoom: 5,
    center: {
        longitude: 113.981718,
        latitude: 22.542449
    },
    trafficEnabled: false,
    baiduHeatMapEnabled: false,
}

export const styles = StyleSheet.create({
    map: {

        height: 350,

        borderWidth: 1,
        borderColor: '#000000',
    },
    map1: {

        height: 500,

        borderWidth: 1,
        borderColor: '#000000',
    }
});
export var centerMark = {


    longitude: 108.978459,
    latitude: 34.288830
}
export const medListTest = [
    {
        id: 1,
        medImg: "H20070006.jpg",
        name: "桉柠蒎肠溶软胶囊",
        medId: "国药准字H20070006"
    },
    {
        id: 2,
        medImg: "H20052401.jpg",
        name: "桉柠蒎肠溶软胶囊",
        medId: "国药准字H20052401"
    }


];
export var detailMedTest = {
    detail: "【药品名称】\n通用名称：桉柠蒎肠溶软胶囊 英文名称：Eucalyptol，LimoneneandPineneEntericSoftCapsules 商品名称：切诺 \n【成份】\n本品由桃金娘科桉属和芸香科桔属及松科松属植物的提取物所组成。主要成份为桉油精，柠檬烯及-蒎烯。\n【性状】本品为黄色肠溶软胶囊，内容物为浅黄色透明油状液体。	\n【适应症】\n本品为黏液溶解性祛痰药。 适用于急、慢性鼻窦炎。 适用于急慢性支气管炎、肺炎、支气管扩张、肺脓肿、慢性阻塞性肺部疾患、肺部真菌感染、肺结核和矽肺等呼吸道疾病。亦可用于支气管造影术后，促进造影剂的排出。\n【规格】\n按桉柠蒎油计为0.3g/粒	\n【用法用量】\n口服。成人：急性患者一次0.3g(1粒)，一日3-4次；慢性患者一次0.3g(1粒)，一日2次。本品宜于餐前半小时，凉开水送服，禁用热开水；不可打开或嚼破后服用。\n【不良反应】\n不良反应轻微，偶有胃肠道不适及过敏反应，如皮疹、面部浮肿、呼吸困难和循环障碍。\n【禁忌】\n对本品过敏者禁用。	\n【注意事项】\n尚不明确。	\n【孕妇及哺乳期妇女用药】\n慎用。	\n【儿童用药】\n尚不明确。	\n【老年用药】\n尚不明确。	\n【药物相互作用】\n尚不明确。	\n【药物过量】\n尚不明确。	\n【药理作用】\n试验结果表明，本品能使小鼠气管段分泌量增加，改善气管黏膜纤毛运动，促进呼吸道腺体的分泌作用，并使黏液移动速度增加，有助痰液排出。并能使豚鼠咳嗽潜伏期延长。文献显示本品具有抗炎作用，能通过减轻支气管黏膜肿胀面起到舒张支气管作用。\n【毒理研究】\n【药代动力学】\n口服给药后，桉柠蒎油中的单萜成分吸收迅速且完全，动物实验表明口服后1-3小时单萜成分达最大血药浓度。深入的研究表明柠檬烯在大鼠及其它动物和人类很快被代谢，口服给药后，柠檬烯主要通过动物和人类的尿排泄，约60%在24小时内经尿排泄，5%经粪便排泄，2%经呼出的CO2排泄。柠檬烯的主要代谢产物是双氢紫苏酸和紫苏酸，由约35%的血浆中的柠檬烯转化而得。柠檬烯-1，2-二醇是另一主要代谢产物 (由约18%的柠檬烯初始量转化而得)。服用柠檬烯后在血浆中可检测到紫苏酸甲酯和双氢紫苏酸甲酯，但仅有5%是从初始的柠檬烯转化而来的。桉柠蒎肠溶软胶囊中的其它萜类成分的动力学特性类似于柠檬烯，但代谢途径少有细致的研究。\n【贮藏】\n密闭，在阴凉(不超过20℃)处保存。	\n【包装】\n铝塑包装，6粒/盒；12粒/盒；18粒/盒。	\n【有效期】\n36个月	\n【执行标准】\nWS1 -(X-020)-2009Z	\n【批准文号】\n国药准字H20052401	\n【生产企业】\n北京九和药业有限公司	\n【核准日期】\n2007年01月04日	\n【修改日期】\n2007年03月05日 2008年06月11日 2009年11月01日 2010年10月31日", //说明书
    commentNums: 12,//评论数
    viewedNums: 44,//点赞数

};
export const newListTest = {
    list: [
        {
            title: "桉柠蒎肠溶软胶囊在陕西..",
            img: "news1.jpg",
            date: "2015-04-13",
            url: "http://www.zyzhan.com/news/Detail/54372.html",
            x: 108.978459,
            y: 34.288830
        },
        {
            img: "news2.jpg",
            title: "北京海淀查出桉柠蒎肠....",
            date: "2015-04-13",
            url: "http://www.zyzhan.com/news/Detail/54372.html",
            x: 116.380290,
            y: 39.941999,

        }


    ]


};

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
export const tabList = {
    community: "CommunityPage",
    search: "SeachMedPage",
    user: "UserPage",
    addMed: "AddMed",


};
export const idList = {
    LoginPage: "LoginPage",
    IndexPage: "IndexPage",
    HomePage: "HomePage",
    DetialQuestionPage: "DetialQuestionPage",
    CommunityPage: "CommunityPage",
    AnswerToQuestionPage: "AnswerToQuestionPage",
    AddQuestionPage: "AddQuestionPage",
    SearchMedPage: "SearchMedPage",
    UserPage: "UserPage",
    NewMsgListPage: "NewMsgListPage",
    AddMed: "AddMed",
    UserDetailPage: "UserDetailPage",

    NewsListPage: "NewsListPage",
    DetailMedPage: "DetailMedPage",
    NewsDetailPage: "NewsDetailPage",
    MedInfoPage: "MedInfoPage",



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
export const newMsgGetter = async function () {
    //从服务器获得新消息的数量，然后渲染起来
    var url = SERVER_ROOT + SERVER_SERVICE.GET_PERSONAL_NEW_MSG_NUM;
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

export const userMsgGetter = async function () {
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