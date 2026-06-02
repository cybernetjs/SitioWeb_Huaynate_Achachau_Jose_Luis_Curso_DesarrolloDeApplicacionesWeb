import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLayerGroup, FaCode, FaBrain } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import foto from '../../foto/foto.jpg'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [stats, setStats] = useState([
    { value: 0, target: 7, label: 'Áreas Técnicas', suffix: '', icon: FaCode },
    { value: 0, target: 3, label: 'Capas de Enfoque', suffix: '', icon: FaLayerGroup },
    { value: 0, target: 100, label: 'Aprendizaje Continuo', suffix: '%', icon: FaBrain },
  ])

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.target / 50
        const interval = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(interval)
          }
          setStats(prev => prev.map((s, i) => 
            i === index ? { ...s, value: Math.floor(current) } : s
          ))
        }, 40)
      })
    }
  }, [inView])

  return (
    <section id="sobre-mi" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Sobre Mí
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '74px', alignItems: 'start' }} className="about-grid">
            {/* Imagen/Avatar */}
            <div style={{ display: 'flex', justifyContent: 'center' }} className="about-image">
              <div style={{ position: 'relative' }}>
                <div 
                  style={{ 
                    width: '370px',
                    height: '480px',
                    borderRadius: '18px',
                    backgroundColor: '#112240',
                    border: '3px solid #00a8ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <img
                    src={foto}
                    alt="Foto de Jose Luis Huaynate Achachau"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '14px'
                    }}
                  />
                </div>
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    width: '370px',
                    height: '480px',
                    borderRadius: '18px',
                    border: '3px solid #00a8ff',
                    zIndex: 1
                  }}
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="about-content-wrap">
              <div style={{ marginBottom: '36px', maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ color: '#00a8ff', fontSize: 'clamp(28px, 3.2vw, 40px)', lineHeight: 1.15, fontWeight: 700 }}>
                  José Luis Huaynate Achachau
                </h3>
                <p style={{ color: '#ccd6f6', fontSize: 'clamp(20px, 2.1vw, 28px)', lineHeight: 1.35, fontWeight: 500 }}>
                  Estudiante de Ingeniería de Sistemas
                </p>
                <p style={{ color: '#8892b0', fontSize: '18px', lineHeight: 1.85, marginBottom: '0', maxWidth: '720px', textAlign: 'justify' }}>
                  Hola, mi nombre es José y soy estudiante del noveno semestre de la Facultad de Ingeniería de Sistemas de la
                  Universidad Nacional del Centro del Perú. Realicé prácticas en la Oficina de Tecnologías de la Información de
                  la UNCP, donde reforcé mi enfoque en soporte, gestión tecnológica y procesos internos. Cuento con conocimientos
                  en arquitectura de software, programación, administración de sistemas, bases de datos y seguridad informática,
                  lo que me permite entender cómo se diseñan, implementan y mantienen soluciones tecnológicas en una organización.
                  Me enfoco en analizar los sistemas no solo desde su funcionamiento, sino también desde su diseño, eficiencia y
                  seguridad. Además, tengo conocimientos en redes y comunicaciones, comprendiendo el funcionamiento de protocolos,
                  modelos de red y configuración de entornos tecnológicos.
                </p>
              </div>

              {/* Stats */}
              <div 
                className="about-stats"
                style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '26px',
                  paddingTop: '34px',
                  borderTop: '1px solid rgba(0, 168, 255, 0.2)'
                }}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <stat.icon style={{ fontSize: '28px', color: '#00a8ff', marginBottom: '12px' }} />
                    <div 
                      style={{ 
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#00a8ff',
                        fontFamily: "'Fira Code', monospace"
                      }}
                    >
                      {stat.value}{stat.suffix}
                    </div>
                    <div style={{ fontSize: '14px', color: '#8892b0', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 430px 1fr !important;
          }
          .about-image {
            justify-content: flex-start !important;
          }
          .about-content-wrap {
            padding-left: 6px;
          }
        }
        @media (max-width: 900px) {
          .about-stats {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }
        @media (max-width: 520px) {
          .about-image > div > div:first-child,
          .about-image > div > div:last-child {
            width: 310px !important;
            height: 420px !important;
          }
          .about-image > div > div:first-child svg {
            font-size: 146px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
