/** @fileoverview
 *  the main webpage of the app
 */

import './App.css';
import ExpanderButton from './buttons/expander.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpanderButton />
      </header>
    </div>
  );
}

export default App;
