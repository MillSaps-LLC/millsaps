import logo from './logo.svg';
import './App.css';

import barrier from './media/barrier.svg';
import text_logo from './media/text-logo.png';
import main_logo from './media/main-logo.png';

function App() {
  return (
    <div className="App">
        <img className='logo' src={text_logo} />
        <p className='header'> We're doing something special for you.</p>
        <p className='sub'> Our development team has started webpage process until May 13. <br /> We'll together soon, stay tuned!</p>
        <img className='barrier' src={barrier} />
    </div>
  );
}

export default App;
