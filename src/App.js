import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <h1>YOUR APPLICATION NAME!</h1>
      <TheDate />
      <Counter count={123} />
      <HelloWorld />
      <Bomb />
      <RouletteGun />
    </main>
  );
}

export default App;