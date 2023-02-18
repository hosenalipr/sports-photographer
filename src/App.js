import './App.css';
import Fooder from './components/Fooder/Fooder';
import Header from './components/Header/Header';
import Home from './components/Page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/Page/About/About';
import Blog from './components/Page/Blog/Blog';
import NotFound from './components/Page/NotFound/NotFound';


function App() {

  return (
    <div className="App" >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Fooder />
    </div >
  );
}

export default App;
