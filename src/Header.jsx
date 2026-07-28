import { Logo } from './utils/Icons'
import { Link } from 'react-router-dom'

export const Header = () => {

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "How it works", href: "/how-it-works" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ]

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="flex items-center gap-2" aria-label="PRYSM Home">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link 
                                to={link.href} 
                                className="text-sm font-medium text-slate-600 hover:text-indigo-950 transition-colors"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                        Request Demo
                    </Link>
                </div>

            </nav>
        </header>
    )
}