import React, {Component} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Container from 'react-native-container';

export class CategoriesScreen extends Component {
    render = () => {
        return (
            <View style={{flexDirection:'column', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf9f8', paddingTop: '1%',paddingBottom:'1%'}}>
                <Button title="Карточки" onPress={() => this.props.navigation.navigate('Cards')}/>
                <Text h3 style={{fontWeight: 'bold', textAlign:'left', paddingTop: 5, paddingBottom:5, marginLeft: '2%', color: '#742774', fontSize: 28}}>Категории для самого начала</Text>
                <Container col style={pageStyle.catStart}>

                </Container>
                <Text h3 style={{textAlign:'left', paddingTop: 2, paddingBottom: 2, marginLeft: '2%', color: '#742774', fontSize: 26}}>Общие категории</Text>
                <Container col style={pageStyle.catList}>

                </Container>
            </View>
        );
    }
}

const pageStyle = StyleSheet.create({
    catStart: {
      marginTop: '2%',
      marginBottom: '2%',
      backgroundColor: '#e1dfdd',
      shadowColor: "#000",
      shadowOffset: {
            width: 0,
            height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4.15,
      elevation: 7
    },
    catList: {
        marginTop: '1%',
        marginBottom: '1%',
        backgroundColor: '#edebe9',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.08,
        elevation: 7
    }
  });