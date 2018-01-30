import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import AuthReducer from './src/reducers/AuthReducer';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';

export default class App extends Component {

  componentWillMount(){
    var config = {
    apiKey: "AIzaSyCzFP8tYqkHorJrB0N8-JNIP065t79xgfg",
    authDomain: "workorbe-7ce58.firebaseapp.com",
    databaseURL: "https://workorbe-7ce58.firebaseio.com",
    projectId: "workorbe-7ce58",
    storageBucket: "workorbe-7ce58.appspot.com",
    messagingSenderId: "752554086962"
  };
  firebase.initializeApp(config);
  }


  render() {
    const rootReducer = combineReducers({
      auth: AuthReducer
    });

    const store = createStore(rootReducer, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <LoginForm style={{marginTop: 50}}/>
      </Provider>
    );
  }
}
