import './App.css'
import '../src/assets/sass/_root.scss'
import { BrowserRouter} from "react-router-dom";

import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import RoutesList from './utils/app/routes'


function App() {

  return (
  <BrowserRouter>
    <NavBar />
    <RoutesList />
    <Footer />
  </BrowserRouter>
  )
}

export default App
