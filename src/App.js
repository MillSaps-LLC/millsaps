import logo from './logo.svg';
import './App.css';

import text_logo from './media/text-logo.png';
import main_logo from './media/main-logo.png';

function App() {
  return (
    <div className="App">
        <img className='logo' src={text_logo} />
        <p className='header'> We're doing something special for you.</p>
        <p className='sub'> Our development team has started webpage process. <br /> 
        We can't wait for you to see what we're doing. Come back on May 13! We'll together soon, stay tuned!</p>
    </div>
  );
}

export default App;
