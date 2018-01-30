import firebase from 'firebase';

export const loginSuccess = (user) => {return {type: 'loginSuccess', user: user}};

export const loginFailure = (error) => {return {type: 'loginFailure', error: error}};

export const loginStart = () => {return {type: 'loginStart'}};

export const signUpStart = () => {return {type: 'signUpStart'}};

export const signUpSuccess = (user) => {return {type: 'signUpSuccess', user: user}};

export const signUpFailure = (error) => {return {type: 'signUpFailure', error: error}};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { return dispatch(loginSuccess(user))})
      .catch((error)=>{return dispatch(loginFailure(error))});
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    dispatch(signUpStart());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user)=>{return dispatch(signUpSuccess(user))})
      .catch((error)=>{return dispatch(signUpFailure(error))})
  };
};
