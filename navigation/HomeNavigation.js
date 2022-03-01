import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { HomeScreen , CategoryScreen , ProductScreen } from '../screens'

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle : {
          backgroundColor : COLORS.primary
        },
        headerTintColor : COLORS.second
      }}
    >
        <HomeStack.Screen name="HomeScreen"     component={HomeScreen}     options={{title : 'Món ăn ngon'}}/>
        <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} 
                                                options={({route}) => ({
                                                  title : route.params.categoryName
                                                })}/>
        <HomeStack.Screen name="ProductScreen"  component={ProductScreen}  
                                                options={({route}) => ({
                                                  title : route.params.productName
                                                })}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen