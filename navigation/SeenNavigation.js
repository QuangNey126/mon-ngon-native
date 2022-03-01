import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import { COLORS } from '../contains'
import { SeenScreen } from '../screens'
import { IconHeader } from '../components'

const SeenStack = createStackNavigator();

const SeenStackScreen = () => {
  const viewed        = useSelector((state) => state.viewed.items);
    return (
      <SeenStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <SeenStack.Screen name="SeenScreen" component={SeenScreen} 
                                            options={{
                                              title : 'Đã xem',
                                              headerRight : () => <IconHeader seen data={viewed} />
                                            }}/>
    </SeenStack.Navigator>
    );
}


export default SeenStackScreen