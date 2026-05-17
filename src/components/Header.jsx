import { useState, useEffect } from 'react'
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#formacion', label: 'Formación' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#cuaderno', label: 'Cuaderno' },
    { href: '#bibliografia', label: 'Bibliografía' },
  ]

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: '16px 0',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(10, 14, 23, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? '0 4px 30px rgba(0, 168, 255, 0.1)' : 'none'
  }

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            color: '#00aaff',
            fontSize: '22px',
            fontWeight: 700
          }}
        >
          <FaShieldAlt style={{ fontSize: '24px', color: '#00aaff' }} />
          <span style={{ 
            color: '#00aaff',
            fontSize: '22px',
            fontWeight: 700
          }}>NetStrikerJS</span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ position: 'relative' }}>
                <a 
                  href={link.href}
                  className="nav-link"
                  style={{ 
                    color: '#00a8ff',
                    fontSize: '15px',
                    fontWeight: 500,
                    position: 'relative',
                    padding: '4px 0',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            display: 'block',
            color: '#00a8ff',
            fontSize: '24px',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 14, 23, 0.98)',
              padding: '40px 24px',
              zIndex: 999
            }}
            className="mobile-menu"
          >
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      style={{ 
                        color: '#ccd6f6',
                        fontSize: '20px',
                        fontWeight: 500
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        .nav-link {
          color: #00a8ff;
          position: relative;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #00a8ff;
          transition: width 0.3s;
          position: absolute;
          left: 0;
          bottom: -2px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #00ffd0;
        }
      `}</style>
    </header>
  )
}

export default Header
