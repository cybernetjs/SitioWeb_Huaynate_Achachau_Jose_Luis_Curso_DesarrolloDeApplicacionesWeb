import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaCheckCircle } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const certifications = [
    {
      name: 'Arquitectura de Software',
      fullName: 'Diseño de soluciones mantenibles y escalables',
      issuer: 'Formación académica y práctica continua',
      year: 'Actualidad'
    },
    {
      name: 'Administración Linux',
      fullName: 'Gestión de servicios, usuarios y seguridad base',
      issuer: 'Laboratorios técnicos y proyectos propios',
      year: 'Actualidad'
    },
    {
      name: 'Redes y Comunicaciones',
      fullName: 'Protocolos, modelos de red y configuración de entornos',
      issuer: 'Formación en infraestructura de red',
      year: 'Actualidad'
    },
    {
      name: 'Seguridad Informática',
      fullName: 'Análisis de riesgos y fortalecimiento de sistemas',
      issuer: 'Práctica aplicada en entornos técnicos',
      year: 'Actualidad'
    },
    {
      name: 'Bases de Datos',
      fullName: 'Modelado, consultas y administración de información',
      issuer: 'Experiencia en proyectos de software',
      year: 'Actualidad'
    },
    {
      name: 'Electrónica y Hardware',
      fullName: 'Comprensión de arquitectura computacional y componentes',
      issuer: 'Formación técnica complementaria',
      year: 'Actualidad'
    },
  ]

  return (
    <section id="certificaciones" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Formacion y Enfoque
          </h2>

          <div className="grid-3">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
                style={{ textAlign: 'center', padding: '35px 25px' }}
              >
                <div 
                  style={{ 
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 168, 255, 0.1)',
                    border: '2px solid #00a8ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <FaCertificate style={{ fontSize: '30px', color: '#00a8ff' }} />
                </div>
                
                <h3 style={{ color: '#00a8ff', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                  {cert.name}
                </h3>
                <p style={{ color: '#ccd6f6', fontSize: '14px', marginBottom: '8px', minHeight: '40px' }}>
                  {cert.fullName}
                </p>
                <p style={{ color: '#8892b0', fontSize: '13px', marginBottom: '12px' }}>
                  {cert.issuer}
                </p>
                <div 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(0, 168, 255, 0.1)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    color: '#00a8ff',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  <FaCheckCircle /> {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
