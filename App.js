
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import './App.css';
import Header from './components/Header';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';

function App() {
  return (
   <Router>
   <div className='App'>
    <Header />
    <ToastContainer position="top-center"/>
    <Routes>
      {/* <Route path="/welcome" element={<Home/> } />
      <Route path="/add" component={AddEdit} />
      <Route path="/update/:id" component={AddEdit} />
      <Route path="/view/:id" component={View} />
      <Route path="/about" component={About} /> */}
      <Route path="/" element={<Home />}></Route>
        <Route exact path= "/Add" element={<AddEdit/>}/>
        <Route exact path= "/About" element={<About/>}/>
        <Route exact path= "/View/:id" element={<View/>}/>
        <Route exact path= "/Update/:id" element={<AddEdit/>}/>
    </Routes>
   </div>
   </Router>
  );
}

export default App;
