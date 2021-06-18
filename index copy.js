const express = require('express')
const app = express()

app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let persons = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2020-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2020-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2020-01-10T19:20:14.298Z",
      important: true
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello Outer World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(note => note.id === id)

    if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })

    const generateId = () => {
      const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
      return maxId + 1
    }
    
    app.post('/api/persons', (request, response) => {
      const body = request.body
    
      if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
    
      const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
      }
    
      persons = persons.concat(note)
    
      response.json(note)
    })

    app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
    
    response.status(204).end()
    })

    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: 'unknown endpoint' })
    }
    
    app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})