import { useState } from 'react';
import './App.css';
import SubComponent from './components/SubComponent';
import FunctionalComponent from './components/FunctionalComponent';
import List from './components/List';
import Counter from './components/Counter';
import Form from './components/Form';
import RenderProps from './components/RenderProps';
import ComponentOne from './components/ComponentOne';
import UseEffectCom from './components/UseEffect';
import Timer from './components/Timer';
import Post from './components/Post';
import CssStyle from './components/CssStyle';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [toggle , setToggle] = useState(false);
  
  return (
    <div>
      {/* <p>This is root </p>
      <SubComponent/>
      <FunctionalComponent/>
      <List/>
      <Counter/>
      <Form/> 
      <RenderProps course="react"/>
      <ComponentOne/>
      <UseEffectCom/>*/}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <Counter/> : <Timer/>}
      <Post/> */}
      {/* <CssStyle/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Navbar/>
    </div>
  )
}

export default App
