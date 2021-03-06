import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage'
import LoginPage from './Components/Pages/LoginPage'

const App = () => ( 
<div className="ui container">
  <Route path="/" exact component={HomePage} /> 
   <Route path="/login" exact component={LoginPage} />

</div>
);
export default App;
