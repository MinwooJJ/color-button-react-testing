import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled ? 'gray' : buttonColor,
          color: 'white',
        }}
        disabled={disabled}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      {/* label tag to add name of checkbox */}
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
