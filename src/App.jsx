import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Platform } from './pages/Platform'
import { About } from './pages/About'
import { Solutions } from './pages/Solutions'
import { Results } from './pages/Results'
import { Security } from './pages/Security'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-accent-soft selection:text-ink">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App