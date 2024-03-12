import './App.css';
import React from 'react';
// import 'tailwindcss/tailwind.css';
import Card from './components/Card';
import Team from './components/Team'
function App() {
  return (
    <React.Fragment>
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <Card />
    </div>

    <div>
      <Team/>
    </div>
    </React.Fragment>
  );
}


export default App;
