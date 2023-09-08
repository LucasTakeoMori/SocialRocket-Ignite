import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/91674466?v=4'/>

                <strong>Lucas Takeo Mori</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}