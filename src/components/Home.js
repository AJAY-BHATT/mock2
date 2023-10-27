import React from 'react'
import { Link } from 'react-router-dom'
import  "./Home.css"

const Home = () => {
  return (
    <div className='home' >
        <h1> CreateAccount Page</h1>
        <Link to="/createAccount">click</Link> <br/> <br/> <br/>
        <h1>Login Page</h1>
        <Link to="/login">click</Link><br/> <br/> <br/>
        <h2>Payment</h2>
        <Link to="/payment">click</Link><br/> <br/> <br/>
        <h1> ChoosePlan</h1>
        <Link to="/plan">click</Link><br/> <br/> <br/>

    </div>
  )
}

export default Home