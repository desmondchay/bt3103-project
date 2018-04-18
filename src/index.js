import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./Router";
import firebase from "firebase";
import Dashboard from "react-dazzle";
import { Provider } from "react-redux";
import store from "./store";
//const {XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// CHANGE HERE

var config = {
  apiKey: "AIzaSyCY8qv3tfThT0lpbZSlYRUkPpf8vU6xGKE",
  authDomain: "bt3103project.firebaseapp.com",
  databaseURL: "https://bt3103project.firebaseio.com",
  projectId: "bt3103project",
  storageBucket: "bt3103project.appspot.com",
  messagingSenderId: "706268225380"
};

try {
  firebase.initializeApp(config);
} catch (error) {}

export var db = firebase.database();
db.ref("/").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    //  console.log('dispatched & displaying getstate:')
    //  console.log(store.getState());
  }
});


render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//render(<App />, document.getElementById('root'));

