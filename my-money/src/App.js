import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home'; 
import Login from './pages/Login';
import Movimentacoes from './pages/Movimentacoes';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/movimentacoes/:data' component={Movimentacoes} />
      </Switch>
    </Router>
  );
}

export default App;
