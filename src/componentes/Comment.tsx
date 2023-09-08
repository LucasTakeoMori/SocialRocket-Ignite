import styles from './Comment.module.css'

import {ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment()
    {
        onDeleteComment(content)
    }

    function handleLikeComment()
    {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/91674466?v=4'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Takeo Mori</strong>
                            <time title='11 de Maio ás 11:13' dateTime='2022-05-011 09:11:13'>Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comenetário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>  
                    </button>
                </footer>
            </div>
        </div>
    )
}