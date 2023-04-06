// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Tani',
    lastname: 'Jorg',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600 $ en mons',
  address: 'st.Linda, Madrid',
}

var footer = {
  social: {
    email: {
      text: 'tjorg@mail.com',
      href: 'mailto:tjorg@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume - Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistic ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    // ↙ сюди вводимо JSON данні
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume - Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Music',
          isMain: false,
        },
        {
          name: 'Reading',
          isMain: true,
        },
        {
          name: 'Sport',
          isMain: false,
        },
        {
          name: 'Animals',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume - Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Primary school',
          isEnd: true,
        },
        {
          name: 'Institute',
          isEnd: true,
        },
        {
          name: 'Institute Technology',
          isEnd: false,
        },
        {
          name: 'Stanford University',
          isEnd: true,
        },
        {
          name: 'University of Chicago',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Graduate',
          id: 1111,
        },
        {
          name: 'Compulsory Secondary Education',
          id: 2222,
        },
        {
          name: 'Masters degree',
          id: 3333,
        },
      ],
    },

    // ↙ сюди вводимо JSON данні
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume - Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Discover a new market',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Test prueba',
                },
                {
                  name: 'Test prueba dos',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    // ↙ сюди вводимо JSON данні
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
