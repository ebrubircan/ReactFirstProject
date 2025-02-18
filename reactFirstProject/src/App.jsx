import { useState } from 'react'

import './App.css'
import Course from './Course'
import Angular from './assets/Angular.avif'
import Bootstrap from './assets/bootstrap.png'
import Vue from './assets/vue.jpg'
import Reactt from './assets/react.png'

function App() {

  return (
    <>
      <div className='App'>

        <Course 
          image = {Angular}
          title='Angular'
          description='Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'
       />
        <Course 
          image = {Bootstrap}
          title='Bootstrap'
          description='Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.'  
        />
        <Course 
          image = {Vue}
          title='Vue'
          description='Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.'
        />
        <Course
          image = {Reactt}
          title='React'
          description='React is an open-source, front end, JavaScript library for building user interfaces or UI components.'
        />
      </div>
    </>
  )
}

export default App
