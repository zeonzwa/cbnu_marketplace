import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height:100,
        position:'absolute',
        zIndex: 200,
        top:0,
        left:0,
        paddingLeft: 20,
        paddingRight: 20,
    },
    hdUserBox: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height:100,
    },
    mainContent: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',  
        width: '100%',
        height:640,
        backgroundColor: '#fff',
    },
    footer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
        width: '100%',       
        height:100,
        backgroundColor: '#f3f3f3',
    }
});

export const mainCt = StyleSheet.create({
    mainBnrBox : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#f1c40f',
        width: '100%',
    },
    mainGoodsWrap : {
        flex : 1.5,
    },
    iconWrap : {
        width : '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly' 
    },
    iconBox : {
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop : 20,
        paddingBottom: 20,
    },
    iconStyle : {
        fontSize: 30,
    },
    iconName : {
        marginTop: 10
    },
    goodsCt : {
        paddingLeft : 20,
        paddingRight : 20
    },
    introTitle : {
        fontSize : 20,
        fontWeight : "500",
        marginBottom : 20,
        marginTop: 10,
    },
    goodsWrap : {
        display : "flex",
        flexDirection: 'row',
        flexWrap : "wrap",
        alignItems : "center",
        justifyContent : "space-between",
    },
    goods : {
        width : '47.5%',
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 10
    },
    goodsImg : {
        width : '100%',
        height : 100,
        backgroundColor : '#2980b9',
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goodsImgText : {
        color : "#f7f7f7"
    },
    goodsName : {
        display : "flex",
        flexDirection: 'row',
        paddingTop:7.5,
    },
    goodsNameCategory : {
        marginRight : 5,
    },
});

export const viewStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    }
});