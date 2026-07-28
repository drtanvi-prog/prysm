import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './utils/Icons'

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { title: "Platform", href: "/platform" },
        { title: "Solutions", href: "/solutions" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ]

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="flex items-center gap-2" aria-label="Actionable Insight Home">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname.startsWith(link.href)
                        return (
                        <li key={link.title}>
                            <Link 
                                to={link.href} 
                                className={`text-sm font-medium transition-colors ${
                                    isActive ? "text-blue-600" : "text-slate-600 hover:text-indigo-950"
                                }`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    )})}
                </ul>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                        Request Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-600 hover:text-indigo-950 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        {navLinks.map((link) => {
                            const isActive = location.pathname.startsWith(link.href)
                            return (
                            <Link 
                                key={link.title}
                                to={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-indigo-950 hover:bg-slate-50"
                                }`}
                            >
                                {link.title}
                            </Link>
                        )})}
                        <div className="pt-4 pb-2 px-3">
                            <Link 
                                to="/contact" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-base font-medium transition-colors shadow-sm"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}