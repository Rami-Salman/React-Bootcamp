import logo from './react.png';
import './App.css';

function App() {

  return (
    
    <div className="container">
     
      <div className="post">
        <div className="post-picture">
            <img src={logo} />
        </div>
        <div className="post-info">
            <h1>React Rules!</h1>
            <span>By: Muhammad Salah</span>
            <p>This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
