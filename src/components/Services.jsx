import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaShieldAlt, FaNetworkWired, FaServer, FaLinux, FaMicrochip } from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: FaCode,
      title: 'Desarrollo de Software',
      description: 'Diseño e implementación de soluciones de software orientadas a eficiencia, mantenibilidad y escalabilidad.'
    },
    {
      icon: FaShieldAlt,
      title: 'Ciberseguridad',
      description: 'Análisis de riesgos, buenas prácticas de seguridad y fortalecimiento de sistemas y aplicaciones.'
    },
    {
      icon: FaLinux,
      title: 'Linux y Administración',
      description: 'Gestión de entornos Linux, automatización de tareas y administración de servicios críticos.'
    },
    {
      icon: FaServer,
      title: 'Servidores e Infraestructura',
      description: 'Configuración y mantenimiento de infraestructura tecnológica para garantizar continuidad operativa.'
    },
    {
      icon: FaNetworkWired,
      title: 'Redes y Comunicaciones',
      description: 'Comprensión de protocolos, modelos de red y configuración de entornos de conectividad empresarial.'
    },
    {
      icon: FaMicrochip,
      title: 'Electrónica Aplicada',
      description: 'Base en hardware y sistemas digitales para entender la capa física de la tecnología.'
    },
  ]


  return (
    <section id="formacion" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Formación
          </h2>

          <div className="grid-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
                style={{ textAlign: 'center', padding: '40px 30px' }}
              >
                <div 
                  style={{ 
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 168, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}
                >
                  <service.icon style={{ fontSize: '36px', color: '#00a8ff' }} />
                </div>
                <h3 style={{ color: '#ccd6f6', fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#8892b0', fontSize: '15px', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Services
