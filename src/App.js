import React from 'react';
import Pagefooter from './components/footer'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Signup from './components/Signup'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login'


function App() {
  return (
    <BrowserRouter >
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup} />
      <Route path="" component={} />
      <Pagefooter />
    </BrowserRouter>
  );
}

export default App;
