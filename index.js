const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/images', express.static('images'))

app.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Personal",
      description: "Web personal hecha con React y Node.js.",
      image: "/images/portfolio.png",
      githubBackend: "https://github.com/sergiocheca16/portfolioBackend.git",
      githubFrontend: "https://github.com/sergiocheca16/portfolioFrontend.git",
      web: "",
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

app.get('/skills', (req, res) => {
  const skills = [
    { id: 1, name: 'HTML', certificate: 'https://api.badgr.io/public/assertions/kUrX3TGxR0OlJm0OBZSC3g' },
    { id: 2, name: 'CSS', certificate: 'https://api.badgr.io/public/assertions/7pxeSSBwSb2Qkpn0D5PblA' },
    { id: 3, name: 'JavaScript', certificate: 'https://api.badgr.io/public/assertions/9JVxQU6PRxuv9QilMBcueA' },
    { id: 4, name: 'Git', certificate: ''},
    { id: 5, name: 'GitHub', certificate: 'https://api.badgr.io/public/assertions/LH1xEzo8R7W5VtHfRMdP6g' },
    { id: 6, name: 'Node.js', certificate: 'https://api.badgr.io/public/assertions/DD8UCQGoS7CAyAD_bUhnGw' },
    { id: 7, name: 'Express', certificate: 'https://api.badgr.io/public/assertions/AWQxY1K_QWyCE5IV-_18lA' },
    { id: 8, name: 'SQL', certificate: 'https://api.badgr.io/public/assertions/dF8cl8B-S2K5v9hB7D--oA' },
    { id: 9, name: 'MongoDB', certificate: 'https://api.badgr.io/public/assertions/jbnLaEN1SR6TcZJ3aHQXTQ' },
    { id: 10, name: 'Firebase', certificate: 'https://api.badgr.io/public/assertions/lMpdBZo5Rl2OsgdvzOjkHw'},
    { id: 11, name: 'React', certificate: 'https://api.badgr.io/public/assertions/1cS1UYJHQnSYCwtJxXNo2A' }
  ];

  res.json(skills);
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Configurar el transporte de nodemailer para enviar correos con Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sergiochecaalvea@gmail.com',  // Reemplaza con tu email
      pass: 'zmotinjiwkkcrejd',  // Reemplaza con tu contraseña
    },
    tls: {
      rejectUnauthorized: false // Ignora los certificados no verificados en desarrollo
    }
  });

  // Configurar el contenido del correo
  const mailOptions = {
    from: 'sergiochecaalvea@gmail.com',  // Reemplaza con tu email
    to: 'sergiochecaalvea@gmail.com',  // Reemplaza con tu email o el que quieras recibir los mensajes
    subject: `Nuevo mensaje de ${name}`,
    text: `Has recibido un nuevo mensaje de ${name} (${email}):\n\n${message}`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error enviando el correo:', error);
      return res.status(500).send('Error enviando el correo');
    } else {
      console.log('Correo enviado:', info.response);
      return res.status(200).send('Correo enviado');
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${port}`)
})
