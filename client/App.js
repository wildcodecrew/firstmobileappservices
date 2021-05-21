import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CardsScreen } from './screens/CardsScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}  options={{
                                                                title: 'WCC Cards',
                                                                headerStyle: {
                                                                  backgroundColor: '#31752f',
                                                                },
                                                                headerTintColor: '#fff',
                                                                headerTitleStyle: {
                                                                  fontSize: 24
                                                                }
                                                              }}/>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                                                                          title: 'Категории',
                                                                          headerStyle: {
                                                                            backgroundColor: '#742774',
                                                                          },
                                                                          headerTintColor: '#fff',
                                                                          headerTitleStyle: {
                                                                            fontSize: 24
                                                                          }
                                                                        }}/>
            <Stack.Screen name="Cards" component={CardsScreen} options={{
                                                                    title: 'Карточки',
                                                                    headerStyle: {
                                                                      backgroundColor: '#a4262c',
                                                                    },
                                                                    headerTintColor: '#fff',
                                                                    headerTitleStyle: {
                                                                      fontSize: 24
                                                                    }
                                                                  }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;