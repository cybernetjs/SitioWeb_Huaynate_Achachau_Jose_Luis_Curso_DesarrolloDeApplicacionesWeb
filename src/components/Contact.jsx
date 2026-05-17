import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa'
import { FaGithub as FaGithubModern, FaLinkedin as FaLinkedinModern, FaTwitter as FaTwitterModern } from 'react-icons/fa6'
import { SiHackthebox } from 'react-icons/si'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: '¡Mensaje enviado correctamente!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Error al enviar el mensaje' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión. Inténtalo de nuevo.' })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'hackinnetjs@ciberseguridad.com', href: 'mailto:hackinnetjs@ciberseguridad.com' },
    { icon: FaMapMarkerAlt, label: 'Ubicación', value: 'Ciudad de México, México', href: null },
  ]

  const socials = [
    { icon: FaLinkedinModern, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithubModern, href: 'https://github.com', label: 'GitHub' },
    { icon: FaTwitterModern, href: 'https://twitter.com', label: 'Twitter' },
    { icon: SiHackthebox, href: 'https://app.hackthebox.com/profile', label: 'Hack The Box' },
  ]

  return (
    <section id="contacto" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Contacto
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }} className="contact-grid">
            {/* Información de contacto */}
            <div>
              <h3 style={{ color: '#ccd6f6', fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
                ¿Tienes un proyecto en mente?
              </h3>
              <p style={{ color: '#8892b0', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
                Estoy disponible para proyectos de consultoría, auditorías de seguridad 
                y colaboraciones. No dudes en contactarme.
              </p>

              {/* Contact Info */}
              <div style={{ marginBottom: '32px' }}>
                {contactInfo.map((info, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px',
                      marginBottom: '20px'
                    }}
                  >
                    <div 
                      style={{ 
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(0, 168, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <info.icon style={{ fontSize: '22px', color: '#00a8ff' }} />
                    </div>
                    <div>
                      <p style={{ color: '#8892b0', fontSize: '13px', marginBottom: '4px' }}>{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          style={{ color: '#ccd6f6', fontSize: '16px', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#00a8ff'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#ccd6f6'}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: '#ccd6f6', fontSize: '16px' }}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Redes Sociales */}
              <div>
                <p style={{ color: '#8892b0', fontSize: '14px', marginBottom: '16px' }}>Sígueme en:</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {socials.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{ 
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ccd6f6',
                        fontSize: idx === 3 ? '28px' : '24px',
                        border: '1px solid #22304a',
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
              </div>
            </div>

            {/* Formulario */}
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Nombre</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email"
                    className="form-input"
                    placeholder="hackinnetjs@ciberseguridad.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Asunto</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="¿En qué puedo ayudarte?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mensaje</label>
                  <textarea 
                    className="form-input"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {status.message && (
                  <div 
                    style={{ 
                      padding: '14px 18px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: status.type === 'success' ? '#10b981' : '#ef4444',
                      border: `1px solid ${status.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                    }}
                  >
                    {status.type === 'success' ? <FaCheck /> : <FaExclamationCircle />}
                    {status.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <FaPaperPlane /> Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
