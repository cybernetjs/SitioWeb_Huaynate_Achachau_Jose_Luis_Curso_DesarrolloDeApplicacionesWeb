import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaTools, FaNetworkWired, FaServer } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Desarrollo y Arquitectura',
      skills: ['JavaScript', 'Python', 'Node.js', 'React', 'SQL', 'APIs REST', 'Git', 'Patrones de diseño']
    },
    {
      icon: FaServer,
      title: 'Sistemas y Servidores',
      skills: ['Linux', 'Windows Server', 'Bash', 'PowerShell', 'Virtualización', 'Servicios web', 'Hardening', 'Monitoreo']
    },
    {
      icon: FaNetworkWired,
      title: 'Redes y Ciberseguridad',
      skills: ['TCP/IP', 'Routing y Switching', 'Wireshark', 'Firewalling', 'Gestión de accesos', 'Seguridad de red', 'Análisis de tráfico', 'Protocolos']
    },
    {
      icon: FaTools,
      title: 'Electrónica y Base Tecnológica',
      skills: ['Arquitectura computacional', 'Hardware', 'Sistemas digitales', 'Instrumentación básica', 'Diagnóstico técnico', 'Integración HW/SW']
    },
  ]

  return (
    <section id="habilidades" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Habilidades
          </h2>

          <div className="grid-2">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
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
                    <category.icon style={{ fontSize: '24px', color: '#00a8ff' }} />
                  </div>
                  <h3 style={{ color: '#ccd6f6', fontSize: '20px', fontWeight: 600 }}>
                    {category.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {category.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
