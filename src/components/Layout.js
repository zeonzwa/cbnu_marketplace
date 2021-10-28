import React from 'react';
import {StyleSheet, View, Text, LayoutAnimation} from 'react-native';
import { layout, mainCt } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
    return(
        <View style={layout.header}>
            <Icon name="bars" size={30} color="#333" />
            <View style={layout.hdUserBox}>
                <Icon name="search" size={30} color="#333" style={{marginRight : 10}}></Icon>
                <Icon name="bell" size={30} color="#333"></Icon>
            </View>
        </View>
    );
};

export const Contents = () => {
    return(
        <View style={layout.mainContent}>
            <View style={mainCt.mainBnrBox}>
                <Text>상단배너</Text>
            </View>
            <View style={mainCt.mainGoodsWrap}>
                <Text>상품</Text>
            </View>
        </View>
    );
};

export const Footer = () => {
    return(
        <View style={layout.footer}>
            <Icon name="home" size={30} color="#333"></Icon>
            <Icon name="search-plus" size={30} color="#333"></Icon>
            <Icon name="shopping-cart" size={30} color="#333"></Icon>
            <Icon name="comments" size={30} color="#333"></Icon>
            <Icon name="user" size={30} color="#333"></Icon>
        </View>
    );
};