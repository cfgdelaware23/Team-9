import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
