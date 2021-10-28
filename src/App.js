import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Header, Contents, Footer } from './components/Layout';
import { viewStyles } from './styles';

const App = () => {
    return(
        <View style={viewStyles.container}>
            <Header />
            <Contents />
            <Footer />
        </View>
    );
};

export default App;