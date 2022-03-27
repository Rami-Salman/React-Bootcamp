import logo from './react.png';
import './App.css';
import Post  from './components/Post';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    
    <div className="container">
      <Header />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
