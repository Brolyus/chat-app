import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Contact 
      image='https://randomuser.me/api/portraits/men/89.jpg'
      name='Jesus Gray'
      online />

      <Contact 
      image='https://randomuser.me/api/portraits/men/86.jpg'
      name='Dave Palmer'
      online />

      <Contact 
      image='https://randomuser.me/api/portraits/women/59.jpg'
      name='Debra Fox' />
    </div>
  );
}

export default App;
