import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MyComponents/Navbar'
import Products from './MyComponents/Products'
import CategoryPage from './MyComponents/CategoryPage'
import Footer from './MyComponents/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
