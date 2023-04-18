import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import CreateService from './Pages/CreateService.jsx';
import CurrentService from './Pages/CurrentService.jsx';
import Manage from './Pages/Manage.jsx';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/service' element={ <CreateService /> } />
        <Route path='/service/:id' element={ <CurrentService /> } />
        <Route path='/manage' element={ <Manage /> } />
      </Routes>
    );
  }
}

export default App;
