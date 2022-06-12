import React from 'react';
import 'normalize.css/normalize.css';
import '../src/styles/main.css';

import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <div className='App'>
      <Button>Привет</Button>
      <Input />
    </div>
  );
}

export default App;
