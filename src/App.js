import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from './components/CustomButton';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:20,color:'white'}}>CBNU_MARKET,{'\n'}충북대 학생을 위한 중고거래장터</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{height:'30%',width:'30%',resizeMode:'contain'}}
            source={{uri:'https://t1.daumcdn.net/cfile/tistory/9942214E5B5E76930B'}}/>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'회원가입'}
            onPress={() => alert('회원가입 버튼(회원가입 페이지 이동)')}/>
          <CustomButton
          buttonColor={'#023e73'}
          title={'로그인'}
          onPress={() => alert('로그인 버튼(로그인 페이지 이동)')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'5%',
    backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});