import express from 'express'
import cors from 'cors'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Inicializar base de datos SQLite
const db = new Database(join(__dirname, 'database.db'))

// Crear tabla de contactos si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT 0
  )
`)

console.log('✅ Base de datos SQLite inicializada')

// Ruta para recibir mensajes del formulario de contacto
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validación
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Todos los campos son requeridos' 
      })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Formato de email inválido' 
      })
    }

    // Insertar en la base de datos
    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `)
    
    const result = stmt.run(name, email, subject, message)

    console.log(`📧 Nuevo mensaje recibido de: ${name} (${email})`)

    res.status(201).json({ 
      success: true,
      message: 'Mensaje enviado correctamente',
      id: result.lastInsertRowid
    })

  } catch (error) {
    console.error('Error al guardar mensaje:', error)
    res.status(500).json({ 
      error: 'Error interno del servidor' 
    })
  }
})

// Ruta para obtener todos los mensajes (admin)
app.get('/api/contacts', (req, res) => {
  try {
    const contacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all()
    res.json(contacts)
  } catch (error) {
    console.error('Error al obtener mensajes:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// Ruta para marcar mensaje como leído
app.patch('/api/contacts/:id/read', (req, res) => {
  try {
    const { id } = req.params
    const stmt = db.prepare('UPDATE contacts SET read = 1 WHERE id = ?')
    stmt.run(id)
    res.json({ success: true })
  } catch (error) {
    console.error('Error al actualizar mensaje:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// Ruta para eliminar mensaje
app.delete('/api/contacts/:id', (req, res) => {
  try {
    const { id } = req.params
    const stmt = db.prepare('DELETE FROM contacts WHERE id = ?')
    stmt.run(id)
    res.json({ success: true })
  } catch (error) {
    console.error('Error al eliminar mensaje:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

// Ruta de estado
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: 'connected'
  })
})

app.listen(PORT, () => {
  console.log(`
🚀 Servidor backend iniciado
📡 API disponible en: http://localhost:${PORT}
📊 Endpoints disponibles:
   POST   /api/contact     - Enviar mensaje
   GET    /api/contacts    - Listar mensajes
   PATCH  /api/contacts/:id/read - Marcar como leído
   DELETE /api/contacts/:id - Eliminar mensaje
   GET    /api/health      - Estado del servidor
  `)
})
