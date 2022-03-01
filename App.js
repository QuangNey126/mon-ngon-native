import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation'
import { Provider } from 'react-redux'

import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
   
  );
}
