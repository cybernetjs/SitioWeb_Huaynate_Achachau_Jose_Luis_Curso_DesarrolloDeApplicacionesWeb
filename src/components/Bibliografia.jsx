import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Bibliografia = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const libros = [
    'Media Active (2014). Aprende a Programar Apps con HTML5, CSS y JavaScript. Editorial Alfaomega. Primera Edicion. (L-CA-3811).',
    'Frank Zickert (2020). React Architect: Full Stack React App Development and Serverless Deployment. Editorial React-Architect.',
    'Pressman, R. S. y Maxim, B. (2015). Software Engineering: A Practitioner\'s Approach. McGraw-Hill. 8th edition.',
    'Pressman, R. S. y Maxim, B. (2010). Ingenieria del Software: Un enfoque practico. McGraw-Hill. 7ma edicion.',
    'Sommerville, I. (2011). Ingenieria del Software. Pearson. 9na edicion.',
    'Gerard O\'Regan (2017). Concise Guide to Software Engineering: From Fundamentals to Application Methods. Editorial Springer International. Primera Edicion.'
  ]

  const recursos = [
    {
      label: 'SciELO - Ingenieria de Software',
      url: 'https://scielo.conicyt.cl/pdf/ingeniare/v26n3/0718-3305-ingeniare-26-03-00473.pdf'
    },
    {
      label: 'ProQuest - Recurso academico',
      url: 'https://media.proquest.com/media/hms/PFT/1/vPfNH?_s=I7xsvZlm%2B%2BmltC1nWiM0iXSw4ME%3D'
    },
    {
      label: 'PMO Informatica - Documento de Requerimientos de Software',
      url: 'http://www.pmoinformatica.com/2018/04/documento-de-requerimientos-de-software_37.html'
    },
    {
      label: 'LinkedIn - Ingenieria de Requerimientos (enfoque agil)',
      url: 'https://www.linkedin.com/pulse/ingenier%C3%ADa-de-requerimientos-bajo-un-enfoque-%C3%A1gil-mejias-cruz?articleId=6631527343217270785'
    },
    {
      label: 'SEDICI UNLP - Documento completo',
      url: 'http://sedici.unlp.edu.ar/bitstream/handle/10915/62882/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y'
    }
  ]

  return (
    <section id="bibliografia" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Bibliografía
          </h2>

          <div className="grid-2">
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ color: '#00a8ff', fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
                Libros
              </h3>
              <ol style={{ listStyle: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {libros.map((libro, idx) => (
                  <li key={idx} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                    {libro}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ color: '#00a8ff', fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
                Recursos en linea (URLs)
              </h3>
              <ol style={{ listStyle: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {recursos.map((recurso, idx) => (
                  <li key={idx} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                    <span style={{ color: '#ccd6f6', fontWeight: 600 }}>
                      {recurso.label}:
                    </span>{' '}
                    <a href={recurso.url} style={{ color: '#00a8ff' }}>
                      {recurso.url}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bibliografia
