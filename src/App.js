import React from 'react';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

function App() {
  return (
    <main className='App'>
      <h1>YOUR APPLICATION NAME!</h1>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <TheDate />
      <Counter count={123} />
    </main>
  );
}

export default App;