import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import {useGlobalContext} from './context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SingleCocktailPage from './pages/SingleCocktailPage';
import ErrorPage from './pages/ErrorPage';
function App() {
  const prova = useGlobalContext();
  console.log(prova);
  
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cocktail/:id" element={<SingleCocktailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
