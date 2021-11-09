import React from 'react';
import {ScrollView, StyleSheet, View, Text, LayoutAnimation,
SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import { layout, mainCt } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIMIT=10;

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
                <View style={mainCt.iconWrap}>
                    <View style={mainCt.iconBox}>
                        <Icon name="heart" style={mainCt.iconStyle}></Icon>
                        <TouchableOpacity style={{backgroundColor:'gray'}}>
                        <Text style={mainCt.iconName}>찜</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={mainCt.iconBox}>
                        <Icon name="history" style={mainCt.iconStyle}></Icon>
                        <TouchableOpacity style={{backgroundColor:'gray'}}>
                        <Text style={mainCt.iconName}>최근 본 물품</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={mainCt.iconBox}>
                        <Icon name="shopping-bag" style={mainCt.iconStyle}></Icon>
                        <TouchableOpacity style={{backgroundColor:'gray'}}>
                        <Text style={mainCt.iconName}>거래내역</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={mainCt.iconBox}>
                        <Icon name="check-square" style={mainCt.iconStyle}></Icon>
                        <TouchableOpacity style={{backgroundColor:'gray'}}>
                        <Text style={mainCt.iconName}>학교인증</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <View style={mainCt.goodsCt}>
                    <Text style={mainCt.introTitle}>최근 게시물을 확인해보세요</Text>
                    <View style={mainCt.goodsWrap}>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다1</Text>
                            </View>
                        </View>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다2</Text>
                            </View>
                        </View>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다3</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다4</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다5</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다6</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다7</Text>
                            </View>
                        </View>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다8</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다9</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다10</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다11</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다12</Text>
                            </View>
                        </View>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다13</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다14</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다15</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다16</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다17</Text>
                            </View>
                        </View>
                       <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다18</Text>
                            </View>
                        </View>
                        <View style={mainCt.goods}>
                            <View style={mainCt.goodsImg}><Text style={mainCt.goodsImgText}>Image</Text></View>
                            <View style={mainCt.goodsName}>
                                <Text style={mainCt.goodsNameCategory}>#서적</Text>
                                <Text>경영정보시스템 팝니다19</Text>
                            </View>
                        </View>
                    </View>
                </View>
               </ScrollView>
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