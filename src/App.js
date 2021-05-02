import React from 'react';
import Pagefooter from './components/footer'
// import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Signup from './components/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/login'
import ProfilePage from './components/ProfilePage'
import Chats from './components/chats'
import Help from './components/help'


function App() {
  return (
    <BrowserRouter >
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profilepage" component={ProfilePage} />
      <Route exact path="/chats" component={Chats} />
      <Route path="/logout" component={Landingpage} />
      <Route path="/help" component={Help} />
      <Pagefooter />
    </BrowserRouter>
  );
}

export default App;
