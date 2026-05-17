import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: 'Escáner de Vulnerabilidades Web',
      description: 'Herramienta automatizada para detectar vulnerabilidades en aplicaciones web: inyecciones SQL, XSS, CSRF y configuraciones inseguras.',
      tags: ['Python', 'OWASP', 'Requests', 'BeautifulSoup'],
      github: 'https://github.com/cybernetjs/Escaner-de-Vulnerabilidades-Web',
      demo: 'https://github.com/cybernetjs/Escaner-de-Vulnerabilidades-Web'
    },
    {
      title: 'Escáner de Red',
      description: 'Escáner de hosts activos en una red local con detección de dispositivos, resolución de nombres y mapeo de topología.',
      tags: ['Python', 'Scapy', 'ARP', 'ICMP'],
      github: 'https://github.com/cybernetjs/Escaner-de-Red',
      demo: 'https://github.com/cybernetjs/Escaner-de-Red'
    },
    {
      title: 'Escáner de Servicios y Versiones',
      description: 'Herramienta de enumeración de puertos abiertos y detección de servicios y versiones expuestas en sistemas objetivos.',
      tags: ['Python', 'Sockets', 'Banner Grabbing', 'Nmap API'],
      github: 'https://github.com/cybernetjs/Escaner-de-Servicios-Activos-en-Windows',
      demo: 'https://github.com/cybernetjs/Escaner-de-Servicios-Activos-en-Windows'
    },
    {
      title: 'Sistema de Reconocimiento de Infraestructura Web',
      description: 'Herramienta para reconocimiento de infraestructura y análisis de servicios web, orientada a detectar hosts, puertos, tecnologías activas y configuraciones expuestas.',
      tags: ['Python', 'Nmap', 'Requests', 'DNS', 'HTTP'],
      github: 'https://github.com/cybernetjs/Escaner-de-Infraestructura-y-Servicios-Web',
      demo: 'https://github.com/cybernetjs/Escaner-de-Infraestructura-y-Servicios-Web'
    },
    {
      title: 'Fuzzer Web',
      description: 'Fuzzer para descubrir rutas ocultas, parámetros y endpoints no documentados en aplicaciones y APIs web.',
      tags: ['Python', 'Threading', 'Wordlists', 'HTTP'],
      github: 'https://github.com/cybernetjs/Fuzzer-Web',
      demo: 'https://github.com/cybernetjs/Fuzzer-Web'
    },
    {
      title: 'Sistema de Detección de Intrusiones',
      description: 'IDS basado en análisis de tráfico de red en tiempo real, con alertas ante comportamientos anómalos y patrones de ataque conocidos.',
      tags: ['Python', 'Scapy', 'Machine Learning', 'Alertas'],
      github: 'https://github.com/cybernetjs/Sistema-de-Deteccion-de-Intrusiones',
      demo: 'https://github.com/cybernetjs/Sistema-de-Deteccion-de-Intrusiones'
    },
  ]

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Proyectos
          </h2>

          <div className="grid-3">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <FaFolder style={{ fontSize: '40px', color: '#00a8ff' }} />
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a 
                      href={project.github}
                      style={{ color: '#8892b0', fontSize: '20px', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00a8ff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#8892b0'}
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo}
                      style={{ color: '#8892b0', fontSize: '20px', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00a8ff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#8892b0'}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 style={{ color: '#ccd6f6', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      style={{ 
                        color: '#8892b0',
                        fontSize: '12px',
                        fontFamily: "'Fira Code', monospace"
                      }}
                    >
                      {tag}{tagIdx < project.tags.length - 1 && ' •'}
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

export default Projects
