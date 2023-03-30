import { useState } from 'react';
import { DisplayBox } from './components/DisplayBox';
import { MenuList } from './components/MenuList';
import './global.css';

function App() {
  const [currentDiff, setCurrentDiff] = useState('Medium');

  function handleChangeLevel(level) {
    setCurrentDiff(level)
  }

  return (
    <div className="container">
      <MenuList diffLevel={currentDiff} handleChange={handleChangeLevel}  />
      <DisplayBox diff={currentDiff} />
    </div>
  );
}

export default App;
