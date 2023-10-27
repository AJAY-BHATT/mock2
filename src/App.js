import React from 'react'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import CreatePayment from './components/CompletePayment';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';

import RechargePlan from './components/RechargePlan';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<CreatePayment />} />
      
      <Route path="/plan" element={<RechargePlan/>} />

      </Routes>
    </Router>
  )
}

export default App