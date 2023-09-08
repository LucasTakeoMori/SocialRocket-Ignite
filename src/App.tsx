import { Post, PostType } from './componentes/Post'
import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'

import './global/styles.css'
import styles from './App.module.css'



//  author: { avatar_url: "", name: "", role: ""}
//  publushiedAt: Date
//  content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caio.png',
      name: 'Lucas Takeo Mori',
      role: 'Programador Full Stack',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio.',},
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link',      content: 'jane.design/doctorcare',}
    ],

    publishiedAt: new Date('2023-08-01 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio.',},
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link',      content: 'jane.design/doctorcare',}
    ],

    publishiedAt: new Date('2023-08-03 15:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/caio.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio.',},
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link',      content: 'jane.design/doctorcare',}
    ],

    publishiedAt: new Date('2023-08-04 15:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </>
  )
}

export default App
