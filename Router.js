import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomePage from './src/components/HomePage';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';

const RouterComponent = () => {
  return(
    <Router>
      <Scene>
        <Scene key="HomePage" component={HomePage} initial />
        <Scene key="HomePage" component={SignUpForm} />
        <Scene key="HomePage" component={LoginForm} />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
