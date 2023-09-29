import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import FeedbackForm from './components/FeedbackForm';
import './css/App.css';

function App() {
  return (
    <div className = 'App'>
      <Header />
      <Content />
      <FeedbackForm />
      <Footer />
    </div>

  );
}

export default App;
