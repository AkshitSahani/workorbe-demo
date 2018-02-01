import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomePage from './src/components/HomePage';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';
import SearchScreen from './src/components/SearchScreen';
import FiltersScreen from './src/components/FiltersScreen';
import SearchResults from './src/components/SearchResults';

const RouterComponent = () => {
  return(
    <Router>
      <Scene>
        <Scene key="HomePage" component={HomePage} initial/>
        <Scene key="SearchScreen" component={SearchScreen} />
        <Scene key="FiltersScreen" component={FiltersScreen} />
        <Scene key="SignUpForm" component={SignUpForm} />
        <Scene key="LoginForm" component={LoginForm} />
        <Scene key="SearchResults" component={SearchResults} />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
