import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import { COLORS } from '../contains'
import { FavoriteScreen } from '../screens'
import { IconHeader } from '../components'

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = () => {
  const favorites     = useSelector((state) => state.favorite.items);

    return (
      <FavoriteStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} 
                                                    options={{
                                                      title : 'Yêu thích',
                                                      headerRight : () => <IconHeader data={favorites} />
                                                    }}/>
    </FavoriteStack.Navigator>
    );
}


export default FavoriteStackScreen