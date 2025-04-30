const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// Servir imágenes estáticas desde la carpeta /images
app.use('/images', express.static('images'))

app.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Personal",
      description: "Web personal hecha con React y Node.js.",
      image: "/images/portfolio.png",
      githubBackend: "https://github.com/tuusuario/todo-api",
      githubFrontend: "https://github.com/tuusuario/todo-api",
      tags: ["React", "Node", "CSS"]
    },
    {
      id: 2,
      name: "Clínica Dental",
      description: "Página web de clínica dental.",
      image: "/images/clinicadental.png",
      githubBackend: "https://github.com/sergiocheca16/projectBreak3BACKEND.git",
      githubFrontend: "https://github.com/sergiocheca16/projectBreak3FRONTEND.git",
      web: "https://projectbreak3-frontend.netlify.app/",
      tags: ["Node", "Express", "MongoDB", "React", "Css", "JWT"]
    },
    {
      id: 3,
      name: "Dashboard",
      description: "Dashboard realizado con Html, Css y JavaScript.",
      image: "/images/dashboard.png",
      githubBackend: "https://github.com/sergiocheca16/dashboard.git",
      web: "https://sergiocheca16.github.io/dashboard/",
      tags: ["Html", "Css", "JavaScript"]
    }
  ]

  res.json(projects)
})

app.listen(port, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${port}`)
})
