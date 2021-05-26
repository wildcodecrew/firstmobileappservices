import React, {Component} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Container from 'react-native-container';

export class CardsScreen extends Component {
    render = () => {
        return (
            <View style={{flexDirection:'column', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf9f8', paddingTop: '1%',paddingBottom:'1%'}}>
                <Button
                    title="На главную"
                    onPress={() => this.props.navigation.popToTop()}
                />
                <Text h3 style={{fontWeight: 'bold', textAlign:'left', paddingTop: 5, paddingBottom:5, marginLeft: '2%', color: '#a4262c', fontSize: 28}}>Карточки для самого начала</Text>
                <Container col style={pageStyle.cardsStart}>

                </Container>
                <Text h3 style={{textAlign:'left', paddingTop: 2, paddingBottom: 2, marginLeft: '2%', color: '#a4262c', fontSize: 26}}>Последние карточки</Text>
                <Container col style={pageStyle.cardsLast}>

                </Container>
            </View>
        );
    }
}

const pageStyle = StyleSheet.create({
    cardsStart: {
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
    cardsLast: {
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
