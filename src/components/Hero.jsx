import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTerminal, FaChevronDown, FaFolderOpen } from 'react-icons/fa'
import { SiHackthebox } from 'react-icons/si'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ['Desarrollo de Software', 'Administración de sistemas', 'Linux y Servidores', 'Redes y Sistemas', 'Electrónica','Gestión de Bases de datos SQL y NoSQL']

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1))
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1))
        if (typedText === '') {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, textIndex])

  const socials = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:', label: 'Correo electrónico' },
    { icon: SiHackthebox, href: 'https://app.hackthebox.com/profile', label: 'Hack The Box' },
  ]

  const terminalLines = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'José Luis Huaynate Achachau' },
    { type: 'empty', text: '' },
    { type: 'command', text: '$ cat perfil_tecnico.md' },
    { type: 'skill', text: '[+] Desarrollo de software y arquitectura' },
    { type: 'skill', text: '[+] Linux, servidores y administración' },
    { type: 'skill', text: '[+] Redes, protocolos y comunicaciones' },
    { type: 'skill', text: '[+] Ciberseguridad y análisis de riesgos' },
    { type: 'skill', text: '[+] Electrónica y hardware' },
    { type: 'empty', text: '' },
    { type: 'command', text: '$ ./build_solutions.sh' },
    { type: 'success', text: '[✓] Soluciones eficientes y seguras' },
    { type: 'empty', text: '' },
    { type: 'cursor', text: '$ ' },
  ]

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative'
      }}
    >
      <div className="container hero-container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '72px', alignItems: 'center' }}>
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
            style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
          >
            {/* Saludo */}
            <p
              style={{
                color: '#00a8ff',
                fontFamily: "'Fira Code', monospace",
                fontSize: '18px',
                marginBottom: '0'
              }}
            >
              &gt; Hola, mi nombre es
            </p>

            {/* Nombre con efecto glitch */}
            <h1
              className="glitch-text"
              data-text="José Luis Huaynate Achachau"
              style={{
                fontSize: 'clamp(30px, 4.2vw, 56px)',
                fontWeight: 700,
                lineHeight: 1.12,
                marginBottom: '0',
                color: '#00a8ff',
                position: 'relative',
                maxWidth: '540px'
              }}
            >
              José Luis
            </h1>
            {/* Descripción 
            <p
              style={{
                color: '#8892b0',
                fontSize: '17px',
                maxWidth: '700px',
                lineHeight: 1.8,
                marginBottom: '0'
              }}
            >
              Soy Ingeniero de Sistemas , con una formación integral en redes, ciberseguridad y electrónica.
            </p>
           */}
            {/* Título con typing */}
            <h3
              className="hero-headline"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 26px)',
                color: '#8892b0',
                fontWeight: 400,
                marginBottom: '0',
                maxWidth: '680px',
                lineHeight: 1.55,
                minHeight: '0'
              }}
            >
              Soy Ingeniero de Sistemas , con formación integral en redes, ciberseguridad y electrónica.
              <br />
            </h3>
            <h2
              className="hero-headline"
              style={{
                fontSize: 'clamp(22px, 2.9vw, 36px)',
                color: '#8892b0',
                fontWeight: 400,
                marginBottom: '0',
                maxWidth: '680px',
                lineHeight: 1.4,
                minHeight: '110px'
              }}
            >
              <span
                className="hero-focus"
                style={{
                  color: '#00d4ff',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{typedText}</span>
                <span className="animate-blink" style={{ color: '#00a8ff' }}>|</span>
              </span>
            </h2>

            {/* Botones */}
            <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '6px' }}>
              <a href="#proyectos" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '20px' }}>
                <FaFolderOpen style={{ fontSize: '24px', color: '#fff' }} /> Ver Proyectos
              </a>
              <a href="#sobre-mi" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '20px' }}>
                <FaTerminal style={{ fontSize: '22px' }} /> Conocer Perfil
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '2px' }}>
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    color: '#ccd6f6',
                    fontSize: '26px',
                    borderRadius: '12px',
                    background: 'transparent',
                    border: '1px solid #22304a',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(.4,2,.6,1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#22304a';
                    e.currentTarget.style.color = '#00a8ff';
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#ccd6f6';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Panel de código */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-code"
            style={{ width: '100%' }}
          >
            <div
              className="hero-terminal"
              style={{
                backgroundColor: '#112240',
                borderRadius: '12px',
                border: '1px solid rgba(0, 168, 255, 0.2)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '100%'
              }}
            >
              {/* Barra de título del terminal */}
              <div
                style={{
                  backgroundColor: '#0a192f',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(0, 168, 255, 0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27ca40' }} />
                </div>
                <span style={{ color: '#8892b0', fontSize: '13px', fontFamily: "'Fira Code', monospace" }}>
                  bash ~ systems-engineering
                </span>
              </div>

              {/* Contenido del terminal */}
              <div style={{ padding: '24px', fontFamily: "'Fira Code', monospace", fontSize: '15px', lineHeight: '1.78' }}>
                {terminalLines.map((line, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    {line.type === 'command' && (
                      <span style={{ color: '#00a8ff' }}>{line.text}</span>
                    )}
                    {line.type === 'output' && (
                      <span style={{ color: '#ccd6f6', marginLeft: '0' }}>{line.text}</span>
                    )}
                    {line.type === 'skill' && (
                      <span style={{ color: '#27ca40' }}>{line.text}</span>
                    )}
                    {line.type === 'success' && (
                      <span style={{ color: '#00d4ff' }}>{line.text}</span>
                    )}
                    {line.type === 'empty' && (
                      <span>&nbsp;</span>
                    )}
                    {line.type === 'cursor' && (
                      <span style={{ color: '#00a8ff' }}>
                        {line.text}<span className="animate-blink">▊</span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#sobre-mi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="animate-float"
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#00a8ff',
            fontSize: '28px'
          }}
        >
          <FaChevronDown />
        </motion.a>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-container {
            max-width: 1380px !important;
          }
          .hero-grid {
            grid-template-columns: minmax(740px, 1.22fr) minmax(500px, 0.9fr) !important;
            gap: 76px !important;
          }
          .hero-text {
            text-align: left;
            padding-right: 16px;
            max-width: 760px;
          }
          .hero-headline {
            white-space: normal;
            min-height: 0 !important;
          }
          .hero-focus {
            display: inline-block;
            margin-top: 6px;
          }
          .hero-code {
            justify-self: end;
            margin-left: 34px;
            max-width: 680px;
          }
          .hero-terminal {
            min-height: 500px;
          }
          .hero-actions {
            margin-top: 16px !important;
          }
          .hero-socials {
            margin-top: 14px !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-text {
            text-align: center;
            align-items: center;
          }
          .hero-actions,
          .hero-socials {
            justify-content: center;
          }
          .hero-code {
            display: none;
          }
          .hero-headline {
            white-space: normal;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
