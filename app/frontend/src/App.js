import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateService from "./Pages/CreateService";
import CurrentService from "./Pages/CurrentService"

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/service' element={ <CreateService /> } />
        <Route path='/service/:id' element={ <CurrentService /> } />
      </Routes>
    );
  }
}

export default App;
