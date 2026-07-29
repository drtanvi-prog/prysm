import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Platform } from './pages/Platform'
import { About } from './pages/About'
import { Solutions } from './pages/Solutions'
import { Results } from './pages/Results'
import { Security } from './pages/Security'
import { ThankYou } from './pages/ThankYou'
import { ScrollToTop } from './components/ScrollToTop'

function AppContent() {
  const location = useLocation()
  const isThankYouPage = location.pathname === '/thank-you'

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-accent-soft selection:text-ink">
      {!isThankYouPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {!isThankYouPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App