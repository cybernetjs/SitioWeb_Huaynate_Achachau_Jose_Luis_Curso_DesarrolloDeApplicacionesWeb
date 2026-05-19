import { FaShieldAlt, FaLock } from 'react-icons/fa'

const Footer = () => {
  const links = [
    { href: '/#inicio', label: 'Inicio' },
    { href: '/#sobre-mi', label: 'Sobre Mí' },
    { href: '/#formacion', label: 'Formación' },
    { href: '/#proyectos', label: 'Proyectos' },
    { href: '/#cuaderno', label: 'Cuaderno (Sección)' },
    { href: '/#bibliografia', label: 'Bibliografía' },
    { href: '/cuaderno', label: 'Cuaderno' },
  ]

  return (
    <footer 
      style={{ 
        backgroundColor: '#0a192f',
        borderTop: '1px solid rgba(0, 168, 255, 0.1)',
        padding: '60px 0 40px'
      }}
    >
      <div className="container">
        {/* Logo y descripción */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <a 
            href="#" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#00a8ff',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '16px'
            }}
          >
            <FaShieldAlt style={{ fontSize: '32px' }} />
            <span>José Luis Huaynate Achachau</span>
          </a>
          <p style={{ color: '#8892b0', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Administración de sistemas, redes y seguridad.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {links.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              style={{ 
                color: '#8892b0',
                fontSize: '15px',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00a8ff'}
              onMouseLeave={(e) => e.target.style.color = '#8892b0'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Separador */}
        <div style={{ height: '1px', backgroundColor: 'rgba(0, 168, 255, 0.1)', marginBottom: '30px' }} />

        {/* Copyright */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#8892b0', fontSize: '14px', marginBottom: '12px' }}>
            © 2026 José Luis Huaynate Achachau · Ingeniero de Sistemas
          </p>
          <p 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#00a8ff',
              fontSize: '13px'
            }}
          >
            <FaLock /> Sitio protegido con las mejores prácticas de seguridad
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
