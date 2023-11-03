import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
