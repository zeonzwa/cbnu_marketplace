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
        backgroundColor: 'transition',
        alignItems: 'center',
        justifyContent: 'center',  
        width: '100%',
        height:640,
        backgroundColor: '#fff',
    },
    footer: {
        backgroundColor: 'transition',
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
        alignItems: 'center',
        justifyContent: 'center', 
    },
});

export const viewStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    }
});