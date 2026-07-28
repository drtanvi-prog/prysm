import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Platform } from './pages/Platform'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<Platform />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
