import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutus from './components/AboutUs';

function App() {
  return (
    <div className = 'App'>
      <Router>
        <Header />
        <Routes>
          <Route path = '/'>
            <Route index element = {<Content/>}/>
            <Route path = '/aboutus' element = {<Aboutus />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
