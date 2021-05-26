import React, {Component} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Container from 'react-native-container';

export class HomeScreen extends Component {
    render = () => {
    return (
        <View style={{flexDirection:'column', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf9f8', paddingTop: '1%',paddingBottom:'1%'}}>
            <Button
                title="Категории карточек"
                onPress={() => this.props.navigation.push('Categories')} />

            <Text h3 style={{fontWeight: 'bold', textAlign:'left', paddingTop: 5, paddingBottom:5, marginLeft: '2%', color: '#a4262c', fontSize: 28}}>Лучшие карточки</Text>
            <Container col style={pageStyle.cardsFeed}>

            </Container>
            <Text h3 style={{fontWeight: 'bold', textAlign:'left', paddingTop: 2, paddingBottom: 2, marginLeft: '2%', color: '#742774', fontSize: 28}}>Лучшие категории</Text>
            <Container col style={pageStyle.catFeed}>

            </Container>
        </View>
        )
    }
}

const pageStyle = StyleSheet.create({
    cardsFeed: {
      marginTop: '2%',
      marginBottom: '2%',
      backgroundColor: '#e1dfdd',
      shadowColor: "#000",
      shadowOffset: {
            width: 0,
            height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,
      elevation: 13
    },
    catFeed: {
        marginTop: '1%',
        marginBottom: '1%',
        backgroundColor: '#edebe9',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.15,
        elevation: 7
    }
  });